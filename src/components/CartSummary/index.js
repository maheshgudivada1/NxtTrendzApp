import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (acc, eachCartItem) => acc + eachCartItem.price * eachCartItem.quantity,
        0,
      )
      return (
        <div className="cart-summary">
          <h1 className="order-total">
            Order Total: <span className="total-value">Rs {total}/-</span>
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
