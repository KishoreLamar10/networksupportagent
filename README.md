# 💬 GenAI Support Assistant — Web UI

### Next.js • React • Modern Chat Interface

This is the frontend UI for the **AI-powered multi-agent technical support assistant**.  
Users can ask questions about router or network issues and get RAG-enhanced troubleshooting steps.

👉 **Live Demo:** https://networksupportagent.vercel.app/

---

## ✨ Features

### 🔹 Clean Chat Interface

- User/Assistant chat bubbles
- Avatars
- Auto-scroll
- Smooth input field
- Typing indicator
- “New Chat” / Clear Chat button

### 🔹 Markdown Support

Assistant messages render:

- lists
- bold/italic
- headings
- code blocks

Using `react-markdown`.

### 🔹 Connected to Backend API

Uses:

```
https://genai-multi-agent-support.onrender.com/support
```

To fetch intelligent responses.

---

## 📁 Project Structure

```
app/
  page.tsx
  styles.module.css
components/
  ClientOnly.tsx (optional)
public/
```

---

## 🛠️ Setup & Run

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

👉 http://localhost:3000

---

## 🔗 API Integration

Inside `page.tsx` update the endpoint:

```ts
fetch("https://genai-multi-agent-support.onrender.com/support", {
  method: "POST",
  ...
});
```

(Optional) Use environment variables:

```
NEXT_PUBLIC_API_URL=https://genai-multi-agent-support.onrender.com
```

---

## ☁️ Deployment (Vercel)

1. Push repo to GitHub
2. Go to Vercel → New Project
3. Import repository
4. Configure environment variables (if used)
5. Deploy

Your URL will look like:

```
https://genai-support-ui.vercel.app
```

---

## 🧰 Technologies

- Next.js (App Router)
- React
- CSS Modules
- React Markdown
- Vercel Deployment

---
