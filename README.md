# Real-Time Chat Application

A real-time chat web application built with WebSocket technology, featuring user authentication, local storage, and responsive design. The application enables instant messaging between users and the server, with messages being echoed back from the server to the client.

## Features

- 🔐 User Authentication (Sign up, Login, Logout)
- 💬 Real-time messaging using WebSocket
- 📱 Responsive design for all devices
- 💾 Local storage for chat history
- 🔄 Message echo functionality
- 📊 Multiple chat sessions support
- 🎨 Clean and intuitive UI

## Tech Stack

### Frontend
- Next.js
- Socket.io-client
- TailwindCSS
- LocalStorage API

### Backend
- Strapi (Headless CMS)
- Node.js
- Socket.io

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/royaals/realtime-chat-application.git
   cd realtime-chat-application
   ```
# Strapi Installation and Configuration


## Backend Setup

### 1. Create a Strapi App
Run the following command to create a new Strapi app:
```bash
cd chat-backend
npm install
```
Configure environment variables

Start the Strapi server:
```bash
npm run develop
```

Open your browser and navigate to http://localhost:1337
You should see the Strapi dashboard.

Websocket Setup
### 1. Navigate to the websocket directory
```bash
cd websocket
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to http://localhost:3001

Frontend Setup
### 1. Navigate to the chat-app directory
```bash
cd chat-app
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000


## API Endpoints

### REST API
- **POST /auth/local/register** - Register a new user.
- **POST /auth/local** - Log in with existing credentials.
- **GET /messages** - Retrieve chat history.
- **POST /messages** - Create a new message.

### WebSocket Events
- **connection** - Triggered when a client connects to the server.
- **message** - Used to send and receive messages in real-time.
- **disconnect** - Triggered when a client disconnects from the server.
