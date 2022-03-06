import React from 'react';
import { IProduct } from '../../interface';

interface Props extends IProduct {
  refund?: boolean;
  onItemChoose: () => void;
}

function Item(props: Props) {
  if (props.refund) {
    return (
      <div className='row justify-content-center p-2'>
        <div className='card' style={{ width: '160px' }}>
          <div className='card-body p-3 text-center'>
            {props.name} ({props.stock})
          </div>
          <div className='card-footer text-center'>
            <small className='text-muted'>
              <button
                className='btn btn-info'
                onClick={() => {
                  props.onItemChoose();
                }}
              >
                Refund
              </button>
            </small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='col p-2'>
      <div className='card' style={{ width: '200px' }}>
        <img src={props.image} className='card-img-top' alt={props.name} />
        <div className='card-body'>
          <h5 className='card-title'>
            {props.name} ({props.stock})
          </h5>
          <p className='card-text'>Rs. {props.price}</p>
        </div>
        <div className='card-footer'>
          <small className='text-muted'>
            <button
              className='btn btn-info'
              onClick={() => {
                props.onItemChoose();
              }}
            >
              Pick
            </button>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Item;
