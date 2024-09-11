import PropTypes from 'prop-types';

const CartFooter = ( { total } ) => {
    return (
        <div className="total-card d-flex flex-column">
            <div className="cart-footer1 d-flex flex-row justify-content-around">
                <h5>SUBTOTAL:</h5>
                <h3>${total.toFixed( 2 )}</h3>
            </div>
            <div className="cart-footer2 d-flex flex-row justify-content-around">
                <h5>SHIPPING:</h5>
                <h5>FREE</h5>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-around">
                <h2>TOTAL</h2>
                <h3>${total.toFixed( 2 )}</h3>
            </div>
        </div>
    );
};

CartFooter.propTypes = {
    total: PropTypes.number.isRequired
};

export default CartFooter;
