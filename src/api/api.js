import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storeImage } from "../firebase";

export const fetchBackgroundImg = async () => {
  const data = {};
  const pathReference = ref(storeImage, "background/background.jpg");
  await getDownloadURL(pathReference).then((res) => (data["background"] = res));
  return data;
};
export const fetchFooterImg = async () => {
  const data = {};
  const pathReference = ref(storeImage, "background/footer.jpg");
  await getDownloadURL(pathReference).then((res) => (data["footer"] = res));
  return data;
};
export const fetchAboutImage = async () => {
  const data = {};
  await listAll(ref(storeImage, "about")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["about"] = [...images];
  });
  return data;
};

export const fetchTimerImage = async () => {
  const data = {};
  const pathReference = ref(storeImage, "timer/timer.jpg");
  await getDownloadURL(pathReference).then((res) => (data["timer"] = res));
  return data;
};

export const fetchPlacesImage = async () => {
  const data = {};
  data["places"] = {};
  await listAll(ref(storeImage, "places/ceremony")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["places"]["ceremony"] = [...images];
  });
  await listAll(ref(storeImage, "places/prewedding")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["places"]["prewedding"] = [...images];
  });
  await listAll(ref(storeImage, "places/wedding")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["places"]["wedding"] = [...images];
  });

  return data;
};

export const fetchGalleryImage = async () => {
  const data = {};
  data["gallery"] = {};
  await listAll(ref(storeImage, "gallery/ceremony")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["gallery"]["ceremony"] = [...images];
  });
  await listAll(ref(storeImage, "gallery/prewedding")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["gallery"]["prewedding"] = [...images];
  });
  await listAll(ref(storeImage, "gallery/wedding")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["gallery"]["wedding"] = [...images];
  });
  return data;
};

export const fetchStoriesImage = async () => {
  const data = {};
  await listAll(ref(storeImage, "stories")).then(async (res) => {
    const images = [];
    for (let index = 0; index < res.items.length; index++) {
      const itemRef = res.items[index];
      await getDownloadURL(itemRef).then((res) => {
        images.push(res);
      });
    }
    data["stories"] = [...images];
  });
  return data;
};
