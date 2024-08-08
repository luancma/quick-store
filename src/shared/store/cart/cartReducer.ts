interface CartItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartStateProps {
  isOpen: boolean;
  items: CartItemProps[];
}

interface CartAction {
  type: string;
  payload?: any;
}

export const initialState: CartStateProps = {
  isOpen: false,
  items: [],
};

export const CART_ACTION_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
  CLEAR_CART: 'CLEAR_CART',
} 


const addItemToCart = (cartItems: CartItemProps[], cartItemToAdd: CartItemProps) => {
  cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToAdd.id) {
      cartItem.quantity += 1;
    }
  })
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}


export const openCartAction = () => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_CART,
  };
}

export const addToCartAction = (item: CartItemProps) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item,
  };
}

export function drawerCartReducer(state: CartStateProps, action: CartAction): CartStateProps {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
      default:
      return state;
  }
}