@echo off
REM Setup script for Waffcha Authentication System

echo Creating directories...
if not exist "src\app\login" mkdir src\app\login
if not exist "src\lib" mkdir src\lib

echo Creating .env.local...
(
echo # Firebase API Key - Get from your Firebase Console
echo NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
) > .env.local

echo Creating src\lib\firebase.ts...
(
echo import { initializeApp, getApps, getApp } from "firebase/app";
echo import { getAuth } from "firebase/auth";
echo.
echo const firebaseConfig = {
echo   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "REPLACE_WITH_ENV",
echo   authDomain: "waffcha-project.firebaseapp.com",
echo   projectId: "waffcha-project",
echo   storageBucket: "waffcha-project.firebasestorage.app",
echo   messagingSenderId: "94638011481",
echo   appId: "1:94638011481:web:362e6c80a50f827760ad48",
echo   measurementId: "G-ECDNW0N0YF",
echo };
echo.
echo const app = !getApps^(^).length ? initializeApp^(firebaseConfig^) : getApp^(^);
echo export const auth = getAuth^(app^);
) > src\lib\firebase.ts

echo Files created successfully!
echo.
echo Next steps:
echo 1. Open .env.local and add your Firebase API Key
echo 2. Run: npm install firebase
echo 3. Run: npm run dev
echo 4. Visit: http://localhost:3000
