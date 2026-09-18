window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.modules.push({
  id: "m08", order: 8, title: "Автоматизація і практика", subtitle: "codex exec, акаунт, повний робочий цикл", icon: "flag",
  goal: "Після модуля ти запускаєш Codex без TUI для скриптів, безпечно обмежуєш такі запуски, керуєш акаунтом і проходиш повний цикл задачі від чистого репозиторію до коміту.",
  lessons: [
    {
      id: "m08-l01", title: "codex exec: агент у скриптах", minutes: 11,
      steps: [
        { type: "concept", title: "Одна задача — без діалогу",
          body: "<p><code>codex exec</code> запускає агента <strong>неінтерактивно</strong>: отримує задачу, виконує її і завершується, а результат друкує в stdout. Так Codex вбудовують у скрипти й CI.</p><p>Оскільки ніхто не сидить поруч і не натискає «так», права треба обмежити заздалегідь — <code>--sandbox</code>.</p>",
          analogy: "Інтерактивна сесія — розмова з майстром на місці. `codex exec` — записка з дорученням, залишена на столі: майстер прийде, зробить і піде. Тому в записці варто чітко вказати, що можна чіпати." },
        { type: "cli", title: "Запуски exec",
          commands: [
            { cmd: "codex exec \"Опиши зміни в README\"", explain: "Одна задача; відповідь у stdout. Скорочення — <code>codex e</code>.", risk: "medium" },
            { cmd: "codex exec --sandbox read-only \"Знайди TODO у проєкті\"", explain: "Лише читання — безпечний аналіз без змін.", risk: "low" },
            { cmd: "codex exec --json \"Опиши зміни в README\"", explain: "Події у форматі JSON Lines — для обробки скриптом.", risk: "medium" },
            { cmd: "codex exec resume --last", explain: "Продовжити останню exec-сесію з поточної папки.", risk: "medium" }
          ] },
        { type: "terminal", title: "Спробуй: аналіз без змін",
          task: "Потрібен звіт про всі TODO у проєкті, але без жодних змін у файлах. Запусти `codex exec` лише з читанням і промптом `\"Знайди TODO у проєкті\"`.",
          expected: ["codex exec --sandbox read-only \"Знайди TODO у проєкті\"", "codex exec -s read-only \"Знайди TODO у проєкті\""],
          output: "src/app.js:12  TODO: обробити помилку мережі\nsrc/auth.js:40 TODO: прибрати старий токен-флоу",
          hint: "Той самий прапорець sandbox, що й в інтерактивному запуску; промпт — у лапках наприкінці.",
          explain: "Агент лише читав — ніяких змін у робочому дереві. Для CI це найбезпечніший старт." },
        { type: "check", title: "Застарілий прапорець",
          question: "Старий скрипт використовує `codex exec --full-auto`. Що з ним зараз?",
          options: ["Це найбезпечніший режим", "Він вимикає модель", "Прапорець застарів — документація радить `--sandbox workspace-write`"],
          correct: 2, feedback: "Codex друкує попередження; оновлюй скрипти на явний `--sandbox`." },
        { type: "callout", variant: "warning", title: "exec + повний доступ",
          body: "<p>У скриптах ніхто не побачить запит дозволу. Не поєднуй <code>codex exec</code> з <code>--dangerously-bypass-approvals-and-sandbox</code> поза ізольованим CI-контейнером; задавай мінімальний <code>--sandbox</code>.</p>" },
        { type: "cli", title: "Акаунт і використання",
          commands: [
            { cmd: "/usage", explain: "Використання токенів акаунта: <code>/usage daily</code>, <code>weekly</code>, <code>cumulative</code>.", risk: "low" },
            { cmd: "/feedback", explain: "Надіслати логи й діагностику розробникам. Перевір, що в сесії немає чутливих даних.", risk: "medium" },
            { cmd: "/logout", explain: "Вийти з облікового запису на цьому комп'ютері (також <code>codex logout</code>). Корисно на спільній машині.", risk: "medium" }
          ] },
        { type: "check", title: "Спільний комп'ютер",
          question: "Ти працював з Codex на комп'ютері в аудиторії. Що зробити наприкінці?",
          options: ["`/logout` (або `codex logout`), щоб прибрати локальні облікові дані", "Лише закрити вікно терміналу", "`/compact`"],
          correct: 0, feedback: "Закрите вікно не видаляє збережений вхід." },
        { type: "summary", title: "Підсумок",
          points: ["`codex exec \"…\"` — одна задача без TUI, результат у stdout.", "У скриптах права задавай наперед: `--sandbox read-only` для аналізу.", "`--json` — події для обробки; `exec resume --last` — продовжити.", "`--full-auto` застарів; `/logout` — на спільних машинах."] }
      ],
      glossary: [
        { term: "Неінтерактивний режим", def: "Запуск без діалогу: задача → виконання → вихід." },
        { term: "stdout", def: "Стандартний вивід програми, який можна передати іншій команді чи у файл." },
        { term: "JSON Lines", def: "Формат: кожен рядок — окремий JSON-об'єкт; зручно для скриптів." },
        { term: "CI", def: "Автоматичні перевірки й збірки на сервері після кожного коміту." }
      ],
      quiz: [
        { question: "Чим `codex exec` відрізняється від `codex`?", options: ["Нічим", "Виконує одну задачу без інтерактивного TUI і завершується", "Працює лише офлайн"], correct: 1, feedback: "Це режим для скриптів і CI." },
        { question: "Який запуск безпечний для CI-звіту без змін у файлах?", options: ["`codex exec --yolo \"…\"`", "`codex exec --full-auto \"…\"`", "`codex exec --sandbox read-only \"…\"`"], correct: 2, feedback: "Лише читання — нічого не зміниться." },
        { question: "Навіщо `--json` у `codex exec`?", options: ["Щоб скрипт міг розібрати події рядок за рядком", "Щоб змінити модель", "Щоб зашифрувати вивід"], correct: 0, feedback: "Людині зручніший текст, програмі — JSON Lines." },
        { question: "Як продовжити останню exec-сесію?", options: ["`codex resume`", "`codex exec resume --last`", "`/resume --exec`"], correct: 1, feedback: "`exec resume` — окрема підкоманда exec." },
        { question: "Що з'явиться, якщо запустити застарілий `--full-auto`?", options: ["Помилка й видалення файлів", "Нічого", "Попередження про застарілий прапорець"], correct: 2, feedback: "Документація: «Codex prints a warning», радить `--sandbox workspace-write`." },
        { question: "Коли варто перевірити сесію перед `/feedback`?", options: ["Завжди: логи йдуть розробникам — у них не має бути секретів", "Ніколи", "Лише вночі"], correct: 0, feedback: "Діагностика може містити фрагменти розмови." }
      ]
    },
    {
      id: "m08-l02", title: "Практика: задача від початку до коміту", minutes: 13,
      steps: [
        { type: "story", title: "Задача",
          body: "<p>Stas хоче додати до <code>README.md</code> розділ «Summary» з описом проєкту. Пройдемо повний цикл так, як це варто робити щодня: підготовка → сесія з правильними правами → перевірка → коміт.</p>" },
        { type: "concept", title: "Цикл безпечної сесії",
          body: "<ol><li><code>git status</code> чистий, окрема гілка.</li><li><code>codex</code> у Default (Auto), <code>/status</code> — перевірити модель і дозволи.</li><li><code>/mention</code> потрібні файли, <code>/plan</code> для великих задач.</li><li><code>/diff</code>, <code>/review</code>.</li><li><code>/quit</code>, <code>git diff --stat</code>, коміт.</li></ol>",
          analogy: "Як політ: передпольотна перевірка (чистий Git), зліт у правильному режимі (дозволи), курс (план), посадка з огляданням літака (diff і review) і запис у бортжурнал (коміт)." },
        { type: "terminal", title: "Крок 1: стан репозиторію",
          task: "Перед запуском агента перевір, чи немає в репозиторії незакомічених змін.",
          expected: ["git status"], output: "On branch main\nnothing to commit, working tree clean",
          hint: "Команда стану Git.",
          explain: "Чисто — можна створювати гілку й запускати агента." },
        { type: "cli", title: "Крок 2–3: сесія",
          commands: [
            { cmd: "git switch -c codex/readme-summary", explain: "Окрема гілка.", risk: "medium" },
            { cmd: "codex", explain: "Сесія в Default (Auto) — зміни лише в робочій папці.", risk: "medium" },
            { cmd: "/mention README.md", explain: "Дати агенту саме цей файл.", risk: "low" },
            { cmd: "/review", explain: "Після змін — попросити перевірку.", risk: "low" }
          ] },
        { type: "terminal", title: "Крок 3: перевір налаштування сесії",
          prompt: "codex ›",
          task: "Сесія запущена. Переконайся, що діє очікувана модель і пресет дозволів, перш ніж давати задачу.",
          expected: ["/status"], output: "Approval: on-request · Sandbox: workspace-write\nModel: gpt-5.6-terra",
          hint: "Та сама команда, що в першому модулі.",
          explain: "Default (Auto) — те, що треба для редагування README." },
        { type: "check", title: "Дозволи для задачі",
          question: "Агент просить дозвіл на `curl` до зовнішнього сайту, хоча задача — лише переписати README. Що зробити?",
          options: ["Відмовити й уточнити, навіщо йому мережа", "Погодитись і перемкнутись у Full Access", "Видалити сесію"],
          correct: 0, feedback: "Запит, що не відповідає задачі, — привід зупинитись і розібратися." },
        { type: "terminal", title: "Крок 4: перевір зміни",
          prompt: "codex ›",
          task: "Агент дописав розділ. Подивись точні зміни у файлах, не виходячи з сесії.",
          expected: ["/diff"], output: "diff --git a/README.md b/README.md\n+## Summary\n+Короткий опис проєкту для нових учасників.",
          hint: "Показ відмінностей, як у Git.",
          explain: "Змінено лише `README.md` — саме те, що просили." },
        { type: "check", title: "Фінал",
          question: "Зміни вдалі. Що далі?",
          options: ["`/delete`, щоб прибрати сліди", "Лишити незакоміченим", "`/quit`, `git diff --stat`, коміт на гілці і злиття після перевірки"],
          correct: 2, feedback: "Коміт — точка, до якої завжди можна повернутись." },
        { type: "summary", title: "Підсумок",
          points: ["Чистий `git status` і окрема гілка — до запуску агента.", "`/status` — перевірити модель і дозволи перед задачею.", "`/mention`, `/plan`, потім `/diff` і `/review`.", "Підозрілі запити дозволів — відмовляй і уточнюй; фінал — коміт."] }
      ],
      glossary: [
        { term: "Робочий цикл", def: "Підготовка → сесія → перевірка → коміт; повторюється для кожної задачі." },
        { term: "Гілка", def: "Окрема лінія змін у Git, яку можна злити або викинути." },
        { term: "Коміт", def: "Зафіксований знімок змін у Git з повідомленням." }
      ],
      quiz: [
        { question: "Що робиш першим перед сесією?", options: ["`codex --yolo`", "`git status` — перевірити, що все закомічено", "`/delete`"], correct: 1, feedback: "Спершу точка відкату." },
        { question: "Агент просить мережевий доступ, не пов'язаний із задачею. Реакція?", options: ["Погодитись автоматично", "Перейти у Full Access", "Відмовити й з'ясувати причину"], correct: 2, feedback: "Кожен дозвіл має відповідати задачі." },
        { question: "Навіщо `/status` на початку сесії?", options: ["Переконатися в моделі й пресеті дозволів", "Щоб зберегти файли", "Щоб видалити історію"], correct: 0, feedback: "Помилку в налаштуваннях краще побачити до роботи." },
        { question: "Після `/diff` бачиш зміни в `.env`, яких не просив. Що робити?", options: ["Закомітити все", "Не комітити: розібратися й відкотити зайве через Git", "Ігнорувати"], correct: 1, feedback: "Неочікувані зміни — червоний прапорець, особливо в конфігах із секретами." },
        { question: "Який пресет підходить для редагування README?", options: ["Full Access", "`--yolo`", "Default (Auto)"], correct: 2, feedback: "Зміни лише в робочій папці — достатньо Default." },
        { question: "Навіщо коміт наприкінці?", options: ["Щоб мати точку, до якої можна повернутися, і історію змін", "Щоб прискорити Codex", "Щоб видалити гілку"], correct: 0, feedback: "Коміт фіксує результат сесії." }
      ]
    }
  ]
});
