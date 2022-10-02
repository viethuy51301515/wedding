import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const config = {
  apiKey: "AIzaSyDMCbW1OdPk43nkiUji3yDkUAjXFWRlwQU",
  authDomain: "wedding-64f5e.firebaseapp.com",
  projectId: "wedding-64f5e",
  storageBucket: "wedding-64f5e.appspot.com",
  messagingSenderId: "868476070742",
  appId: "1:868476070742:web:1a8a664f9e6bf6fc6c04f7",
};
const app = initializeApp(config);
const storage = getStorage(app);
export const storeImage = storage;
