import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NavBar from "../components/Navbar";
import API from '../utils/API';
import '../styles/Checkout.css';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, setValue } = useForm();

  // const history = useHistory();

  const calculateCart = () => { // Calculate total price
    let sum = 0;
    products.map((item) => {
      sum += item.quantity * item.price;
      return sum;
    });

    setTotal(sum);
  };

const getSellers = async () => {
  const data = await API.GetSellers();
  setSellers(data);
  setValue('seller', data[0].id);
};

  const fetchSeller = async () => { 
    getSellers();
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));

    if (cartLocalStorage) { // Filter products with quantity 0
      const filteredArray = cartLocalStorage
        .filter((product) => product.quantity !== 0);

      setProducts(filteredArray);
    }
    calculateCart();
    setLoading(false);
  };

  const removeItem = (item) => { // Remove item from cart
    const filteredArray = products
      .filter((product) => product.id !== item.id);
    setProducts(filteredArray);
    localStorage.setItem('cart', JSON.stringify(filteredArray));

    calculateCart();
  };

  useEffect(() => {
    fetchSeller();
    calculateCart();
  },[products]);

 
  // const closeOrder = async ({ address, number, seller }) => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const saleBody = {
  //     token: user.token,
  //     sale: {
  //       seller_id: seller,
  //       total_price: total,
  //       delivery_address: address,
  //       delivery_number: number,
  //       saleDate: new Date(),
  //       status: 'Pendente',
  //     },
  //     products: products.map(({ id: productId, quantity }) => ({ productId, quantity })),
  //   };

  //   const { data: { id } } = await axios.post('http://localhost:3001/sales', saleBody, { headers: { authorization: user.token } });
  //   history.push(`/customer/orders/${id}`);
  // };

  return (
    <div className='Checkout-body'>
  
      {
        NavBar()
      }
      <h3>
        Finalizar Pedido
      </h3>
      {
        loading ? (
          <div>
            Carregando...
          </div>
        ) : (
          <table className='Order'>
            <thead>
              <tr >
                <th>Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub-total</th>
                <th>Remover Item</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((item, index) => (
                  <tr key={ item.id }>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-item-number-${index}`
                      }
                    >
                      {index + 1}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-name-${index}`
                      }
                    >
                      {item.name}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-quantity-${index}`
                      }
                    >
                      {item.quantity}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-unit-price-${index}`
                      }
                    >
                      {item.price.toFixed(2).replaceAll('.', ',')}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-sub-total-${index}`
                      }
                    >
                      {(item.price * item.quantity).toFixed(2).replaceAll('.', ',')}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                    >
                      <button
                        type="button"
                        onClick={ () => removeItem(item) }
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
      <h2 data-testid="customer_checkout__element-order-total-price">
        {total.toFixed(2).replaceAll('.', ',')}
      </h2>

      <h3>
        Detalhes e Endereço para Entrega
      </h3>
      <form onSubmit={ handleSubmit(closeOrder) }>
        <label htmlFor="sellers">
          <select
            data-testid="customer_checkout__select-seller"
            name="sellers"
            id="sellers"
            { ...register('seller') }
          >
            {
              sellers.map(({ name, id }) => (
                <option key={ id } value={ id }>{name}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="address"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            { ...register('address') }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            type="text"
            id="number"
            placeholder="198"
            { ...register('number') }
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="submit"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}

export default Checkout;
