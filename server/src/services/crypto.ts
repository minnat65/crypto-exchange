import { Crypto } from "../models/crypto";
import { broadCastData } from "../index";

export let selectedCoin = 'ETH';

export const getCrypto = async (coin: string = selectedCoin) => {
  const cryptos = await Crypto.aggregate([
    {
      $match: { code: coin },
    },
    {
      $sort: { createdAt: -1 }
    },
    {
      $limit: 20,
    }
  ]);

  selectedCoin = coin;

  return cryptos;
};

export const getDataFromCoinWatch = async () => {
  const response = await fetch("https://api.livecoinwatch.com/coins/map", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": process.env.COINWATCH_API!,
    }),
    body: JSON.stringify({
      codes: ["ETH", "BTC","GRIN", "LTC", "HBAR"],
      currency: "USD",
      sort: "rank",
      order: "ascending",
      offset: 0,
      limit: 0,
      meta: false,
    }),
  });

  const cryptos = await response.json();

  const savedCrypto = await Crypto.insertMany(cryptos);
  console.log('Saved to DB.')

  broadCastData();
  return savedCrypto;
}