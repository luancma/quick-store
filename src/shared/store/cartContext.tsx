import { createContext, useContext, useReducer } from "react";
import { CartStateProps, drawerCartReducer, initialState } from "./cart/cartReducer";

interface CartContextProps {
  cartState: CartStateProps;
  dispatch: React.Dispatch<any>;
}

const cartDrawerContext = createContext<CartContextProps | undefined>(undefined);


export const DrawerCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(drawerCartReducer, initialState);
  const stateValue = { cartState, dispatch }
  return (
    <cartDrawerContext.Provider value={stateValue}>
      {children}
    </cartDrawerContext.Provider>
  );
}

export const useCartDrawer = () => {
  const context = useContext(cartDrawerContext);
  if (context === undefined) {
    throw new Error('useCartDrawer must be used within a CartDrawerProvider');
  }
  return context;
}