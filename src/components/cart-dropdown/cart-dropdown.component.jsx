import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.length ? 
                    (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) :
                    <span>Cart is empty</span>
                }
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    );
};

export default CartDropdown;