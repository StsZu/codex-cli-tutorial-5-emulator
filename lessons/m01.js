window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.modules.push({
  id: "m01", order: 1, title: "Запуск і перші кроки", subtitle: "codex, slash-меню, /status, вихід", icon: "terminal",
  goal: "Після модуля ти перевіряєш, що Codex CLI встановлено, запускаєш сесію в папці проєкту, відкриваєш список slash-команд, читаєш /status і коректно виходиш.",
  lessons: [
    {
      id: "m01-l01", title: "Перша сесія Codex", minutes: 11,
      steps: [
        { type: "story", title: "Агент, що працює у твоїй папці",
          body: "<p>Codex CLI — AI-агент від OpenAI, який працює прямо в терміналі. Ти пишеш задачу звичайними словами, а він читає файли проєкту, пропонує й вносить зміни, запускає команди.</p><p>Керують сесією <strong>slash-команди</strong> — рядки, що починаються з <code>/</code>: <code>/status</code>, <code>/model</code>, <code>/quit</code>. Вони працюють лише всередині сесії, а не в звичайному shell.</p>" },
        { type: "concept", title: "Два «поверхи»: shell і сесія",
          body: "<p>Коли в запрошенні <code>Stas@MacBook-Pro demo-app %</code> — ти в zsh, тут працюють <code>codex</code>, <code>git</code>, <code>ls</code>. Після команди <code>codex</code> відкривається сесія: тепер текст іде агенту, а <code>/</code> відкриває меню команд.</p><p>Codex бачить <strong>папку, з якої його запустили</strong>, тож спершу <code>cd</code> у проєкт.</p>",
          analogy: "Shell — це коридор офісу, а сесія Codex — переговорна з помічником. У коридорі ти відчиняєш двері (`codex`), у переговорній говориш із помічником і користуєшся її пультом (`/`-команди). Щоб вийти в коридор — `/quit`." },
        { type: "cli", title: "Перевірити й запустити",
          intro: "<p>Ці команди вводяться в shell.</p>",
          commands: [
            { cmd: "codex --version", explain: "Чи встановлено Codex і яка версія. Номер залежить від встановлення.", output: "codex-cli <версія>", risk: "low" },
            { cmd: "codex login", explain: "Вхід через обліковий запис ChatGPT (відкриє браузер) або API-ключ. Облікові дані зберігаються локально.", risk: "medium" },
            { cmd: "codex", explain: "Запускає інтерактивну сесію в поточній папці. Агент зможе читати файли й, залежно від дозволів, змінювати їх.", risk: "medium" },
            { cmd: "codex \"Поясни структуру проєкту\"", explain: "Запуск сесії одразу з першим промптом у лапках.", risk: "medium" }
          ] },
        { type: "terminal", title: "Спробуй: чи встановлено Codex",
          task: "Перевір, чи встановлено Codex CLI і яка в нього версія.",
          expected: ["codex --version", "codex -V"], output: "codex-cli <версія>",
          hint: "Як у більшості CLI-програм — прапорець версії після назви.",
          explain: "Програма знайдена й відповідає. Якби було `command not found` — Codex не встановлено або його немає в `PATH`." },
        { type: "check", title: "Де запускати",
          question: "Ти в домашній папці `~` і хочеш попрацювати з проєктом `demo-app`. Що зробити перед `codex`?",
          options: ["Нічого — Codex сам знайде проєкт", "`cd ~/Projects/demo-app`, щоб агент бачив саме цей проєкт", "Запустити `codex --version` ще раз"],
          correct: 1, feedback: "Codex працює з поточною папкою. З `~` він бачив би документи, ключі й налаштування — зайве й ризиковано." },
        { type: "cli", title: "Перші slash-команди в сесії",
          commands: [
            { cmd: "/", explain: "Відкриває меню slash-команд; далі друкуй назву — список фільтрується.", risk: "low" },
            { cmd: "/status", explain: "Модель, політика дозволів (approval), sandbox, writable roots і використання токенів.", risk: "low" },
            { cmd: "/quit", explain: "Вихід із сесії в shell. <code>/exit</code> — те саме. Перед виходом збережи чи закоміть важливе.", risk: "low" }
          ] },
        { type: "terminal", title: "Спробуй: стан сесії",
          prompt: "codex ›",
          task: "Ти в сесії Codex. Подивись, яка модель активна і які дозволи діють.",
          expected: ["/status"],
          output: "Workspace\n  Path:            ~/Projects/demo-app\n  Approval:        on-request\n  Sandbox:         workspace-write\nModel\n  Name:            gpt-5.6-terra\nContext\n  tokens used: 12.4K in / 3.2K out",
          hint: "Команда стану сесії — англійське слово «статус».",
          explain: "`/status` — перше, що варто виконати в незнайомій сесії: видно модель, sandbox і скільки контексту витрачено." },
        { type: "check", title: "Немає /help",
          question: "Ти забув назву команди в сесії Codex. Що зробити?",
          options: ["Ввести `/help`", "Вийти й погуглити", "Ввести `/` і почати друкувати — меню відфільтрує команди"],
          correct: 2, feedback: "Окремої команди `/help` у Codex немає: список дає саме `/`. Довідка про прапорці запуску — `codex --help` у shell." },
        { type: "summary", title: "Підсумок",
          points: ["`codex --version` — перевірка встановлення; `codex` — сесія в поточній папці.", "Запрошення `%` — shell, `codex ›` — сесія; slash-команди — лише в сесії.", "`/` — меню команд, `/status` — модель, дозволи й токени.", "`/quit` або `/exit` — вихід у shell."] }
      ],
      glossary: [
        { term: "Codex CLI", def: "Термінальний AI-агент OpenAI, що читає й змінює файли проєкту і запускає команди." },
        { term: "Сесія", def: "Інтерактивна розмова з Codex від запуску `codex` до `/quit`." },
        { term: "Slash-команда", def: "Команда керування сесією, що починається з `/`, напр. `/status`." },
        { term: "Composer", def: "Поле вводу в сесії Codex, куди пишеш промпт або slash-команду." }
      ],
      quiz: [
        { question: "Ти ввів `/status` у звичайному zsh і отримав помилку. Чому?", options: ["Slash-команди працюють лише всередині сесії Codex", "Codex не встановлено", "Потрібно `sudo /status`"], correct: 0, feedback: "Спершу `codex` — відкривається сесія, і вже там `/status`." },
        { question: "Що покаже `/status`?", options: ["Список усіх файлів проєкту", "Модель, дозволи, sandbox і використання токенів", "Історію Git"], correct: 1, feedback: "`/status` — «панель приладів» сесії." },
        { question: "Чим відрізняються `/quit` і `/exit`?", options: ["`/exit` видаляє сесію", "`/quit` зберігає, `/exit` — ні", "Нічим — обидві виходять із CLI"], correct: 2, feedback: "Це два написання однієї дії." },
        { question: "Як запустити сесію одразу з першим завданням?", options: ["`codex \"Поясни структуру проєкту\"`", "`codex --task Поясни`", "`/start Поясни`"], correct: 0, feedback: "Промпт передається аргументом у лапках." },
        { question: "Чому ризик запуску `codex` не «низький»?", options: ["Він платний", "Агент може змінювати файли й запускати команди у твоїй папці", "Він видаляє історію shell"], correct: 1, feedback: "Ризик визначає те, що інструмент може зробити з системою." },
        { question: "`codex --version` відповідає `command not found`. Що це означає?", options: ["Немає інтернету", "Закінчилась підписка", "Codex не встановлено або його немає в `PATH`"], correct: 2, feedback: "`command not found` — shell не знайшов програму на диску." }
      ]
    }
  ]
});
