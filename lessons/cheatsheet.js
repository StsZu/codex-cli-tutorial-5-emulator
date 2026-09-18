window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.cheatsheet = {
  sections: [
    { title: "Запуск (shell)", rows: [
      { cmd: "codex --version", desc: "Чи встановлено Codex і яка версія", risk: "low" },
      { cmd: "codex login", desc: "Вхід через ChatGPT або API-ключ", risk: "medium" },
      { cmd: "codex", desc: "Інтерактивна сесія в поточній папці", risk: "medium" },
      { cmd: "codex \"Поясни структуру проєкту\"", desc: "Сесія з першим промптом", risk: "medium" },
      { cmd: "codex -C ~/Projects/demo-app", desc: "Запуск із вказаною робочою папкою", risk: "medium" },
      { cmd: "codex --help", desc: "Довідка про прапорці й підкоманди", risk: "low" }
    ] },
    { title: "Основи сесії", rows: [
      { cmd: "/", desc: "Меню slash-команд (окремого /help немає)", risk: "low" },
      { cmd: "/status", desc: "Модель, дозволи, sandbox, токени", risk: "low" },
      { cmd: "/quit, /exit", desc: "Вихід із сесії в shell", risk: "low" },
      { cmd: "Esc Esc", desc: "Редагувати попереднє повідомлення (розмова, не файли)", risk: "low" },
      { cmd: "Ctrl+O або /copy", desc: "Копіювати останню відповідь", risk: "low" }
    ] },
    { title: "Контекст", rows: [
      { cmd: "/init", desc: "Каркас AGENTS.md з постійними інструкціями", risk: "medium" },
      { cmd: "/mention <файл> або @", desc: "Прикріпити файл до розмови", risk: "low" },
      { cmd: "/ide", desc: "Контекст відкритих файлів IDE", risk: "low" },
      { cmd: "codex -i screenshot.png", desc: "Зображення до першого промпту", risk: "medium" },
      { cmd: "codex --add-dir ../shared", desc: "Ще одна папка для запису", risk: "medium" }
    ] },
    { title: "Моделі й налаштування", rows: [
      { cmd: "/model", desc: "Модель і reasoning effort (список залежить від версії)", risk: "low" },
      { cmd: "codex -m gpt-5.6-terra", desc: "Запуск із конкретною моделлю", risk: "medium" },
      { cmd: "/fast", desc: "Fast-режим, якщо модель його має", risk: "low" },
      { cmd: "/personality", desc: "Стиль: friendly, pragmatic, none", risk: "low" },
      { cmd: "codex -c key=value", desc: "Перевизначити config.toml на один запуск", risk: "medium" },
      { cmd: "/debug-config", desc: "Шари конфігурації і джерела значень", risk: "low" },
      { cmd: "/statusline, /title, /theme, /keymap, /vim", desc: "Вигляд і керування TUI", risk: "low" },
      { cmd: "/experimental", desc: "Експериментальні функції", risk: "medium" }
    ] },
    { title: "Дозволи й sandbox", rows: [
      { cmd: "/permissions", desc: "Пресет: Read Only · Default (Auto) · Full Access", risk: "medium" },
      { cmd: "codex --sandbox read-only", desc: "Лише читання (-s read-only)", risk: "low" },
      { cmd: "codex -s workspace-write -a on-request", desc: "Запис у робочій папці, решта — з дозволу", risk: "medium" },
      { cmd: "/approve", desc: "Один повтор відхиленої дії", risk: "medium" },
      { cmd: "codex --sandbox danger-full-access", desc: "Sandbox вимкнено — доступ до всієї системи", risk: "high" },
      { cmd: "codex --dangerously-bypass-approvals-and-sandbox", desc: "Full Access: без sandbox і підтверджень — лише в ізоляції", risk: "high" },
      { cmd: "codex --yolo", desc: "Синонім попереднього — той самий високий ризик", risk: "high" },
      { cmd: "/setup-default-sandbox", desc: "Посилений sandbox (лише Windows)", risk: "medium" },
      { cmd: "/sandbox-add-read-dir C:\\Projects\\shared", desc: "Читання ще однієї папки (лише Windows)", risk: "medium" }
    ] },
    { title: "Робота з кодом", rows: [
      { cmd: "git status", desc: "Чисто перед сесією?", risk: "low" },
      { cmd: "/plan", desc: "План до змін", risk: "low" },
      { cmd: "/goal <ціль>", desc: "Ціль довгої задачі; pause / resume / clear", risk: "low" },
      { cmd: "/diff", desc: "Зміни, включно з untracked-файлами", risk: "low" },
      { cmd: "/review", desc: "Перевірка робочого дерева агентом", risk: "low" },
      { cmd: "/raw", desc: "Raw scrollback для копіювання", risk: "low" },
      { cmd: "git diff --stat", desc: "Які файли і скільки рядків змінено", risk: "low" },
      { cmd: "git restore <файл>", desc: "Відкинути незакомічені зміни файлу — незворотно", risk: "high" }
    ] },
    { title: "Сесії", rows: [
      { cmd: "codex resume", desc: "Список збережених сесій", risk: "low" },
      { cmd: "codex resume --last", desc: "Остання сесія з поточної папки", risk: "low" },
      { cmd: "/resume", desc: "Список сесій зсередини", risk: "low" },
      { cmd: "/compact", desc: "Стиснути історію в підсумок", risk: "low" },
      { cmd: "/new", desc: "Нова розмова (екран лишається)", risk: "low" },
      { cmd: "/clear", desc: "Очистити екран і почати нову розмову", risk: "low" },
      { cmd: "/fork", desc: "Копія розмови в новий потік", risk: "low" },
      { cmd: "/side, /btw", desc: "Бічна розмова", risk: "low" },
      { cmd: "/archive", desc: "Архівувати й вийти; codex unarchive — повернути", risk: "medium" },
      { cmd: "/delete", desc: "Видалити сесію й дочірні назавжди", risk: "high" }
    ] },
    { title: "Розширення", rows: [
      { cmd: "codex mcp list", desc: "MCP-сервери (shell)", risk: "low" },
      { cmd: "/mcp, /mcp verbose", desc: "MCP-інструменти сесії", risk: "low" },
      { cmd: "codex mcp add <назва> -- <команда>", desc: "Додати MCP-сервер (лише перевірений)", risk: "medium" },
      { cmd: "/apps, /plugins, /skills", desc: "Конектори, плагіни, навички", risk: "medium" },
      { cmd: "/hooks", desc: "Lifecycle-хуки; довіряй лише зрозумілим", risk: "medium" },
      { cmd: "/memories", desc: "Пам'ять між сесіями", risk: "low" },
      { cmd: "/ps, /stop", desc: "Фонові термінали: переглянути, зупинити", risk: "medium" },
      { cmd: "/import", desc: "Імпорт налаштувань Claude Code", risk: "medium" }
    ] },
    { title: "Автоматизація й акаунт", rows: [
      { cmd: "codex exec \"…\"", desc: "Одна задача без TUI", risk: "medium" },
      { cmd: "codex exec --sandbox read-only \"…\"", desc: "Аналіз без змін", risk: "low" },
      { cmd: "codex exec --json \"…\"", desc: "Події JSON Lines для скриптів", risk: "medium" },
      { cmd: "codex exec resume --last", desc: "Продовжити останню exec-сесію", risk: "medium" },
      { cmd: "/usage", desc: "Використання токенів акаунта", risk: "low" },
      { cmd: "/feedback", desc: "Логи розробникам (без секретів)", risk: "medium" },
      { cmd: "/logout, codex logout", desc: "Вийти з акаунта на цьому комп'ютері", risk: "medium" }
    ] }
  ]
};
