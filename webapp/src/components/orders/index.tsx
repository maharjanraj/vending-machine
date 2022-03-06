import React from 'react';
import { IProduct } from '../../interface';
import Request from '../../services/request';
import Item from '../item';

interface Props {
  orders: IProduct[];
  fetchVendingMachineStates: () => void;
}

function Orders(props: Props) {
  return (
    <div className='products'>
      <h3>Orders</h3>
      <div className='d-flex flex-column'>
        {props.orders.map((item) => {
          return (
            <Item
              refund
              onItemChoose={async () => {
                const res = await Request.post('/refund', { type: item.name });
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
    </div>
  );
}

export default Orders;
