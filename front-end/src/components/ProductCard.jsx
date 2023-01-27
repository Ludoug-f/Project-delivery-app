import { useContext } from 'react';
import Context from './ProdContext/Context';
import '../styles/ProductCard.css';

function ProductCard() { // Function that renders the products page
  const { products, cardAdd, cardRm, cart,
    cardQuantity } = useContext(Context);
  return (
    <div className="ProductCard-Container">
      {
        products.length ? products.map((product) => (
          <div className="Cards" key={ product.id }>

            {/*  */}
            <p data-testid={ `customer_products__element-card-title-${product.id}` }>
              {product.name}
            </p>
            <p data-testid={ `customer_products__element-card-price-${product.id}` }>
              { /*
              console.log(parseFloat(numero.toFixed(2)).toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
              minimumFractionDigits: 2
              })); */}
              {`R$${Number(product.price).toFixed(2).replace('.', ',')}`}
            </p>

            {/*  */}
            <img
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.urlImage }
              alt="Imagem do Produto"
              srcSet=""
              width={ 100 }
            />

            {/*  */}
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => cardAdd(product.id) }
            >
              +
            </button>

            {/*  */}
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              value={ cart.find((p) => p.id === product.id)
                ? cart.find((p) => p.id === product.id).quantity : '' }
              onChange={ ({ target }) => cardQuantity(product.id, target.value) }
              placeholder="0"
            />

            {/*  */}
            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              onClick={ () => cardRm(product.id) }
            >
              -
            </button>
          </div>

        ))
          : (
            <div>
              <p className="Loading">Carregando...</p>
            </div>
          )
      }
    </div>
  );
}

export default ProductCard;
