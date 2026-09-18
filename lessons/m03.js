window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.modules.push({
  id: "m03", order: 3, title: "Моделі й налаштування", subtitle: "/model, -m, /fast, config.toml", icon: "settings",
  goal: "Після модуля ти обираєш модель і рівень reasoning, розумієш, що список моделей змінюється, і знаєш, де живуть налаштування Codex та як їх діагностувати.",
  lessons: [
    {
      id: "m03-l01", title: "Модель, reasoning і config.toml", minutes: 12,
      steps: [
        { type: "concept", title: "Модель — це «мозок», reasoning — скільки думати",
          body: "<p>Codex працює на моделях OpenAI. <code>/model</code> обирає модель і <strong>reasoning effort</strong> — наскільки довго вона міркує перед відповіддю. Більше міркувань — якісніше на складних задачах, але повільніше й дорожче за лімітами.</p><p>Список моделей <strong>змінюється з версіями</strong>: станом на вересень 2026 документація радить родину <code>gpt-5.6</code> (<code>gpt-5.6-sol</code>, <code>gpt-5.6-terra</code>, <code>gpt-5.6-luna</code>) та <code>gpt-6-astra</code>. Завжди дивись актуальний список у <code>/model</code>.</p>",
          analogy: "Модель — як вибір майстра: досвідчений інженер зробить складне, але коштує дорожче й працює довше; стажер швидкий і дешевий для дрібниць. Reasoning — скільки часу майстер думає над кресленням, перш ніж братися за інструмент." },
        { type: "cli", title: "Вибір моделі",
          commands: [
            { cmd: "/model", explain: "Меню моделей і reasoning effort у поточній сесії. Перевір результат через <code>/status</code>.", risk: "low" },
            { cmd: "codex -m gpt-5.6-terra", explain: "Запуск сесії з конкретною моделлю (<code>--model</code>). Назва має бути з актуального списку твоєї версії.", risk: "medium" },
            { cmd: "/fast", explain: "Вмикає/вимикає Fast-режим моделі (<code>/fast on</code>, <code>/fast off</code>, <code>/fast status</code>). Команди немає, якщо модель його не підтримує.", risk: "low" },
            { cmd: "/personality", explain: "Стиль відповідей: <code>friendly</code>, <code>pragmatic</code> або <code>none</code>. Не змінює твої інструкції.", risk: "low" }
          ] },
        { type: "terminal", title: "Спробуй: змінити модель",
          prompt: "codex ›",
          task: "Задача складна — хочеш переглянути доступні моделі й рівень міркувань у поточній сесії.",
          expected: ["/model"], output: "● gpt-5.6-terra ← current\n○ gpt-6-astra\n○ gpt-5.6-sol\n○ gpt-5.6-luna\nReasoning effort: low · medium · high",
          hint: "Назва команди — англійське слово «модель».",
          explain: "Після вибору виконай `/status`, щоб переконатися, що діє саме та модель і той рівень reasoning." },
        { type: "check", title: "Застарілий туторіал",
          question: "У відео 2025 року автор обирає модель, якої немає у твоєму `/model`. Що робити?",
          options: ["Ввести назву вручну через `-m`, доки не спрацює", "Обрати актуальну модель зі списку `/model` — набір моделей змінюється з версіями", "Перевстановити старий Codex"],
          correct: 1, feedback: "Моделі виводять з ужитку; правду про твою версію показує `/model` і документація." },
        { type: "cli", title: "Де живуть налаштування",
          intro: "<p>Основний файл — <code>~/.codex/config.toml</code>. Там задаються модель за замовчуванням (<code>model = \"…\"</code>), профілі, MCP-сервери, тема TUI.</p>",
          commands: [
            { cmd: "/debug-config", explain: "Показує шари конфігурації (від найнижчого пріоритету) і звідки взялося кожне значення.", risk: "low" },
            { cmd: "codex -c model=\"gpt-5.6-terra\"", explain: "Перевизначити будь-яке значення config.toml лише для цього запуску (<code>--config key=value</code>).", risk: "medium" },
            { cmd: "/statusline", explain: "Що показувати в нижньому рядку: модель, контекст, ліміти, гілку Git. Зберігається в config.toml.", risk: "low" },
            { cmd: "/theme", explain: "Тема підсвітки синтаксису; зберігається в <code>tui.theme</code>.", risk: "low" },
            { cmd: "/experimental", explain: "Експериментальні функції; після зміни Codex може попросити перезапуск.", risk: "medium" }
          ] },
        { type: "terminal", title: "Спробуй: чому налаштування не те",
          prompt: "codex ›",
          task: "У config.toml ти вказав одну модель, а сесія використовує іншу. Покажи шари конфігурації, щоб знайти, хто її перевизначив.",
          expected: ["/debug-config"], output: "layers (lowest precedence first):\n  defaults → ~/.codex/config.toml → project .codex/config.toml → CLI -c\npolicy: approval=on-request · sandbox=workspace-write",
          hint: "Команда налагодження (debug) конфігурації.",
          explain: "Вищий шар перемагає: прапорець `-c` чи `-m` при запуску сильніший за config.toml." },
        { type: "check", title: "Хто головніший",
          question: "У `config.toml` задано одну модель, а ти запускаєш `codex -m gpt-5.6-luna`. Яка модель буде в сесії?",
          options: ["`gpt-5.6-luna` — прапорець запуску має вищий пріоритет", "Та, що в `config.toml`", "Codex видасть помилку конфлікту"],
          correct: 0, feedback: "Прапорці командного рядка перевизначають файл конфігурації лише для цього запуску." },
        { type: "summary", title: "Підсумок",
          points: ["`/model` — модель і reasoning effort; `-m` — модель при запуску.", "Список моделей змінюється: орієнтуйся на `/model` своєї версії, а не на старі відео.", "Налаштування — `~/.codex/config.toml`; `-c key=value` перевизначає на один запуск.", "`/debug-config` показує, який шар задав значення."] }
      ],
      glossary: [
        { term: "Reasoning effort", def: "Скільки модель «міркує» перед відповіддю: low, medium, high." },
        { term: "config.toml", def: "Файл налаштувань Codex, зазвичай `~/.codex/config.toml`." },
        { term: "Шар конфігурації", def: "Джерело налаштувань (типові, файл користувача, проєкт, прапорці); вищий перемагає." },
        { term: "Fast tier", def: "Швидший режим обслуговування моделі, якщо каталог моделі його пропонує." }
      ],
      quiz: [
        { question: "Як перевірити, яка модель реально активна після `/model`?", options: ["Перезапустити комп'ютер", "Запитати агента «яка ти модель?»", "`/status`"], correct: 2, feedback: "`/status` показує фактичні налаштування сесії." },
        { question: "Навіщо підвищувати reasoning effort?", options: ["Щоб агент відповідав коротше", "Для складних задач — модель довше міркує й точніше планує", "Щоб вимкнути sandbox"], correct: 1, feedback: "Ціна — час і витрата лімітів." },
        { question: "`/fast` не з'являється в меню. Чому?", options: ["Поточна модель не пропонує Fast-режим", "Codex зламаний", "Треба `sudo`"], correct: 0, feedback: "Команда з'являється лише для моделей, у каталозі яких є Fast." },
        { question: "Де задати модель за замовчуванням для всіх сесій?", options: ["У `AGENTS.md`", "У `.gitignore`", "У `~/.codex/config.toml` (`model = \"…\"`)"], correct: 2, feedback: "`AGENTS.md` — інструкції для агента; налаштування CLI — у config.toml." },
        { question: "Що робить `codex -c model=\"gpt-5.6-terra\"`?", options: ["Назавжди переписує config.toml", "Перевизначає значення лише на цей запуск", "Видаляє інші моделі"], correct: 1, feedback: "`-c` — тимчасове перевизначення." },
        { question: "Що змінює `/personality`?", options: ["Стиль спілкування відповідей", "Модель", "Права доступу до файлів"], correct: 0, feedback: "`friendly`, `pragmatic` або `none` — тон, а не можливості." }
      ]
    }
  ]
});
