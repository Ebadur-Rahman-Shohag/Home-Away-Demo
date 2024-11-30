import { create } from "zustand";

// Define the state's shape
type PropertyState = {
  propertyId: string;
  price: number;
  discount: number;
  amount: number;
};

// Create the store
export const useProperty = create<PropertyState>(() => {
  return {
    propertyId: "",
    price: 0,
    amount: 0,
    discount: 0,
  };
});
