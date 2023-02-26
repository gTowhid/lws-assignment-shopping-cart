import {
  ADDPRODUCT,
  ADDTOCART,
  INCREASECART,
  DECREASECART,
  DELETECARTPRODUCT,
} from './actionTypes';

const initialState = [
  /* {
    id: 0,
    productName: 'Spring and Summershoes',
    category: 'Mens shoes',
    imageUrl: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
    price: 400,
    inventory: 10,
    cartQuantity: 0,
  },
  {
    id: 1,
    productName: 'Formal shoes',
    category: 'Mens shoes',
    imageUrl: 'https://i.dummyjson.com/data/products/58/thumbnail.jpg',
    price: 800,
    inventory: 20,
    cartQuantity: 0,
  }, */
];

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const InventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: nextProductId(state),
          ...action.payload,
          cartQuantity: 0,
        },
      ];

    case ADDTOCART:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          cartQuantity: product.cartQuantity + 1,
          inventory: product.inventory - 1,
        };
      });

    case INCREASECART:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          cartQuantity: product.cartQuantity + 1,
          inventory: product.inventory - 1,
        };
      });

    case DECREASECART:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          cartQuantity: product.cartQuantity - 1,
          inventory: product.inventory + 1,
        };
      });

    case DELETECARTPRODUCT:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          cartQuantity: 0,
          inventory: product.inventory + product.cartQuantity,
        };
      });

    default:
      return state;
  }
};

export default InventoryReducer;
