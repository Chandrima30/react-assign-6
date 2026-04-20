import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">{product.icon} {product.name}</h2>
        <span className={`badge ${product.tagType}`}>{product.tag}</span>
        <p>{product.description}</p>
        <p className="font-bold">${product.price} / {product.period}</p>
        <ul>
          {product.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
        <button onClick={handleAdd} className="btn btn-primary mt-2">Buy Now</button>
      </div>
    </div>
  );
};
export default ProductCard;