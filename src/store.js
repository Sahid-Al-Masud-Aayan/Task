import { configureStore } from '@reduxjs/toolkit'
import Slice from './Slice'


export default configureStore({
  reducer: {
    counter: Slice,
  },
})