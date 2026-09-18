window.CLI_COURSE = window.CLI_COURSE || { modules: [], exam: null, cheatsheet: null };
window.CLI_COURSE.modules.push({
  id: "m06", order: 6, title: "Сесії", subtitle: "codex resume, /new, /compact, /fork, /archive, /delete", icon: "replay",
  goal: "Після модуля ти повертаєшся до збережених сесій, тримаєш контекст «чистим», відгалужуєш розмову для експериментів і прибираєш старі сесії без втрати потрібного.",
  lessons: [
    {
      id: "m06-l01", title: "Продовжити, стиснути, відгалузити", minutes: 12,
      steps: [
        { type: "story", title: "Сесія на кожну задачу",
          body: "<p>У реальному проєкті в тебе десятки сесій: README, виправлення navbar, рефакторинг авторизації. Codex зберігає їх локально, тож до будь-якої можна повернутися й продовжити з того ж місця.</p>" },
        { type: "concept", title: "Контекст «розбухає»",
          body: "<p>Чим довша розмова, тим більше контекстного вікна займає історія. Модель гірше тримає головне, а зрештою впирається в ліміт. <code>/compact</code> замінює ранні ходи коротким підсумком; <code>/new</code> і <code>/clear</code> починають розмову з нуля.</p>",
          analogy: "Довга сесія — як зошит із конспектами за семестр. Перед іспитом ти пишеш шпаргалку на одну сторінку (`/compact`) замість гортати сто сторінок. А нова тема — новий зошит (`/new`)." },
        { type: "cli", title: "Повернутися до сесії",
          commands: [
            { cmd: "codex resume", explain: "У shell: список збережених сесій цієї папки; стрілки — вибір, Enter — відновити, можна шукати.", risk: "low" },
            { cmd: "codex resume --last", explain: "Одразу остання сесія з поточної папки, без списку.", risk: "low" },
            { cmd: "codex resume --all", explain: "Список сесій з усіх папок, а не лише з поточної.", risk: "low" },
            { cmd: "/resume", explain: "Той самий список, але зсередини сесії.", risk: "low" }
          ] },
        { type: "terminal", title: "Спробуй: остання сесія",
          task: "Вчора ти працював над README у цій папці. Продовж останню сесію без вибору зі списку.",
          expected: ["codex resume --last"], output: "Resumed: «Add README summary section»\n  2h ago · branch docs/readme-summary",
          hint: "Команда відновлення + прапорець «останній».",
          explain: "Історію завантажено — агент пам'ятає контекст тієї розмови." },
        { type: "cli", title: "Керувати розмовою",
          commands: [
            { cmd: "/compact", explain: "Стиснути історію в підсумок, звільнивши контекст.", risk: "low" },
            { cmd: "/new", explain: "Нова розмова в тому ж CLI; екран не очищується.", risk: "low" },
            { cmd: "/clear", explain: "Очистити екран і почати нову розмову; <code>/clear release prep</code> — одразу з назвою. <span class=\"kbd\">Ctrl</span>+<span class=\"kbd\">L</span> лише очищає екран, розмова лишається.", risk: "low" },
            { cmd: "/fork", explain: "Клон поточної розмови в новий потік — спробувати інший підхід, не втративши оригінал. З текстом (<code>/fork Спробуй через fetch</code>) — форк з першим повідомленням. У shell: <code>codex fork --last</code>.", risk: "low" },
            { cmd: "/side", explain: "Бічна розмова для короткого питання, що не засмічує головну (синонім <code>/btw</code>).", risk: "low" }
          ] },
        { type: "check", title: "Довга сесія",
          question: "Сесія триває три години, агент почав «забувати» ранні домовленості. Що зробити, щоб продовжити ту саму задачу?",
          options: ["`/compact` — стиснути історію в підсумок", "`/delete`", "`/fork` і продовжити в оригіналі"],
          correct: 0, feedback: "`/compact` зберігає ключові факти й звільняє контекст." },
        { type: "cli", title: "Прибирання",
          commands: [
            { cmd: "/archive", explain: "Архівує сесію й виходить; transcript лишається на диску. Повернути: <code>codex unarchive &lt;SESSION&gt;</code>.", risk: "medium" },
            { cmd: "/delete", explain: "Назавжди видаляє transcript поточної сесії та всіх дочірніх і виходить.", risk: "high" }
          ] },
        { type: "callout", variant: "danger", title: "/delete — без повернення",
          body: "<p><code>/delete</code> остаточно стирає історію сесії разом із дочірніми сесіями (форки, субагенти). Відновити її неможливо.</p><p><strong>Безпечна альтернатива:</strong> <code>/archive</code> — сесія зникає зі списків, але повертається через <code>codex unarchive</code>.</p>" },
        { type: "check", title: "Архів чи видалення",
          question: "Стара сесія заважає в списку `codex resume`, але там могли лишитися корисні рішення. Що обрати?",
          options: ["`/delete`", "`/clear`", "`/archive`"],
          correct: 2, feedback: "Архів прибирає зі списку, не знищуючи transcript." },
        { type: "summary", title: "Підсумок",
          points: ["`codex resume` — список сесій; `--last` — одразу остання; `/resume` — зсередини.", "`/compact` — стиснути історію; `/new` і `/clear` — нова розмова.", "`/fork` — альтернативний підхід у копії; `/side` (`/btw`) — бічне питання.", "`/archive` — оборотно; `/delete` — назавжди, разом із дочірніми сесіями."] }
      ],
      glossary: [
        { term: "Transcript", def: "Збережена історія сесії: повідомлення, дії агента, результати." },
        { term: "Форк", def: "Копія розмови в новий потік; оригінал не змінюється." },
        { term: "Архів сесії", def: "Сесія, прибрана зі списків, але збережена на диску." },
        { term: "Compact", def: "Заміна ранньої історії коротким підсумком для економії контексту." }
      ],
      quiz: [
        { question: "Чим `codex resume` відрізняється від `codex resume --last`?", options: ["Нічим", "Перше показує список сесій, друге одразу відкриває останню", "Друге видаляє старі сесії"], correct: 1, feedback: "`--last` пропускає вибір." },
        { question: "Хочеш спробувати радикально інший підхід, не втративши поточну розмову. Що обрати?", options: ["`/fork`", "`/clear`", "`/compact`"], correct: 0, feedback: "Форк — копія з новим ID; оригінал лишається." },
        { question: "Чим `/clear` відрізняється від Ctrl+L?", options: ["Нічим", "Ctrl+L видаляє сесію", "`/clear` починає нову розмову, Ctrl+L лише чистить екран"], correct: 2, feedback: "Ctrl+L — косметика, `/clear` — нова розмова." },
        { question: "Як повернути заархівовану сесію?", options: ["Це неможливо", "`codex unarchive <SESSION>`", "`/undo`"], correct: 1, feedback: "Архів — оборотна дія." },
        { question: "Що ще зникне після `/delete` поточної сесії?", options: ["Дочірні сесії — форки й субагенти", "Файли проєкту", "Лише кеш"], correct: 0, feedback: "Видалення каскадне й остаточне; файли проєкту не чіпає." },
        { question: "Посеред задачі хочеш коротко спитати «що таке JWT?», не засмічуючи головний потік. Що обрати?", options: ["`/new`", "`/delete`", "`/side` (або `/btw`)"], correct: 2, feedback: "Бічна розмова має окремий transcript." }
      ]
    }
  ]
});
