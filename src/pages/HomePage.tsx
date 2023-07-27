import React, { useEffect } from 'react';
import { getAllProductThunk } from '../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useSelector } from 'react-redux';
import ListShoes from '../Components/ListShoes';

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useAppDispatch();
  // đầu tiên tạo một layout item cho một sản phẩm giày
  // gọi api lấy dữ liệu về
  // dùng dữ liệu chạy map ra những item sản phẩm
  const { product } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductThunk());
  }, []);

  console.log(product);

  return (
    <div>
      <h1>Demo về gọi Api trong typescript</h1>

      <div className="container">
        <ListShoes product={product} />
      </div>
    </div>
  );
};

export default HomePage;
