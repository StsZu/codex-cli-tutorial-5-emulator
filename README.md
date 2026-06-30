# Codex CLI Tutorial #5 — Interactive Emulator

Україномовний інтерактивний тренажер slash-команд OpenAI Codex CLI на основі [уроку #5](https://youtu.be/htNz7uazonY) (CLI Commands & Resuming Sessions).

**Не потребує API** — один HTML-файл, працює локально в браузері.

## Швидкий старт

```bash
git clone git@github.com:StsZu/codex-cli-tutorial-5-emulator.git
cd codex-cli-tutorial-5-emulator
open index.html   # macOS
```

Або відкрий `index.html` подвійним кліком.

## Модулі тренування

| Розділ | Як увійти | Що тренуємо |
|--------|-----------|-------------|
| **Урок 5 — CLI основи** | старт | `/init`, `/status`, `/approvals`, `/model`, `/compact`, `/diff`, `/mcp`, … |
| **Документація & README** | `codex resume` → Add README summary | markdown, `/export`, `/branch` |
| **Frontend & CSS** | `codex resume` → Fix navbar | `/review`, `/undo`, `/sandbox` |
| **Backend & Auth** | `codex resume` → Refactor auth | `/config`, `/tokens`, MCP |

## Можливості

- Slash-команди з українськими поясненнями (жовтий hint під результатом)
- Прогрес по кожному розділу окремо
- `codex resume` з пошуком сесій і переходом у підрозділи
- Клавіатура: `↑`/`↓` історія, `Tab` автодоповнення
- GitHub Pages ready — статичний HTML

## GitHub Pages

У Settings → Pages → Source: **Deploy from branch** → `main` → `/ (root)`.

URL: `https://stszu.github.io/codex-cli-tutorial-5-emulator/`

## Структура

```
index.html          # емулятор (весь UI + логіка)
docs/
  lesson-notes.md   # конспект уроку
  transcript-en-uk.md
  tts-uk.txt        # текст для озвучки
```

## Джерело відео

- YouTube: https://youtu.be/htNz7uazonY
- Автор оригінального туторіалу — не OpenAI; емулятор створено для навчання.

## Ліцензія

MIT — вільне використання з посиланням на джерело.