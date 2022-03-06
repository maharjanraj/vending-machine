import React from 'react';

interface Props {
  coins: number;
  cash: number;
  addCoins: () => void;
  addCash: () => void;
  setCoins: (n: number) => void;
  setCash: (n: number) => void;
}

function InsertWallet(props: Props) {
  return (
    <div>
      <div className='row p-1'>
        <div className='col'>
          <input
            className='insert form-control'
            min={1}
            value={props.coins}
            onChange={(e) => props.setCoins(Number(e.target.value))}
            type='number'
            placeholder='coins'
          />
        </div>

        <div className='col'>
          <button
            className='btn btn-success insert-btn'
            onClick={props.addCoins}
          >
            Add coin
          </button>
        </div>
      </div>

      <div className='row p-1'>
        <div className='col'>
          <input
            className='insert form-control '
            min={1}
            value={props.cash}
            onChange={(e) => props.setCash(Number(e.target.value))}
            type='number'
            placeholder='cash'
          />
        </div>

        <div className='col'>
          <button
            className='btn btn-success insert-btn'
            onClick={props.addCash}
          >
            Add Cash
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsertWallet;
