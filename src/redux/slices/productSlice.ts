import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: [],
};

// tạo một hàm dùng redux-thunk để xử lí gọi dữ liệu và gửi lên store
export const getAllProductThunk = createAsyncThunk(
  '/product/getAllProduct',
  async () => {
    const res = await axios({
      method: 'GET',
      url: 'https://shop.cyberlearn.vn/api/Product',
    });
    // return về cái giá trị mà chúng ta muốn lưu lên store
    // console.log(res);
    return res.data.content;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductThunk.fulfilled, (state, action) => {
      // console.log(state);
      // console.log(action);
      state.product = action.payload;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
