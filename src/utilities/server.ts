import axios from "axios";

type MemeData = {
  category: string;
  meme: {
    imageUrl: string;
  };
};

const getMeme = axios({
  method: "get",
  url: "https://bit.ly/2mTM3nY",
  responseType: "json",
}).then(function (response) {
  const data = response.data;

  // Assuming data is an array of meme objects, you can map them to the desired format
  const memes: MemeData[] = data.map((item: any) => ({
    category: item.category,
    meme: {
      imageUrl: item.imageUrl,
    },
  }));

  return memes;
});

export default getMeme;
