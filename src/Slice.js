import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('MainproductsInfo'))?JSON.parse(localStorage.getItem('MainproductsInfo')):null
  },
  reducers: {
    productInfo: (state, action) => {
      state.value = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, productInfo } = counterSlice.actions

export default counterSlice.reducer