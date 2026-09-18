# Codex CLI Course — OpenAI Codex CLI українською

Україномовний курс і інтерактивний тренажер OpenAI Codex CLI: запуск, контекст, моделі, дозволи й sandbox, робота з кодом, сесії, розширення (MCP, skills, hooks) і `codex exec`. Зміст звірено з офіційною довідкою slash-команд ([command.md](command.md)) і документацією OpenAI.

**Головна мета — не вивчити всі команди, а навчитися швидко знаходити потрібну команду, розуміти її ризик і застосовувати її в реальному сценарії.**

**Не потребує API** — статичні HTML-файли, працює локально в браузері (`file://`) і на GitHub Pages.

## Швидкий старт

```bash
open index.html   # macOS
```

GitHub Pages: **https://stszu.github.io/codex-cli-tutorial-5-emulator/**

## Що всередині

| Файл | Опис |
|------|------|
| [index.html](index.html) | Курс: 8 модулів, 10 уроків, quiz, фінальний іспит, шпаргалка, словник (генерується з `course-config.js` і `lessons/*.js`) |
| [trainer.html](trainer.html) | Тренажер-емулятор Codex CLI (shell + сесія, 8 розділів, тест-режим) |
| [command.md](command.md) | Копія офіційної довідки slash-команд — джерело правди |
| [docs/](docs/) | Архів: конспект і транскрипт відео-уроку #5 |

## Розділи тренажера

| Розділ | Що тренуємо |
|--------|-------------|
| 1. Запуск і перші кроки | `codex --version`, `codex`, `/`, `/status`, `/quit`, `/exit` |
| 2. Контекст | `/init`, `/mention`, `/ide`, `codex -i`, `codex --add-dir` |
| 3. Моделі й налаштування | `/model`, `codex -m`, `/fast`, `/personality`, `/debug-config`, `/statusline`, `/theme`, `/experimental` |
| 4. Дозволи й sandbox | `/permissions` (Read Only / Default (Auto) / Full Access), `--sandbox`, `--ask-for-approval`, `/approve`, `--dangerously-bypass-approvals-and-sandbox` (`--yolo`, високий ризик), `/setup-default-sandbox`, `/sandbox-add-read-dir` |
| 5. Робота з кодом | `git status`, `/plan`, `/goal`, `/diff`, `/review`, `/copy`, `/raw`, `git diff --stat` |
| 6. Сесії | `codex resume`, `codex resume --last`, `/resume`, `/compact`, `/new`, `/clear`, `/fork`, `/side`, `/btw`, `/archive`, `/delete` |
| 7. Розширення | `codex mcp list`, `/mcp`, `/apps`, `/plugins`, `/skills`, `/hooks`, `/memories`, `/agent`, `/ps`, `/stop`, `/import` |
| 8. Автоматизація й акаунт | `codex exec`, `--json`, `--sandbox read-only`, `codex exec resume --last`, `/usage`, `/feedback`, `/logout`, `codex login` |

Окремих команд `/help`, `/undo`, `/export`, `/branch`, `/sandbox`, `/config`, `/tokens` в офіційній довідці немає: список команд — `/`, відкат змін — через Git, налаштування — `config.toml` і `/debug-config`, токени — `/status` і `/usage`.

## Можливості тренажера

- Емуляція shell і сесії Codex (запрошення `%` і `codex ›`), вихід через `/quit`
- Строга перевірка: зараховується лише точна команда або явний синонім
- Прогрес розділів зберігається в браузері (localStorage)
- `codex resume` / `/resume` — вибір сесії, `/permissions` — вибір пресета
- Тест-режим з кнопкою «Пропустити»; `↑`/`↓` — історія, `Tab` — автодоповнення

## Джерела

- OpenAI — Codex CLI, slash commands, command reference, approvals & security
- GitHub: https://github.com/openai/codex
- Відео-урок #5 (не від OpenAI): https://youtu.be/htNz7uazonY

## Ліцензія

MIT — вільне використання з посиланням на джерело.
