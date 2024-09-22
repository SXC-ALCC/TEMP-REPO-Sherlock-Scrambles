const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const alreadyCreatedAps = getApps();

const yourFirebaseAdminConfig = {
    credential: cert({
        projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
        clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
};

const App =
  alreadyCreatedAps.length === 0
    ? initializeApp({yourFirebaseAdminConfig}, "App-1")
    : alreadyCreatedAps[0];

export const db = getFirestore(App);
