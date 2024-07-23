'use client';

import { Label, Select } from "flowbite-react";
import { useSelector, useDispatch } from 'react-redux'
import { setCryptoData, setCoin } from '../lib/features/crypto/cryptoSlice'
import { useCallback, useEffect } from "react";
import { coins, GET_CRYPTO } from "@/constant";

export function CustomSelect() {
  const coinType = useSelector((state: any) => state.crypto.coin);
  const dispatch = useDispatch();

  const getData = useCallback(async (coin: string) => {
    const URL = `${GET_CRYPTO}?coin=${coin}`;
    const response = await fetch(URL);
    const data = await response.json();

    dispatch(setCryptoData(data));
  }, []);
  
  useEffect(() => {
    getData(coinType);
  }, [coinType]);

  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="coins" value="Select a Coin" />
      </div>
      <Select id="coins" required onChange={(e) => dispatch(setCoin(e.target.value))}>
        {coins.map((coin) => <option key={coin}>{coin}</option>)}
      </Select>
    </div>
  );
}
