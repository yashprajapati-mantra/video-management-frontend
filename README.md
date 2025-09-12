# 📹 Video Management System – Frontend

This is the **frontend** of the Video Management System, built with **React 19** and optimized for scalability, performance, and developer experience.

---

## 🚀 Tech Stack

### **1. Framework**
**React 19 (Latest)**  
- Most popular and well-supported frontend library.  
- Includes new React 19 features (`use`, `useOptimistic`, `useActionState`) for better async and form handling.  
- Strong ecosystem and long-term community support.  

### **2. Build Tool**
**Vite**  
- Ultra-fast development server with hot module reload (HMR).  
- Modern and optimized production builds.  
- Simpler and faster than Create React App.  

### **3. Styling**
**Tailwind CSS v4**  
- Utility-first CSS for consistent design.  
- Speeds up UI development with prebuilt responsive utilities.  
- Built-in dark mode and accessibility-friendly classes.  

### **4. State & API Handling**
- **Axios** → For making API requests to our Node.js microservices backend.  
- **Zustand** → Lightweight and scalable global state management.  
- **React Context** → For smaller shared states (auth, theme). 

### **5. Routing**
**React Router v7**  
- Declarative, modern routing for React apps.  
- Supports nested routes, loaders, and error handling.  

### **6. Video & Realtime**
- **React Player** and **WebRTC APIs** for video streaming and playback.  
- WebSocket support for real-time alerts and event updates.  

---

## 📂 Project Structure

```bash
security-dashboard/
├── src/
│   ├── api/                # Axios instance & API modules
│   ├── services/           # WebSocket service, event bus
│   ├── features/           # Feature-based modules (cameras, AI, alerts)
│   ├── components/common/  # Shared UI components
│   ├── layouts/            # App layouts (Dashboard, Auth)
│   ├── hooks/              # Custom hooks (useApi, etc.)
│   ├── store/              # Global Zustand store
│   ├── utils/              # Helper functions
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── package.json
├── vite.config.ts
└── .gitignore
