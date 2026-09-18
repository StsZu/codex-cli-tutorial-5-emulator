window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.exam = {
  id: "exam", title: "Фінальний іспит", passPercent: 80,
  quiz: [
    { question: "Ти ввів `/model` у звичайному zsh. Що станеться?", options: ["Відкриється меню моделей", "Помилка: slash-команди працюють лише в сесії Codex", "Codex запуститься автоматично"], correct: 1, feedback: "Спершу `codex`, потім slash-команди." },
    { question: "Як побачити список усіх slash-команд у сесії?", options: ["Ввести `/`", "`/help`", "`codex --list`"], correct: 0, feedback: "`/help` у Codex немає; меню відкриває `/`." },
    { question: "Навіщо `AGENTS.md` у репозиторії?", options: ["Список авторів", "Ліцензія", "Постійні інструкції, які агент читає в кожній сесії"], correct: 2, feedback: "`/init` створює каркас цього файлу." },
    { question: "Як прикріпити `src/app.js` до розмови?", options: ["`/mention src/app.js` або `@` у промпті", "`/open src/app.js`", "`codex add src/app.js`"], correct: 0, feedback: "Обидва способи додають файл у контекст." },
    { question: "У старому відео модель, якої вже немає в `/model`. Що робити?", options: ["Шукати її через `-m`", "Обрати актуальну модель зі списку своєї версії", "Відкотити Codex до старої версії"], correct: 1, feedback: "Каталог моделей змінюється; орієнтир — `/model`." },
    { question: "Що має вищий пріоритет: `model` у `config.toml` чи `codex -m …`?", options: ["`config.toml`", "Вони конфліктують — помилка", "Прапорець `-m` для цього запуску"], correct: 2, feedback: "Прапорці CLI перевизначають файл." },
    { question: "Який пресет дозволяє редагувати файли робочої папки, а мережу — лише з дозволу?", options: ["Read Only", "Default (Auto)", "Full Access"], correct: 1, feedback: "Default (Auto) — щоденний режим." },
    { question: "Що означає `--dangerously-bypass-approvals-and-sandbox`?", options: ["Без sandbox і без підтверджень — лише для ізольованого середовища", "Прискорений режим моделі", "Режим лише читання"], correct: 0, feedback: "Синонім — `--yolo`; ризик високий." },
    { question: "Автоматичний рецензент відхилив дію, яку ти перевірив. Як дозволити лише її повтор?", options: ["`/permissions` → Full Access", "`--yolo`", "`/approve`"], correct: 2, feedback: "Точкове рішення без розширення прав." },
    { question: "Яка команда показує зміни агента разом із новими, ще не відстежуваними файлами?", options: ["`/status`", "`/diff`", "`/copy`"], correct: 1, feedback: "`/diff` включає untracked-файли." },
    { question: "Як відкотити невдалі зміни агента в одному файлі?", options: ["`git restore <файл>` — з розумінням, що це незворотно", "`/undo`", "`/delete`"], correct: 0, feedback: "Відкат файлів — Git; `/undo` в актуальній довідці немає." },
    { question: "Велика задача. Що зробити до першої зміни у файлах?", options: ["`/compact`", "`/fork`", "`/plan` — узгодити план"], correct: 2, feedback: "План показує обсяг і ризики заздалегідь." },
    { question: "Як одразу продовжити останню сесію з поточної папки?", options: ["`codex resume --last`", "`codex --continue`", "`/new`"], correct: 0, feedback: "Без `--last` — список для вибору." },
    { question: "Стару сесію треба прибрати зі списку, але, можливо, знадобиться. Що обрати?", options: ["`/delete`", "`/archive`", "`/clear`"], correct: 1, feedback: "Архів оборотний: `codex unarchive`." },
    { question: "Сесія довга, агент губить ранні домовленості. Що допоможе?", options: ["`/logout`", "`/stop`", "`/compact`"], correct: 2, feedback: "Стискає історію в підсумок." },
    { question: "Як у shell побачити налаштовані MCP-сервери?", options: ["`codex mcp list`", "`/mcp verbose`", "`codex --mcp`"], correct: 0, feedback: "`/mcp` — у сесії, `codex mcp list` — у shell." },
    { question: "Що безпечно для CI-звіту без змін у файлах?", options: ["`codex exec --yolo \"…\"`", "`codex exec --sandbox read-only \"…\"`", "`codex exec --full-auto \"…\"`"], correct: 1, feedback: "Лише читання; `--full-auto` застарів." },
    { question: "Ти закінчив роботу на спільному комп'ютері. Що зробити?", options: ["Лише закрити термінал", "`/fork`", "`/logout` або `codex logout`"], correct: 2, feedback: "Прибирає локальні облікові дані." }
  ]
};
