import React from 'react';

interface Props {
  title: string;
  coins: number;
  cash: number;
}

function Balance(props: Props) {
  return (
    <div>
      <h2>{props.title}:</h2>
      <span>Coins: {props.coins}</span>
      {' | '}
      <span>Cash: {props.cash}</span>
    </div>
  );
}

export default Balance;
