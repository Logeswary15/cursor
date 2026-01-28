# Travel Itinerary Generator 🌍

A modern web application that generates personalized travel itineraries using AI automation.

## Features
- 🎨 **Premium UI**: Glassmorphism design with responsive layout.
- ⚡ **Instant Validation**: Client-side checks for specific travel constraints.
- 🤖 **AI-Powered**: Uses n8n and LLMs to create custom day-by-day plans.
- 📧 **Direct Delivery**: Itineraries are emailed directly to the user.

## Setup Instructions

### 1. Frontend
1. Open `script.js` and replace `WEBHOOK_URL` with your actual n8n Webhook URL.
   ```javascript
   const WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/...';
   ```
2. Open `index.html` in your browser or host on GitHub Pages.

### 2. n8n Workflow
1. Import `workflow.json` into your n8n instance.
2. Configure the **LLM Node** with your OpenAI/Anthropic API key.
3. Configure the **Email Node** with your SMTP credentials (gmail, sendgrid, etc.).
4. Activate the workflow.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Automation**: n8n
- **AI**: OpenAI GPT-4o (via n8n)
