import { createSlice } from '@reduxjs/toolkit'

export const cryptoSlice = createSlice({
  name: 'coins-data',
  initialState: {
    coin: 'ETH',
    cryptoData: [],
  },
  reducers: {
    setCoin: (state, payload) => {
        state.coin = payload.payload;
        return state;
    },

    setCryptoData: (state, payload) => {
      console.log(payload);
        state.cryptoData = payload.payload;
        return state;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setCoin, setCryptoData } = cryptoSlice.actions

export default cryptoSlice.reducer