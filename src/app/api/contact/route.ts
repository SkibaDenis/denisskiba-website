import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const name = (formData.get("name") as string)?.trim() || "";
    const contact = (formData.get("contact") as string)?.trim() || "";
    const serviceType = (formData.get("serviceType") as string)?.trim() || "Не указано";
    const budget = (formData.get("budget") as string)?.trim() || "Не указан";
    const message = (formData.get("message") as string)?.trim() || "";
    const file = formData.get("file") as File | null;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Пожалуйста, укажите ваше имя и контакт (Telegram или телефон)" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Формируем красивое текстовое сообщение для Telegram
    const formattedText = `🔥 <b>Новая заявка с сайта denisskiba.ru</b>\n\n` +
      `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
      `📱 <b>Контакт:</b> ${escapeHtml(contact)}\n` +
      `🎯 <b>Направление:</b> ${escapeHtml(serviceType)}\n` +
      `💰 <b>Ориентир бюджета:</b> ${escapeHtml(budget)}\n` +
      (message ? `📝 <b>Описание / ТЗ:</b>\n${escapeHtml(message)}\n` : "") +
      `\n⏱ <i>Время отправки: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} (МСК)</i>`;

    // Если переменные окружения не заданы (на стадии верстки / демо)
    if (!botToken || !chatId) {
      console.warn(
        "⚠️ TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не настроены в окружении. Заявка получена в режиме симуляции:\n",
        { name, contact, serviceType, budget, message, fileName: file?.name }
      );
      return NextResponse.json({
        success: true,
        demoMode: true,
        message: "Заявка успешно отправлена! (Тестовый режим: добавьте токен бота в Vercel)",
      });
    }

    // Если прикреплен файл
    if (file && file.size > 0) {
      const tgFormData = new FormData();
      tgFormData.append("chat_id", chatId);
      tgFormData.append("caption", formattedText);
      tgFormData.append("parse_mode", "HTML");
      tgFormData.append("document", file, file.name);

      const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: "POST",
        body: tgFormData,
      });

      if (!tgRes.ok) {
        const errDetails = await tgRes.text();
        console.error("Ошибка Telegram API sendDocument:", errDetails);
        throw new Error("Не удалось доставить документ в Telegram");
      }
    } else {
      // Только текстовое сообщение
      const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: formattedText,
          parse_mode: "HTML",
        }),
      });

      if (!tgRes.ok) {
        const errDetails = await tgRes.text();
        console.error("Ошибка Telegram API sendMessage:", errDetails);
        throw new Error("Не удалось доставить сообщение в Telegram");
      }
    }

    return NextResponse.json({
      success: true,
      message: "Спасибо! Заявка успешно отправлена. Денис свяжется с вами в течение 30-60 минут.",
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Внутренняя ошибка сервера";
    console.error("Ошибка в /api/contact:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при отправке заявки. Пожалуйста, напишите напрямую в Telegram @denisskiba", details: errorMessage },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
