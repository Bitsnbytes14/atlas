# Atlas

Build Once. Render Everywhere.

Atlas is a premium AI-inspired travel planning experience built for the React Elements Challenge. It demonstrates how one structured Trip object can be rendered into multiple polished outputs without duplicating business logic.

## Hero

Atlas turns a single travel plan into a multi-format storytelling system. From a cinematic web experience to a shareable email and a printable travel guide, every surface is powered by the same source data.

## Overview

Atlas is a premium AI-inspired travel planner that showcases React Elements by rendering one Trip object into multiple experiences. The project emphasizes consistency across formats, clean TypeScript data modeling, and modern frontend presentation.

## Features

- Premium Landing Experience
- Local Dataset Engine
- AI-inspired Journey Generation
- Website Renderer
- Email Renderer
- Printable Travel Guide
- ElevenLabs Voice Concierge
- HTML Export
- Email Export
- PDF Export
- Responsive Design

## Supported Destinations

Tokyo 🇯🇵

- 3 Days
- 5 Days
- 7 Days

Dubai 🇦🇪

- 3 Days
- 5 Days
- 7 Days

Istanbul 🇹🇷

- 3 Days
- 5 Days
- 7 Days

## Build Once. Render Everywhere.

The same Trip object powers every final output.

```text
Trip Object
   |
   v
Website
   |
   v
Email
   |
   v
Travel Guide
```

## Voice Concierge

Atlas includes an ElevenLabs-powered Voice Concierge experience:

- Real-time voice conversation
- WebRTC session connectivity
- Premium Atlas concierge interaction flow

## Export Features

Atlas supports one-click export workflows from generated trip data:

- Export HTML
- Export Email
- Export PDF

## Tech Stack

- React
- TypeScript
- Vite
- React Elements
- ElevenLabs React SDK
- CSS

## Project Structure

```text
.
|-- public/
|-- server/
|   |-- src/
|   |   |-- mappers/
|   |   |-- prompts/
|   |   |-- routes/
|   |   |-- services/
|   |   `-- types/
|   `-- tsconfig.json
|-- src/
|   |-- context/
|   |-- data/
|   |   |-- dubai/
|   |   |-- istanbul/
|   |   `-- tokyo/
|   |-- pages/
|   |-- renderers/
|   |   |-- document/
|   |   |-- email/
|   |   `-- page/
|   |-- services/
|   |-- types/
|   `-- utils/
|-- index.html
|-- package.json
`-- README.md
```

## Installation

```bash
npm install
npm run dev
npm run build
```

## Future Scope

- More destinations
- Live booking APIs
- Maps integration
- Weather APIs
- User accounts
- Saved trips

## Screenshots

### Landing Page

![Landing Page Placeholder](./public/screenshots/landing-page-placeholder.png)

### Website Renderer

![Website Renderer Placeholder](./public/screenshots/website-renderer-placeholder.png)

### Email Renderer

![Email Renderer Placeholder](./public/screenshots/email-renderer-placeholder.png)

### Travel Guide

![Travel Guide Placeholder](./public/screenshots/travel-guide-placeholder.png)

### Voice Concierge

![Voice Concierge Placeholder](./public/screenshots/voice-concierge-placeholder.png)

## Author

Mohammad Ahmad  
Symbiosis Institute of Technology  
Built for the React Elements Challenge.
