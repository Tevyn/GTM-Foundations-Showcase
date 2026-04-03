---
name: demo-start
description: >
  Start the GTM demo display server and open it in the browser. Use this skill whenever
  the user wants to launch the demo display, start the showcase server, open the display
  page, or says "start the demo." Also trigger when the user mentions demo-start, launch
  display, open showcase, or similar.
---

# Demo Start Skill

Launches the GTM Foundations Showcase display server and opens it in the default browser. This is a convenience shortcut so you don't have to manually start the server from the terminal.

## Interaction flow

### Step 1: Check if the server is already running

Run:
```bash
lsof -ti:3000
```

If a process is found on port 3000, the server is already running. Skip to Step 3.

### Step 2: Start the server

Run the display server in the background:
```bash
cd demo-display && node server.js &
```

Wait 1 second for the server to initialize, then verify it started by checking port 3000 again.

If it fails to start, tell the user and suggest they check for port conflicts.

### Step 3: Open in browser

```bash
open http://localhost:3000
```

### Step 4: Confirm

Tell the user: "Demo display is running at http://localhost:3000 and opened in your browser."
