import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9F2eTLQSsU3CVvA9BvU1XkB-69CrMYcI",
  authDomain: "project-musicapp-5d764.firebaseapp.com",
  projectId: "project-musicapp-5d764",
  storageBucket: "project-musicapp-5d764.appspot.com",
  messagingSenderId: "735047722254",
  appId: "1:735047722254:web:0fa5965d0d761015d1635f"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
