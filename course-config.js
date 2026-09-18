window.CLI_COURSE_CONFIG = {
  id: "codex-cli",
  title: "OpenAI Codex CLI",
  subtitle: "AI-агент у терміналі без страху: запуск, контекст, моделі, дозволи й sandbox, сесії, робота з кодом і codex exec.",
  overline: "Курс для новачків · Codex CLI · slash-команди",
  brandSub: "курс Codex CLI",
  storageKey: "cli-codex-cli-v1",
  caseInsensitive: false,
  prompt: "stas@MacBook-Pro demo-app %",
  termTitle: "zsh — навчальний термінал Codex",
  sandbox: "trainer.html",
  quizBank: null,
  skills: [
    ["terminal", "Запускати Codex із shell і керувати сесією slash-командами: `/status`, `/model`, `/quit`."],
    ["description", "Давати агенту контекст: `AGENTS.md` через `/init`, файли через `/mention` і `@`."],
    ["shield", "Обирати дозволи свідомо: Read Only, Default (Auto), Full Access — і розуміти ризик `--yolo`."],
    ["code", "Перевіряти роботу агента: `/plan`, `/diff`, `/review` і відкат через Git."],
    ["replay", "Продовжувати й прибирати сесії: `codex resume`, `/compact`, `/fork`, `/archive`."],
    ["settings", "Автоматизувати задачі через `codex exec` і підключати MCP, skills, hooks."]
  ],
  audience: "<p>Для тих, хто вже відкривав термінал і хоче працювати з OpenAI Codex CLI — AI-агентом, який читає проєкт, редагує файли й запускає команди. Курс побудовано на офіційній довідці slash-команд (<code>command.md</code>) і документації OpenAI.</p><p>Головна мета — не вивчити всі команди, а навчитися швидко знаходити потрібну команду, розуміти її ризик і застосовувати її в реальному сценарії.</p>",
  safety: "<p>Кроки «Спробуй сам» і тренажер — імітація: вони нічого не запускають і не звертаються до API. У справжньому Codex починай у режимі <strong>Read Only</strong> або <strong>Default (Auto)</strong> у чистому Git-репозиторії на окремій гілці. <strong>Full Access</strong> і <code>--dangerously-bypass-approvals-and-sandbox</code> (<code>--yolo</code>) — лише в ізольованому середовищі.</p>",
  sources: [
    { href: "https://developers.openai.com/codex/cli", label: "OpenAI — Codex CLI" },
    { href: "https://developers.openai.com/codex/cli/slash-commands", label: "OpenAI — Slash commands in Codex CLI" },
    { href: "https://developers.openai.com/codex/cli/reference", label: "OpenAI — Codex CLI command reference" },
    { href: "https://developers.openai.com/codex/agent-approvals-security", label: "OpenAI — Approvals & security" },
    { href: "https://developers.openai.com/codex/models", label: "OpenAI — Codex models" },
    { href: "https://github.com/openai/codex", label: "GitHub — openai/codex" }
  ]
};
