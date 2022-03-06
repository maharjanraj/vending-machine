import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import { IProduct, IBalance } from './interface';
import Request from './services/request';
import Balance from './components/balance';
import InsertWallet from './components/insertWallet';
import Inventory from './components/inventory';
import Orders from './components/orders';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [orders, setOrders] = useState<IProduct[]>([]);
  const [balance, setBalance] = useState<IBalance>({ coins: 0, cash: 0 });
  const [wallet, setWallet] = useState<IBalance>({ coins: 0, cash: 0 });

  const [coins, setCoins] = useState(0);
  const [cash, setCash] = useState(0);

  const fetchVendingMachineStates = useCallback(async () => {
    const products: IProduct[] = await Request.get('/product');
    setProducts(products.filter((item) => item.stock > 0));

    const orders: IProduct[] = await Request.get('/order');
    setOrders(orders.filter((item) => item.stock > 0));

    const balance: IBalance = await Request.get('/balance');
    setBalance(balance);

    const wallet: IBalance = await Request.get('/wallet');
    setWallet(wallet);
  }, []);

  useEffect(() => {
    fetchVendingMachineStates();
  }, [fetchVendingMachineStates]);

  const addCoins = useCallback(async () => {
    if (products.length < 1) {
      window.alert('No items available now.');
      return;
    }
    if (coins < 1) return;
    await Request.post('/addCoins', { coins });
    setWallet((wallet) => ({ ...wallet, coins: wallet.coins + coins }));
  }, [coins, products.length]);

  const addCash = useCallback(async () => {
    if (products.length < 1) {
      window.alert('No items available now.');
      return;
    }
    if (cash < 1) return;
    await Request.post('/addCash', { cash });
    setWallet((wallet) => ({ ...wallet, cash: wallet.cash + cash }));
  }, [cash, products.length]);

  const checkout = async () => {
    const returns = await Request.get('/checkout');
    window.alert(
      `Please collect your items & changes: ${returns.cash} cash & ${returns.coins} coins`
    );
    fetchVendingMachineStates();
  };

  return (
    <div className='container'>
      <h1 className='text-center pt-3'>Vending Machine</h1>
      <div className='row py-3'>
        <div className='col'>
          <div className='border border-2 rounded p-3'>
            <Balance
              title='Balance'
              coins={balance.coins}
              cash={balance.cash}
            />
          </div>
        </div>
        <div className='col'>
          <div className='border border-2 rounded p-3'>
            <Balance title='Wallet' coins={wallet.coins} cash={wallet.cash} />
          </div>
        </div>
        <div className='col'>
          <div className='border border-2 rounded p-3'>
            <InsertWallet
              coins={coins}
              cash={cash}
              addCoins={addCoins}
              addCash={addCash}
              setCoins={setCoins}
              setCash={setCash}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='border border-2 rounded p-3'>
            <Inventory
              products={products}
              fetchVendingMachineStates={fetchVendingMachineStates}
            />
          </div>
        </div>
        <div className='col-3'>
          <div className='border border-2 rounded p-3'>
            <Orders
              orders={orders}
              fetchVendingMachineStates={fetchVendingMachineStates}
            />
          </div>
        </div>
      </div>
      <div className='row pt-3'>
        <div className='col d-flex justify-content-center'>
          <button
            className='btn btn-primary btn-lg'
            disabled={orders.length < 1}
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
