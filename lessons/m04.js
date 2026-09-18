window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.modules.push({
  id: "m04", order: 4, title: "Дозволи й sandbox", subtitle: "Read Only · Default (Auto) · Full Access · --yolo", icon: "shield",
  goal: "Після модуля ти обираєш рівень дозволів під задачу, розрізняєш sandbox і політику підтверджень і розумієш, чому Full Access та --yolo — високий ризик.",
  lessons: [
    {
      id: "m04-l01", title: "Три пресети /permissions", minutes: 12,
      steps: [
        { type: "story", title: "Хто натискає «так»",
          body: "<p>Агент хоче змінити файл, запустити тести чи сходити в інтернет. Codex вирішує, чи питати тебе, за двома механізмами: <strong>sandbox</strong> (що технічно можна) і <strong>політика підтверджень</strong> (коли питати). <code>/permissions</code> перемикає готові пресети, що поєднують обидва.</p>" },
        { type: "concept", title: "Read Only, Default (Auto), Full Access",
          body: "<table><thead><tr><th>Пресет</th><th>Що без запиту</th></tr></thead><tbody><tr><td><strong>Read Only</strong></td><td>Читати файли робочої папки. Редагування й інтернет — з дозволу.</td></tr><tr><td><strong>Default (Auto)</strong></td><td>Читати, редагувати й запускати команди в робочій папці. Інтернет і файли поза нею — з дозволу.</td></tr><tr><td><strong>Full Access</strong></td><td>Усе, включно з файлами поза проєктом та інтернетом. Високий ризик.</td></tr></tbody></table><p>У довідці середній пресет зветься <strong>Auto</strong>, у новіших версіях — <strong>Default</strong>.</p>",
          analogy: "Read Only — гість, якому можна лише дивитися. Default — майстер із ключем від однієї кімнати: у ній робить що треба, а в інші двері стукає. Full Access — дублікат ключів від усієї квартири й сейфа." },
        { type: "cli", title: "Керувати дозволами",
          commands: [
            { cmd: "/permissions", explain: "Відкриває вибір пресета посеред сесії. Нова політика діє, доки не зміниш знову.", risk: "medium" },
            { cmd: "codex --sandbox read-only", explain: "Запуск лише з читанням (<code>-s read-only</code>) — для аналізу незнайомого коду.", risk: "low" },
            { cmd: "codex --sandbox workspace-write --ask-for-approval on-request", explain: "Запис у робочій папці; за межі — з запитом. Відповідає Default (Auto). Короткі форми: <code>-s</code>, <code>-a</code>.", risk: "medium" },
            { cmd: "/approve", explain: "Дозволяє <strong>один</strong> повтор дії, яку щойно відхилив автоматичний рецензент. Політику не змінює.", risk: "medium" }
          ] },
        { type: "terminal", title: "Спробуй: безпечний аналіз",
          task: "Тобі дали чужий репозиторій. Запусти Codex так, щоб він міг лише читати файли.",
          expected: ["codex --sandbox read-only", "codex -s read-only", "codex --sandbox read-only --ask-for-approval on-request", "codex -s read-only -a on-request", "codex --sandbox read-only -a on-request", "codex -s read-only --ask-for-approval on-request", "codex --ask-for-approval on-request --sandbox read-only", "codex -a on-request -s read-only"],
          output: "● OpenAI Codex\n  model: gpt-5.6-terra · directory: ~/Projects/demo-app\n  permissions: Read Only",
          hint: "Прапорець sandbox із режимом «лише читання».",
          explain: "У режимі `read-only` агент аналізує й пропонує, але кожна зміна чи мережевий запит проходить через тебе." },
        { type: "check", title: "Пресет під задачу",
          question: "Потрібно, щоб агент сам виправляв код і запускав тести в проєкті, але питав перед доступом до інтернету. Який пресет?",
          options: ["Read Only", "Full Access", "Default (Auto)"],
          correct: 2, feedback: "Default (Auto) дозволяє роботу в робочій папці, а мережу й зовнішні файли — лише з підтвердженням." },
        { type: "terminal", title: "Спробуй: змінити пресет у сесії",
          prompt: "codex ›",
          task: "Ти в сесії й хочеш тимчасово перейти в Read Only, щоб лише переглянути план агента. Відкрий вибір пресета.",
          expected: ["/permissions"], output: "Read Only · Default (Auto) · Full Access\n› Read Only\n✓ Permissions updated",
          hint: "Англійською «дозволи».",
          explain: "`/permissions` відкриває меню — аргументів не потрібно. Перевір результат через `/status`." },
        { type: "check", title: "Що робить /approve",
          question: "Автоматичний рецензент відхилив команду `npm install`, але ти перевірив її й згоден. Що зробити?",
          options: ["`/approve` — дозволити один повтор цієї дії", "Перемкнутися в Full Access назавжди", "Видалити сесію"],
          correct: 0, feedback: "`/approve` — точкове рішення; розширювати права на всю сесію не потрібно." },
        { type: "callout", variant: "warning", title: "/approvals — стара назва",
          body: "<p>У старих туторіалах дозволи налаштовували командою з іншою назвою. Зараз це <code>/permissions</code>; перевіряй назви через меню <code>/</code>.</p>" },
        { type: "summary", title: "Підсумок",
          points: ["Sandbox — що технічно можна; політика підтверджень — коли питати.", "Read Only → Default (Auto) → Full Access: від найбезпечнішого до найризикованішого.", "`/permissions` — змінити пресет у сесії; `--sandbox`/`-s` і `--ask-for-approval`/`-a` — при запуску.", "`/approve` — один повтор відхиленої дії, без розширення прав."] }
      ],
      glossary: [
        { term: "Sandbox", def: "Обмеження ОС для команд агента: `read-only`, `workspace-write` або `danger-full-access`." },
        { term: "Approval policy", def: "Коли Codex питає дозволу: `on-request` — за потреби, `never` — ніколи." },
        { term: "Пресет дозволів", def: "Готове поєднання sandbox і політики: Read Only, Default (Auto), Full Access." },
        { term: "Auto review", def: "Автоматичний рецензент, що може відхилити ризиковану дію агента." }
      ],
      quiz: [
        { question: "Який пресет дає найменше прав?", options: ["Default (Auto)", "Read Only", "Full Access"], correct: 1, feedback: "Read Only — лише читання; усе інше з дозволу." },
        { question: "У Default (Auto) агент хоче завантажити пакет з інтернету. Що станеться?", options: ["Codex попросить твого дозволу", "Завантажить без питань", "Сесія завершиться"], correct: 0, feedback: "Мережа поза sandbox Default — лише з підтвердженням." },
        { question: "Що означає `-s workspace-write`?", options: ["Запис у будь-яку папку", "Лише читання", "Запис дозволено в межах робочої папки"], correct: 2, feedback: "Писати можна в робочу папку (і додані через `--add-dir`)." },
        { question: "Ти перемкнув пресет через `/permissions`. Як довго він діє?", options: ["Лише одну команду", "Доки не зміниш знову", "До перезавантаження ОС"], correct: 1, feedback: "Нова політика діє для наступних дій, поки ти її не зміниш." },
        { question: "Навіщо запускати незнайомий репозиторій з `--sandbox read-only`?", options: ["Щоб агент міг лише аналізувати, нічого не змінюючи без тебе", "Щоб прискорити роботу", "Щоб вимкнути модель"], correct: 0, feedback: "Спершу зрозумій код, потім давай права на зміни." },
        { question: "Ти запустив `codex -s read-only -a never`, і агент хоче змінити файл. Що станеться?", options: ["Codex спитає дозволу", "Зміна не виконається: sandbox забороняє запис, а питати Codex не буде — помилку одразу отримає модель", "Файл зміниться, бо `never` вимикає обмеження"], correct: 1, feedback: "`-a never` вимикає лише запити; межі sandbox лишаються. Повну свободу дає тільки `danger-full-access` або `--yolo`." }
      ]
    },
    {
      id: "m04-l02", title: "Full Access і --yolo: коли і чому ні", minutes: 11,
      steps: [
        { type: "concept", title: "Без паска безпеки",
          body: "<p><strong>Full Access</strong> вимикає sandbox і підтвердження: агент редагує файли поза проєктом і ходить в інтернет без запиту. Те саме при запуску дає прапорець <code>--dangerously-bypass-approvals-and-sandbox</code> (синонім <code>--yolo</code>).</p><p>Документація OpenAI радить його лише <strong>всередині зовнішньо захищеного середовища</strong> — контейнера чи VM.</p>",
          analogy: "Це як дати таксисту свою банківську картку з PIN-кодом «на бензин». Зазвичай усе гаразд, але одна помилка — і наслідки не скасуєш дзвінком у підтримку." },
        { type: "cli", title: "Режими без захисту",
          commands: [
            { cmd: "codex --dangerously-bypass-approvals-and-sandbox", explain: "Жодних підтверджень і жодного sandbox. Кожна команда агента виконується одразу.", risk: "high" },
            { cmd: "codex --yolo", explain: "Коротший синонім того самого прапорця. Коротка назва — не менший ризик.", risk: "high" },
            { cmd: "codex --sandbox danger-full-access", explain: "Sandbox вимкнено: доступ до всієї файлової системи й мережі.", risk: "high" },
            { cmd: "codex --ask-for-approval never", explain: "Не питати дозволу; що не дозволяє sandbox — просто не виконається. У парі з <code>danger-full-access</code> — повна свобода агента.", risk: "medium" }
          ] },
        { type: "callout", variant: "danger", title: "Що може піти не так — і безпечна альтернатива",
          body: "<p>Без sandbox і підтверджень одна хибна дія агента — <code>rm -rf</code> не тієї папки, <code>git push --force</code>, зміна <code>~/.ssh</code> чи <code>~/.zshrc</code>, витік токена в мережу — виконується миттєво. Файли поза Git не відновити.</p><p><strong>Безпечно:</strong> Default (Auto) — <code>codex --sandbox workspace-write --ask-for-approval on-request</code>; точково — <code>/approve</code> або <code>--add-dir</code>. Full Access — лише в контейнері чи VM без цінних даних і ключів, і з поверненням до Default одразу після задачі.</p>" },
        { type: "check", title: "Прохання колеги",
          question: "Колега: «Постійно запускай з `--yolo`, так швидше». Ти працюєш на робочому ноутбуці з SSH-ключами. Що обрати?",
          options: ["`--yolo` — зручність важливіша", "Default (Auto), а для окремих дій — `/approve`; `--yolo` лише в ізольованому контейнері", "Read Only назавжди, навіть для правок"],
          correct: 1, feedback: "Ризик Full Access — не швидкість, а незворотні дії з твоїми даними й ключами." },
        { type: "terminal", title: "Спробуй: безпечний робочий режим",
          task: "Запусти Codex у звичайному робочому режимі: запис лише в робочій папці, дозвіл — на вимогу. Використай повні назви прапорців.",
          expected: ["codex --sandbox workspace-write --ask-for-approval on-request", "codex --ask-for-approval on-request --sandbox workspace-write", "codex -s workspace-write -a on-request", "codex -a on-request -s workspace-write", "codex --sandbox workspace-write -a on-request", "codex -s workspace-write --ask-for-approval on-request"],
          output: "● OpenAI Codex\n  permissions: Default (Auto)\n  sandbox: workspace-write · approval: on-request",
          hint: "Два прапорці: режим sandbox для запису в робочу папку і політика «питати на вимогу».",
          explain: "Це відповідає пресету Default (Auto) — розумний щоденний вибір." },
        { type: "cli", title: "Sandbox у Windows",
          intro: "<p>На macOS Codex використовує Seatbelt, на Linux — <code>bwrap</code>. Для нативного Windows є окремі команди.</p>",
          commands: [
            { cmd: "/setup-default-sandbox", explain: "Налаштовує посилений sandbox агента (лише Windows).", risk: "medium" },
            { cmd: "/sandbox-add-read-dir C:\\Projects\\shared", explain: "Дає sandbox читання ще однієї абсолютної папки (лише Windows). Є в документації, але в коді свіжих версій її може не бути — перевір меню <code>/</code>.", risk: "medium" }
          ] },
        { type: "check", title: "Прапорець і пресет",
          question: "Що спільного між пресетом Full Access і `--dangerously-bypass-approvals-and-sandbox`?",
          options: ["Обидва вимикають і sandbox, і підтвердження", "Обидва лише вмикають Fast-режим", "Нічого — це різні функції"],
          correct: 0, feedback: "Документація описує Full Access саме як запуск із цим прапорцем: no sandbox, no approvals." },
        { type: "summary", title: "Підсумок",
          points: ["Full Access = `--dangerously-bypass-approvals-and-sandbox` = `--yolo`: без sandbox і без підтверджень — високий ризик.", "Такі режими — лише в контейнері чи VM без цінних даних і ключів.", "Щоденний вибір — Default (Auto): `-s workspace-write -a on-request`.", "Windows: `/setup-default-sandbox`, `/sandbox-add-read-dir`."] }
      ],
      glossary: [
        { term: "Full Access", def: "Пресет без sandbox і без підтверджень; агент діє в усій системі." },
        { term: "--yolo", def: "Синонім `--dangerously-bypass-approvals-and-sandbox`." },
        { term: "danger-full-access", def: "Режим sandbox, що знімає обмеження файлової системи й мережі." },
        { term: "Ізольоване середовище", def: "Контейнер чи віртуальна машина без доступу до важливих даних і ключів." }
      ],
      quiz: [
        { question: "Що вимикає `--dangerously-bypass-approvals-and-sandbox`?", options: ["Лише підтвердження", "І sandbox, і підтвердження", "Лише доступ до інтернету"], correct: 1, feedback: "Тому ризик — високий." },
        { question: "Де документація допускає `--yolo`?", options: ["На основному робочому ноутбуці", "На сервері з продакшн-базою", "У зовнішньо захищеному середовищі — контейнері чи VM"], correct: 2, feedback: "Ізоляція обмежує шкоду від помилки агента." },
        { question: "Агенту потрібно записати в `../shared`. Найбезпечніше рішення?", options: ["Запустити з `--add-dir ../shared`, лишивши Default", "Перейти у Full Access", "Використати `--yolo` на хвилинку"], correct: 0, feedback: "Розширюй права точково, а не повністю." },
        { question: "Чому ризик `codex --yolo` такий самий, як у довгої назви?", options: ["Він інший, менший", "Він вимикає лише логування", "Це синонім — поведінка ідентична"], correct: 2, feedback: "Коротка назва не робить режим безпечнішим." },
        { question: "Ти ввімкнув Full Access для однієї задачі в контейнері. Що далі?", options: ["Лишити назавжди", "Повернутися до Default (Auto) через `/permissions`, щойно задача виконана", "Видалити Codex"], correct: 1, feedback: "Мінімум прав на мінімальний час." },
        { question: "`/sandbox-add-read-dir` на macOS…", options: ["Недоступна — це команда лише для Windows", "Дає доступ до всього диска", "Вмикає Full Access"], correct: 0, feedback: "На macOS sandbox побудований на Seatbelt і налаштовується інакше." }
      ]
    }
  ]
});
