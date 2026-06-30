# OpenAI Codex Tutorial #5 — текст для аудіо→текст + переклад UK

**Джерело аудіо:** `OpenAI Codex Tutorial #5 - CLI Commands & Resuming Sessions [htNz7uazonY].mp3`  
**Відео:** https://youtu.be/htNz7uazonY  
**Призначення:** еталонний текст для звірки speech-to-text (STT) і навчання українською.

---

## 1. English — clean text (for STT / dictation check)

Alright then, so we've got the Codex CLI up and running now, which we started using in the previous lesson to make changes to the project on a new branch.

Now I've since pushed that branch up to GitHub and merged it, and I pulled down the most recent version of the main branch as well, which I'm on now, so everything's up to date.

So in this lesson, we're going to look at some of the built-in commands that come with the Codex CLI.

And again, if you've ever used Claude Code, it's a pretty similar experience to their own commands, or slash commands as they're called, because each command starts with a slash, and it's exactly the same in the Codex CLI. Each built-in command starts with a forward slash.

Now I'm just going to exit the current Codex session by pressing Ctrl plus C, and when I do that, it's going to put me back in a regular terminal.

Then I'm going to run the Codex command again to start a brand new session, and when I do that, the first thing Codex does is suggest trying out some of these different commands.

So the first one is the init command, which creates an agents.md file, which we're going to talk about, I think, in the next lesson.

The second one is the status command, which shows a bit of information about the current session.

Then we've got the approvals command, which we can use to set up automatic approvals for Codex when it comes to file edits and whatnot.

And finally, the model command, which lets us choose an OpenAI model to work with. And by default, this is set to the GPT-5 Codex model at the time of recording.

There are other commands that we can use as well, which we can see if we type a forward slash. So if we scroll down here, we can see some more like the new command to start a new session.

There's the compact command to squash the chat history into a compact summary to reduce the overall session context.

This is useful because as your sessions go on for longer, the context of the session accumulates and gets a bit bloated. And when that happens, it can affect AI decision-making when it comes to code edits. You could also eventually hit the context limit, which is how much context an AI model can process at any time. So this compact command is really useful if you have these long-running sessions to prevent context buildup and bloat.

We've also got the diff command for showing Git diffs directly in the terminal.

We've got the mention command to add files as context to a prompt. And this is actually just the same as using the at sign, which is much quicker than running this command.

Here's the mcp command, which lists out all the MCP servers configured for Codex in this project. And we'll talk more about MCP servers later in the course.

And then we've got two more: the logout command to log out of the Codex CLI and the quit command to quit the current session.

So there's quite a few commands built into the Codex CLI, not as many as Claude Code, but I do think OpenAI will be adding to this list as they flesh out the product even more.

Okay, so let's try using a couple of these commands then.

First of all, I'm going to use the forward slash status command to give us some information about the current session that we're in. And when we hit enter, we should see a bunch of details all formatted quite nicely, in my opinion.

We've got workspace information, which lists the working directory, the approval mode, the sandbox, which is basically where and how Codex is allowed to play. In this case, it has write access only to this workspace and also any agent files, which we don't have yet.

Below that, we've got the account information, then we've got the current model that we're using, along with some extra details about that model.

We've got the client version, which is just the version of the Codex CLI we're using.

And then finally, we've got the token usage at the bottom, which is a representation of how much we've used the AI model in terms of our own input, the prompts, and the AI's output.

So that's the status command.

Let's try another one like the model command. So just forward slash then model, then hit enter.

And when we do that, we can see that currently we have the GPT-5 Codex with medium reasoning selected. And in fact, all of these models are GPT-5 variations at the time of recording, and we can use different degrees of reasoning with these models.

I'm going to stick with the current selection and just hit escape for now.

Next let's try the forward slash approvals command, which is where we can select different approval modes for this project.

Right now it's on auto, which means it can read files, make edits and run commands automatically within this workspace.

If you switch it to read only, then Codex can only read the files and answer questions about them. And it's going to need your approval before it does anything else.

Full access is where you give Codex full access to do what it wants with automatic network access as well.

I'm going to stick with auto again and hit escape to go back.

So that's just a few of the commands, and we might be using a few more as we go forward.

For now, I want to use the quit command to quit the current Codex session so that we can get dumped back into the regular terminal.

Okay, so there's one more thing I'd like to show you in this lesson, and that is how to resume a previous session.

So I think so far in this project, using the CLI, we've made maybe two sessions, possibly three, I think just two, but normally in a project, I would have a different session for every distinct feature I want Codex or whatever other agentic coding agent I'm using to work on.

So that might be ten, eleven, twelve, thirteen, fourteen sessions.

And sometimes I might want to go back to some of the older sessions to continue working on that feature.

So in Codex, to resume a session, we can just type codex in here, and then after that resume, and then press enter.

And when we do that, we're going to get all of the different sessions we've had with this particular project.

Now, there's only been two here, but there might be more, like I said.

So we can just key up and down and select one of these using enter, and we'll go back into that session.

You can also search as well. So for example, if I search the description, so for example summary, which is what we did before, we wanted a summary of something.

There we go. Summary. We can see it filters out the rest of the sessions, but leaves me with this one.

So I could just press enter now to be dumped back into that particular session.

Now as of yet, at the time of recording this video, I don't think there's a way built into the Codex CLI to delete old sessions, but I'm sure it's going to come in the future.

And like I said before, I feel like Codex as a whole is still trying to find its feet a little bit, and the CLI tool does feel maybe a little bit unfinished, but because all these different providers are just so desperate to get their tools out onto the market as quickly as possible, we're going to see this kind of thing across the spectrum.

Anyway, now we know how to use commands and resume previous sessions.

Next up, we're going to talk a little bit about the agent files.

---

## 2. Українська — повний переклад

Добре, отже, у нас уже працює Codex CLI — ми почали користуватися ним у попередньому уроці, щоб вносити зміни в проєкт у новій гілці.

Відтоді я запушив ту гілку на GitHub і змерджив її, а також підтягнув найсвіжішу версію гілки main, на якій я зараз і перебуваю — тобто все актуальне.

У цьому уроці ми розглянемо вбудовані команди Codex CLI.

Якщо ви коли-небудь користувалися Claude Code, досвід дуже схожий на їхні slash-команди: кожна команда починається зі слеша — у Codex CLI так само. Усі вбудовані команди починаються з `/`.

Зараз я вийду з поточної сесії Codex, натиснувши **Ctrl+C** — після цього повернуся в звичайний термінал.

Потім знову запущу `codex`, щоб почати нову сесію. Перше, що робить Codex — пропонує спробувати різні команди.

Перша — **`/init`**: створює файл `agents.md` (про це, мабуть, у наступному уроці).

Друга — **`/status`**: показує інформацію про поточну сесію.

Третя — **`/approvals`**: налаштування автоматичних дозволів для редагування файлів тощо.

І нарешті **`/model`**: вибір моделі OpenAI; за замовчуванням — GPT-5 Codex (на момент запису).

Інші команди видно, якщо ввести `/` і прокрутити список:

- **`/new`** — нова сесія  
- **`/compact`** — стискає історію чату в короткий summary, щоб зменшити контекст сесії  

Це корисно, бо в довгих сесіях контекст накопичується і «роздувається», що погіршує рішення AI щодо правок коду. Можна впертися в ліміт контексту моделі. **`/compact`** допомагає уникнути цього в довготривалих сесіях.

Також є:

- **`/diff`** — показує Git diff у терміналі  
- **`/mention`** — додає файли в контекст промпту (те саме, що `@`, але швидше)  
- **`/mcp`** — список MCP-серверів для Codex у проєкті  
- **`/logout`** — вихід із Codex CLI  
- **`/quit`** — завершення поточної сесії  

Команд у Codex CLI чимало, хоч менше ніж у Claude Code; OpenAI, ймовірно, додаватиме нові.

---

### `/status`

**`/status`** показує дані про сесію:

- **Workspace** — робоча директорія, режим дозволів, sandbox (де і як Codex може працювати; write лише в workspace і agent files)  
- **Account** — обліковий запис  
- **Model** — поточна модель  
- **Client version** — версія Codex CLI  
- **Token usage** — скільки токенів пішло на ваші промпти та відповіді AI  

---

### `/model`

**`/model`** — поточний вибір, напр. GPT-5 Codex із medium reasoning. На момент запису — варіанти GPT-5 з різним рівнем reasoning.

---

### `/approvals`

| Режим | Поведінка |
|-------|-----------|
| **Auto** | Читання, редагування, команди в workspace автоматично |
| **Read only** | Лише читання й відповіді; інше — з вашого дозволу |
| **Full access** | Повний доступ, включно з мережею |

---

### `/quit`

**`/quit`** — вихід із сесії Codex у звичайний термінал.

---

## Відновлення попередніх сесій

У реальному проєкті зазвичай окрема сесія на кожну фічу (10, 11, 12… сесій). Інколи треба повернутися до старої сесії й продовжити.

```bash
codex resume
```

З’явиться список сесій проєкту. Стрілки вгору/вниз, **Enter** — вибір. Можна **шукати** за описом, напр. `summary`, щоб відфільтрувати потрібну розмову.

На момент запису **немає вбудованого способу видалити старі сесії** (очікується пізніше). CLI ще виглядає не до кінця доробленим — типова ситуація, коли провайдери поспішають на ринок.

---

## Підсумок

- Slash-команди: `/init`, `/status`, `/approvals`, `/model`, `/new`, `/compact`, `/diff`, `/mention`, `/mcp`, `/logout`, `/quit`  
- **`/compact`** — для довгих сесій  
- **`codex resume`** — продовжити стару сесію з пошуком  
- Далі — **agent files** (`agents.md`)

---

## Шпаргалка команд (UK)

| Команда | Призначення |
|---------|-------------|
| `/init` | Створити `agents.md` |
| `/status` | Інфо про сесію (workspace, модель, токени) |
| `/approvals` | Auto / read-only / full access |
| `/model` | Модель OpenAI і рівень reasoning |
| `/new` | Нова сесія |
| `/compact` | Стиснути історію чату |
| `/diff` | Git diff у терміналі |
| `/mention` | Додати файл у контекст (як `@file`) |
| `/mcp` | Список MCP-серверів |
| `/logout` | Вийти з облікового запису |
| `/quit` | Завершити сесію |

**CLI:** `codex resume` — вибрати або знайти попередню сесію.