💬 GenAI Network Support Assistant — Web UI
Next.js • Modern Chat UI • Cloud-Connected AI Assistant
This is the frontend interface for the AI-powered multi-agent technical support assistant.
Users can chat with an intelligent agent that provides router/network troubleshooting steps using RAG and multi-agent reasoning.
👉 LIVE DEMO:
<https://networksupportagent.vercel.app/>
(This is what you will put in your portfolio.)
✨ Features
🔹 Clean Modern Chat UI
Smooth input interaction
Auto-scroll
Chat bubbles (user + assistant)
Avatars
Typing animation (like ChatGPT)
"New Chat" button
Fully responsive
🔹 Connected to Cloud Backend
Uses:
https://genai-multi-agent-support.onrender.com/support
to fetch multi-agent AI responses.
🔹 Markdown Rendering
Assistant messages support:
bullet points
bold/italic
headings
code blocks
⚡ Instant Real-Time Replies
📁 Project Structure
app/
┣ page.tsx
┣ styles.module.css
components/
┗ ClientOnly.tsx (if used)
public/
🛠️ Setup & Installation
1️⃣ Clone repo
git clone https://github.com/<your-username>/genai-support-ui
cd genai-support-ui
2️⃣ Install dependencies
npm install
3️⃣ Run locally
npm run dev
Open:
👉 http://localhost:3000
🔗 API Endpoint
Configure API URL in page.tsx:
fetch("https://genai-multi-agent-support.onrender.com/support", ...)
Or use environment variable:
NEXT_PUBLIC_API_URL=https://genai-multi-agent-support.onrender.com
☁️ Deploy on Vercel
Push to GitHub
Go to https://vercel.com
“New Project” → Import repo
Add environment variables (if used)
Deploy
Your final public URL will look like:
https://genai-support-ui.vercel.app
🧰 Technologies Used
Next.js (App Router)
React
CSS Modules
React Markdown
Vercel Deployment
