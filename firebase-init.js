// ✅ Firebase configuration (replace with your own values if needed)
const firebaseConfig = {
  apiKey: "AIzaSyATx4sBo57rmsHp5iHtw4-kTnYKDRonZqc",
  authDomain: "nimelssa-southwest.firebaseapp.com",
  projectId: "nimelssa-southwest",
  storageBucket: "nimelssa-southwest.appspot.com", // ✅ fixed this line
  messagingSenderId: "169801101479",
  appId: "1:169801101479:web:397587a517b5b9921e6b82"
};

// ✅ Initialize Firebase (for browser “compat” SDK)
firebase.initializeApp(firebaseConfig);
