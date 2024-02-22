import './App.css';

import { useState } from 'react'
import { data } from '../src/data/productList'
import Modal from './modal/modal';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({});
  const [notification, setNotification] = useState(false);

  const showModal = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  return (
    <div className="App">
        <ul className='product-list'>
          {data.map((item) => {
            return(
              <li key={item.ProductID} className='product'>
                <div className='product-data'>
                  <div className='product-image'></div>
                  <div className='product-title'>
                    <h4>{item.Name}</h4>
                    <div className='product-price'>
                      <span className='current-price'>${item.Price}</span>
                      <span className='retail-price'>${item.RetailPrice}</span>
                    </div>
                  </div>
                </div>
                <button className='detail-button' onClick={() => {
                  setOpenModal(!openModal);
                  setProduct(item);
                }}>
                  View Details
                </button>
              </li>
            )
          })}
        </ul>

        {openModal && product && <Modal product={product} setNotification={showModal} setOpenModal={() => setOpenModal(!openModal)}/>}

        {notification && <div className='notification'>Product added successfully!</div>}
    </div>
  );
}

export default App;
