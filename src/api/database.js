import { ref, get } from "firebase/database";
import { database } from "../firebase";

export const getData = async () => {
  let data = { data: {} };
  const databaseRef = ref(database, "/");
  await get(databaseRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        data["data"] = snapshot.val();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
};
