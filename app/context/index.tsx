import { createContext } from "react";
interface MyContextType {
  cartData: any;
  setCartData: any;
}
export const StoreContext = createContext<MyContextType | null>(null);
