import { toast } from "react-toastify";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border p-2 mb-2">
              <span>{item.icon} {item.name}</span>
              <span>${item.price}</span>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                  toast.error("Removed from cart");
                }}
                className="btn btn-sm btn-error"
              >Remove</button>
            </div>
          ))}
                 <button
            onClick={() => {
              clearCart();
              toast.info("Checkout complete");
            }}
            className="btn btn-success w-full mt-3"
          >Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};
export default Cart;