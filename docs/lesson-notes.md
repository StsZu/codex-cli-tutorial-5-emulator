# OpenAI Codex Tutorial #5 — CLI Commands & Resuming Sessions

**Source:** `OpenAI Codex Tutorial #5 - CLI Commands & Resuming Sessions [htNz7uazonY].mp3`  
**Video:** https://youtu.be/htNz7uazonY  
**Duration:** ~6:28  
**Transcribed:** OpenAI Whisper `small` (English) + легка нормалізація (`Codex` замість ASR «codecs»)

---

## Transcript

Alright then, so we've got the Codex CLI up and running now, which we started using in the previous lesson to make changes to the project on a new branch.

Now I've since pushed that branch up to GitHub and merged it, and I pulled down the most recent version of the main branch as well, which I'm on now, so everything's up to date.

So in this lesson, we're going to look at some of the built-in commands that come with the Codex CLI.

And again, if you've ever used Claude Code, it's a pretty similar experience to their own commands, or slash commands as they're called, because each command starts with a slash — and it's exactly the same in the Codex CLI. Each built-in command starts with a forward slash.

Now I'm just going to exit the current Codex session by pressing **Ctrl+C**, and when I do that, it's going to put me back in a regular terminal.

Then I'm going to run the `codex` command again to start a brand new session, and when I do that, the first thing Codex does is suggest trying out some of these different commands.

So the first one is the **`/init`** command, which creates an `agents.md` file, which we're going to talk about, I think, in the next lesson.

The second one is the **`/status`** command, which shows a bit of information about the current session.

Then we've got the **`/approvals`** command, which we can use to set up automatic approvals for Codex when it comes to file edits and whatnot.

And finally, the **`/model`** command, which lets us choose an OpenAI model to work with. And by default, this is set to the GPT-5 Codex model at the time of recording.

There are other commands that we can use as well, which we can see if we type a forward slash. So if we scroll down here, we can see some more like:

- **`/new`** — start a new session  
- **`/compact`** — squash the chat history into a compact summary to reduce the overall session context  

This is useful because as your sessions go on for longer, the context of the session accumulates and gets a bit bloated. And when that happens, it can affect AI decision-making when it comes to code edits. You could also eventually hit the context limit, which is how much context an AI model can process at any time. So **`/compact`** is really useful if you have these long-running sessions to prevent context buildup and bloat.

We've also got:

- **`/diff`** — show Git diffs directly in the terminal  
- **`/mention`** — add files as context to a prompt (same as using `@`, which is much quicker)  
- **`/mcp`** — list all MCP servers configured for Codex in this project  
- **`/logout`** — log out of the Codex CLI  
- **`/quit`** — quit the current session  

So there's quite a few commands built into the Codex CLI — not as many as Claude Code, but I do think OpenAI will be adding to this list as they flesh out the product even more.

---

### `/status`

First, **`/status`** gives information about the current session. When we hit enter, we see details formatted quite nicely:

- **Workspace** — working directory, approval mode, sandbox (where and how Codex is allowed to operate; write access only to this workspace and agent files)  
- **Account** information  
- **Current model** and extra details  
- **Client version** — version of the Codex CLI  
- **Token usage** — input prompts and AI output  

---

### `/model`

**`/model`** shows the current selection: e.g. GPT-5 Codex with medium reasoning. At the time of recording, the listed models are GPT-5 variations with different degrees of reasoning.

---

### `/approvals`

**`/approvals`** — approval modes for the project:

| Mode | Behaviour |
|------|-----------|
| **Auto** (default in demo) | Read files, make edits, run commands automatically within the workspace |
| **Read only** | Read files and answer questions; approval needed for anything else |
| **Full access** | Full access including automatic network access |

---

### `/quit`

**`/quit`** ends the current Codex session and returns to the regular terminal.

---

## Resuming previous sessions

One more topic: **how to resume a previous session**.

Normally you'd have a different session for every distinct feature (10, 11, 12… sessions in a real project). Sometimes you want to go back to an older session and continue.

To resume:

```bash
codex resume
```

You get a list of sessions for this project. Arrow up/down, **Enter** to select. You can also **search** — e.g. type `summary` to filter sessions by description and re-enter that conversation.

At the time of recording, there is **no built-in way to delete old sessions** in the Codex CLI (expected in the future). The presenter notes the CLI still feels a bit unfinished compared to mature tools, but providers are shipping quickly.

---

## Summary

- Slash commands (`/init`, `/status`, `/approvals`, `/model`, `/new`, `/compact`, `/diff`, `/mention`, `/mcp`, `/logout`, `/quit`)  
- **`/compact`** for long sessions and context bloat  
- **`codex resume`** to continue past sessions with search  
- Next lesson: **agent files** (`agents.md`)

---

## Slash commands cheat sheet (from this lesson)

| Command | Purpose |
|---------|---------|
| `/init` | Create `agents.md` |
| `/status` | Session info (workspace, model, tokens) |
| `/approvals` | Auto / read-only / full access |
| `/model` | Choose OpenAI model & reasoning level |
| `/new` | New session |
| `/compact` | Compress chat history |
| `/diff` | Git diff in terminal |
| `/mention` | Add file context (like `@file`) |
| `/mcp` | List MCP servers |
| `/logout` | Log out |
| `/quit` | Exit session |

**CLI:** `codex resume` — pick or search a previous session.