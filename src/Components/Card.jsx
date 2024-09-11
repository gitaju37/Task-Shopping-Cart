import PropTypes from 'prop-types';
import { useContext } from 'react';
import MyContext from './Context/MyContext';

const Card = ( { Product } ) => {
    const { cartProducts,setCartProducts,setCart } = useContext( MyContext );
    
    const addToCart = () => {

        setCartProducts( [ ...cartProducts, Product ] );
        setCart( cart => ( cart || 0 ) + 1 );
    };
    const removeFromCart = () => {
        setCartProducts( cartProducts.filter( c => c.id !== Product.id ) );
        setCart( cart => ( cart || 0 ) - 1 );
    };

    const isInCart = cartProducts.some( c => c.id === Product.id );
 

    return (
        <div className='card m-2' style={{ height: "22rem", border: "2px solid rgb(3, 88, 142)" }}>
            <img src={Product.image} alt="" className='c-img' style={{ height: "50%", width: "50%", alignContent: "center", marginTop: "10px" }} />
            <div className='card-body'>
                <div className='card-content'>
                    <h5 className="card-title">{Product.title}</h5>
                    <p className="card-text">${Product.price}</p>
                    {
                        isInCart ?
                            ( <button className='btn btn-danger' onClick={removeFromCart}>REMOVE FROM CART</button> )
                            :
                            ( <button className='btn btn-success' onClick={addToCart}>ADD TO CART</button> )
                    }
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    Product: PropTypes.shape( {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    } ).isRequired
};

export default Card;
