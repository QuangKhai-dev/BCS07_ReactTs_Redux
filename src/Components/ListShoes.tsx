import React from 'react';
import { ItemShoes } from '../types/product.type';
import './listShoes.scss';

type Props = {
  product: ItemShoes[];
};

// nestjs - services,module,controller
// decorator, implement, extends,

const ListShoes = (props: Props) => {
  return (
    <div className="row" id="list-shoes">
      {props.product.map((item, index) => {
        return (
          <div className="col-4" key={index}>
            <div className="item_shoes">
              <img src={item.image} alt="" className="w-100" />
              <h2>{item.name}</h2>
              <p>{item.shortDescription}</p>
              <button className="btn btn-dark">Xem chi tiết</button>
            </div>
          </div>
        );
      })}
      {/* // item  */}
    </div>
  );
};

export default ListShoes;
