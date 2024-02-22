import '../App.css';

function Modal({ product, setNotification, setOpenModal }) {
  return (
    <div className="modal">
      <button className='close' onClick={setOpenModal}>X</button>
      <div className='product-detail'>
        <div className='detail-data'>
          <div className='product-image'></div>
          <div className='product-title'>
            <h4>{product.Name}</h4>
            <span className='product-description'>{product.Description}</span>
          </div>
        </div>

        <div className='price-button'>
          <div className='product-price'>
              <span className='current-price'>${product.Price}</span>
              <span className='retail-price'>${product.RetailPrice}</span>
          </div>

          <button className='detail-button' onClick={setNotification}>Add to Cart</button>
        </div>
      </div>

      <div className='brand-color'>
        <span><b>Brand:</b> {product.Brand}</span>
        <span><b>Color:</b> {product.Color}</span>
      </div>
    </div>
  );
}

export default Modal;
