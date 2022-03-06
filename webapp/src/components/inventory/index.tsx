import React from 'react';
import { IProduct } from '../../interface';
import request from '../../services/request';
import Item from '../item';

interface Props {
  products: IProduct[];
  fetchVendingMachineStates: () => void;
}

function Inventory(props: Props) {
  return (
    <div className='products'>
      <h3>Inventory</h3>
      <div className='row d-flex justify-content-between'>
        {props.products.map((item) => {
          return (
            <Item
              onItemChoose={async () => {
                const res = await request.post('/order', { type: item.name });
                if (res.error) {
                  window.alert(res.error);
                  return;
                }
                props.fetchVendingMachineStates();
              }}
              key={item.name}
              {...item}
            />
          );
        })}
      </div>
      {(!props.products || props.products.length === 0) && 'No items. Sorry!'}
    </div>
  );
}

export default Inventory;
