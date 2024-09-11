import PropTypes from "prop-types";
import "./Cart.css";


const ViewCart = ( { product, decreaseQuantity, increaseQuantity,deleteFromCart } ) => {
    const { id, title, category, price, image,quantity} = product;

    return (
        <div className="viewcart-container">
            <div className="cart-container m-3">
                <div className="card-header">
                    <div className="item-desc p-2">
                        <img
                            src={image}
                            alt={title}
                            style={{ height: "10rem", objectFit: "cover" }}
                        />
                        <div className="item-details ms-1">
                            <h4>{title}</h4>
                            <h5>{category}</h5>
                        </div>
                    </div>
                    <div className="item-price">
                        <div className="btn-box">
                            <button
                                type="button"
                                className="cart-btn"
                                onClick={() => decreaseQuantity( id )}
                            >
                                <b>-</b>
                            </button>
                            <div style={{ margin: "7px 5px" }}>
                                <b>{quantity}</b>
                            </div>
                            <button
                                type="button"
                                className="cart-btn"
                                onClick={() => increaseQuantity( id )}
                            >
                                <b>+</b>
                            </button>
                        </div>
                        <div>
                            <p>Price: ${price * quantity}</p>
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{ width: "150px" }}
                            onClick={() => deleteFromCart( id )}>
                            REMOVE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ViewCart.propTypes = {
    product: PropTypes.object.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    quantity: PropTypes.number,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    deleteFromCart:PropTypes.func
};

export default ViewCart;
