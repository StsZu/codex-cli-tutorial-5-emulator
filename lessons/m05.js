window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.modules.push({
  id: "m05", order: 5, title: "Робота з кодом", subtitle: "/plan, /goal, /diff, /review, відкат через Git", icon: "code",
  goal: "Після модуля ти готуєш репозиторій до сесії, просиш план перед змінами, перевіряєш зміни агента через /diff і /review і відкочуєш невдалі правки засобами Git.",
  lessons: [
    {
      id: "m05-l01", title: "План → зміни → перевірка → відкат", minutes: 13,
      steps: [
        { type: "concept", title: "Точка відкату перед сесією",
          body: "<p>Окремої «кнопки скасувати» для змін файлів в актуальній довідці Codex немає — <strong>відкат робить Git</strong>. Тому перед сесією: чистий <code>git status</code> і окрема гілка. Тоді все, що змінить агент, видно в <code>git diff</code> і легко викинути.</p><p><span class=\"kbd\">Esc</span> <span class=\"kbd\">Esc</span> у Codex дозволяє відредагувати попереднє повідомлення й продовжити звідти — але це про розмову, не про файли.</p>",
          analogy: "Перед ремонтом ти фотографуєш кімнату (коміт) і даєш майстру окрему кімнату (гілку). Якщо не сподобалось — повертаєш усе як на фото, а не згадуєш, де що стояло." },
        { type: "cli", title: "Підготовка в shell",
          commands: [
            { cmd: "git status", explain: "Має бути <code>working tree clean</code> — твої зміни закомічені.", risk: "low" },
            { cmd: "git switch -c codex/readme", explain: "Окрема гілка для сесії агента.", risk: "medium" }
          ] },
        { type: "cli", title: "Спершу план, потім код",
          commands: [
            { cmd: "/plan", explain: "Режим планування: Codex пропонує план до початку змін. Можна одразу з текстом: <code>/plan Оновити README</code>.", risk: "low" },
            { cmd: "/goal Виправити вхід і не зламати тести", explain: "Постійна ціль довгої задачі; <code>/goal</code> — переглянути, <code>pause</code>/<code>resume</code>/<code>clear</code> — керувати.", risk: "low" },
            { cmd: "/diff", explain: "Git diff у сесії: індексовані, неіндексовані зміни й нові файли, яких Git ще не відстежує.", risk: "low" },
            { cmd: "/review", explain: "Codex перевіряє робоче дерево: зміни поведінки, бракуючі тести.", risk: "low" },
            { cmd: "/copy", explain: "Копіює останню завершену відповідь (також <span class=\"kbd\">Ctrl</span>+<span class=\"kbd\">O</span>).", risk: "low" }
          ] },
        { type: "terminal", title: "Спробуй: що змінив агент",
          prompt: "codex ›",
          task: "Агент закінчив правки. Не виходячи з сесії, подивись точні зміни у файлах, включно з новими.",
          expected: ["/diff"], output: "diff --git a/README.md b/README.md\n+## Summary\n+Короткий опис проєкту для нових учасників.",
          hint: "Та сама назва, що в Git для порівняння змін.",
          explain: "`/diff` показує і нові файли, яких Git ще не відстежує, — зручно помітити зайві." },
        { type: "check", title: "План перед змінами",
          question: "Задача велика: мігрувати сервіс на нову бібліотеку. З чого почати в Codex?",
          options: ["Одразу Full Access і «зроби все»", "`/plan` — отримати й узгодити план, потім виконувати по кроках", "`/compact`, щоб звільнити контекст"],
          correct: 1, feedback: "План дає побачити обсяг і ризики до першої зміни у файлах." },
        { type: "cli", title: "Відкат і фіксація в shell",
          commands: [
            { cmd: "git diff --stat", explain: "Коротко: які файли і скільки рядків змінено.", risk: "low" },
            { cmd: "git restore src/app.js", explain: "Відкинути незакомічені зміни в одному файлі. Незворотно для цих змін.", risk: "high" },
            { cmd: "git commit -am \"Codex: update README\"", explain: "Зафіксувати вдалий результат.", risk: "medium" }
          ] },
        { type: "callout", variant: "danger", title: "git restore не питає",
          body: "<p><code>git restore</code> миттєво стирає незакомічені зміни у файлі — і агента, і твої, якщо вони змішалися. Відновити їх Git не зможе.</p><p><strong>Безпечніше:</strong> спершу <code>git diff</code> файлу; якщо сумніваєшся — <code>git stash</code> (зміни відкладаються, а не зникають) або окрема гілка для сесії.</p>" },
        { type: "terminal", title: "Спробуй: огляд після сесії",
          task: "Ти вийшов із сесії. Коротко подивись, які файли й скільки рядків змінив агент.",
          expected: ["git diff --stat"], output: " README.md  | 6 ++++--\n src/app.js | 9 +++++++--\n 2 files changed, 11 insertions(+), 4 deletions(-)",
          hint: "`git diff` із прапорцем статистики.",
          explain: "Якщо в списку є несподівані файли (`.env`, конфіги) — розберися до коміту." },
        { type: "check", title: "Відкат одного файлу",
          question: "Агент зіпсував `src/app.js`, а зміни в `README.md` вдалі. Нічого не закомічено. Як відкотити лише `src/app.js`?",
          options: ["`/undo`", "Видалити гілку", "`git restore src/app.js`"],
          correct: 2, feedback: "Git відкочує точково. `/undo` в актуальній довідці немає." },
        { type: "summary", title: "Підсумок",
          points: ["Перед сесією — чистий `git status` і окрема гілка: це твоя точка відкату.", "`/plan` — план до змін; `/goal` — ціль довгої задачі.", "`/diff` і `/review` — перевірка змін агента в сесії; `git diff --stat` — після.", "Відкат файлів — Git (`git restore`, `git stash`); окремого `/undo` в довідці немає."] }
      ],
      glossary: [
        { term: "Plan mode", def: "Режим, у якому Codex спершу пропонує план, а не змінює файли." },
        { term: "Робоче дерево", def: "Поточний стан файлів проєкту на диску, з незакоміченими змінами." },
        { term: "Untracked-файл", def: "Новий файл, якого Git ще не відстежує." },
        { term: "git restore", def: "Команда Git, що відкидає незакомічені зміни у файлах." },
        { term: "Esc Esc", def: "Редагування попереднього повідомлення в Codex і продовження розмови з того місця." }
      ],
      quiz: [
        { question: "Чим `/review` відрізняється від `/diff`?", options: ["`/review` — оцінка змін агентом, `/diff` — самі рядки змін", "Нічим", "`/review` комітить зміни"], correct: 0, feedback: "Спершу `/review` — що може бути не так, потім `/diff` — що саме змінилося." },
        { question: "Навіщо окрема гілка перед сесією?", options: ["Codex не працює на `main`", "Невдалу сесію можна викинути разом із гілкою, `main` лишиться чистою", "Гілки прискорюють модель"], correct: 1, feedback: "Гілка — дешевий чорновик." },
        { question: "Що показує `/diff`, чого може не показати `git diff` без прапорців?", options: ["Історію комітів", "Паролі", "Нові файли, яких Git ще не відстежує"], correct: 2, feedback: "`/diff` включає untracked-файли." },
        { question: "Ти натиснув Esc Esc і змінив попереднє повідомлення. Що з файлами, які агент уже змінив?", options: ["Вони лишаються зміненими — відкат файлів робиш через Git", "Автоматично відкотилися", "Видалилися"], correct: 0, feedback: "Esc Esc — про розмову, не про диск." },
        { question: "Який ризик у `git restore src/app.js`?", options: ["Низький — лише читає", "Високий — незакомічені зміни файлу зникнуть без відновлення", "Середній — зміни йдуть у кошик"], correct: 1, feedback: "Кошика в Git для незакомічених змін немає." },
        { question: "Як задати Codex ціль, яку він триматиме протягом довгої задачі?", options: ["`/plan stop`", "Записати в `.gitignore`", "`/goal <опис цілі>`"], correct: 2, feedback: "`/goal` прив'язує ціль до потоку; `pause`, `resume`, `clear` — керування." }
      ]
    }
  ]
});
