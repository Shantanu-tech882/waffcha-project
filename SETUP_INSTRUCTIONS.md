# Firebase Authentication Setup Guide

## Files Already Created (in your repo):
✅ `src/context/AuthContext.tsx` - Auth provider & useAuth hook
✅ `src/context/firebase.ts` - Firebase initialization
✅ `src/providers/AppProviders.tsx` - Wrapped with AuthProvider
✅ `src/components/Navigation.tsx` - Sign out button added

## Files You Need to Create Manually:

### 1. Create directory: `src/lib`
```bash
mkdir src\lib
```

### 2. Create file: `src/lib/firebase.ts`
Copy this content:
```typescript
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "REPLACE_WITH_ENV",
  authDomain: "waffcha-project.firebaseapp.com",
  projectId: "waffcha-project",
  storageBucket: "waffcha-project.firebasestorage.app",
  messagingSenderId: "94638011481",
  appId: "1:94638011481:web:362e6c80a50f827760ad48",
  measurementId: "G-ECDNW0N0YF",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
```

### 3. Create directory: `src/app/login`
```bash
mkdir src\app\login
```

### 4. Create file: `src/app/login/page.tsx`
See `src/app/login/page.tsx` in this repo (already created in src/context)

### 5. Create file: `.env.local` (at project root)
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
```

Get your API key from [Firebase Console](https://console.firebase.google.com/)
- Project: waffcha-project
- Settings > General > Web API Key

## Then Run:
```bash
npm install firebase
npm run dev
```

Visit: http://localhost:3000
→ Should redirect to /login
→ Sign in with Google or email
→ Should redirect back to homepage
