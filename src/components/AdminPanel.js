import { useDispatch } from "react-redux";
import { addProduct } from "../redux/inventory/actions";

const product = {
  productName: '',
  category: '',
  imageUrl: '',
  price: 0,
  inventory: 0,
};

export default function AdminPanel() {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        <div className="space-y-2">
          <label for="name">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            onChange={(e) => product.productName = e.target.value}
          />
        </div>

        <div className="space-y-2">
          <label for="category">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            onChange={(e) => product.category = e.target.value}
          />
        </div>

        <div className="space-y-2">
          <label for="image">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            onChange={(e) => product.imageUrl = e.target.value}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="price">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              onChange={(e) => product.price = e.target.value}
            />
          </div>

          <div className="space-y-2">
            <label for="quantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              onChange={(e) => product.inventory = e.target.value}
            />
          </div>
        </div>

        <button type="submit" id="lws-inputSubmit" className="submit" onClick={(e) => submitHandler(e)}>
          Add Product
        </button>
      </form>
    </div>
  );
}
