# FrontDesk AI — MVP Demo

A polished, browser-local demo of an AI-assisted operations workspace for short-term rental hosts. Built for the CS175 investor pitch.

## Run the demo

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

For a production build:

```bash
npm run build
npm run preview
```

## Demo workflow

1. Start on the advertising homepage, then select **Open live demo** to enter the product at `/dashboard`.
2. On **Dashboard**, select **Start demo tour** or use any overview card to open its operational area.
3. Open **Guest Messages**, select Sophia Turner, generate the Wi-Fi reply, edit it if desired, and send it.
4. Open **Cleaning Tasks**, select **Simulate guest checkout**, choose a property and cleaner, then create the task.
5. Review the overdue turnover in **Needs your attention** and change its status.
6. Open **Smart Pricing**, change the demand scenario, and approve a recommendation.

## What works locally

- Responsive navigation across all six product areas
- Investor-facing advertising homepage with a sticky top navigation menu
- Working global search across properties, guests, cleaners, and task status
- Editable property data and detailed property guides
- Rule-based guest reply generation grounded in each property's saved Wi-Fi, parking, check-in, and lock information
- Automatic host escalation for refunds, complaints, emergencies, late checkout, and unknown requests
- Editable and sendable simulated conversations
- Cleaning task creation, assignment, status changes, completion, and simulated cleaner notifications
- Guest-checkout-to-cleaning-task automation workflow
- Explainable rate recommendations with host minimum guardrails and manual approval
- Search, filters, status badges, alerts, dialogs, toasts, and the guided investor tour
- `localStorage` persistence for edits, tasks, messages, conversation states, and approved rates

## Simulated features

This is a front-end MVP. Guest messages, bookings, checkout events, cleaner notifications, demand signals, and price approvals are simulations using realistic local data. It does not connect to Airbnb, a live AI model, a notification provider, or market-pricing APIs. The UI labels these areas clearly.

## Resetting the demo

Open **Settings → Demo data → Reset demo workspace**, or clear the site's local storage in the browser.

## Stack

React, TypeScript, Vite, React Router, Lucide React, and handcrafted responsive CSS. No backend is required.
