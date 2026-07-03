"use client";

import { useContext } from "react";
// import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast, ToastPosition } from "react-toastify";

const AddToCart = ({ book }: any) => {
  //   const { cartData, setCartData } = useContext(StoreContext);

  const handleCart = (e: any, reason: any) => {
    e.preventDefault();
    const newData = { ...book, type: reason };
    toast.success(`Added ${book.title} to the Cart`, {
      autoClose: 1000,
      position: "top-right" as ToastPosition,
    });
    // const found = cartData.find((item) => {
    //   return item.id === book.id;
    // });
    // if (!found) {
    //   setCartData([...cartData, newData]);
    //   toast.success(`Added ${book.title} to the Cart`, {
    //     autoClose: 1000,
    //     position: "top-right" as ToastPosition,
    //   });
    // } else {
    //   toast.error(`OOPS!! You have added ${book.title} already to the Cart`, {
    //     position: "top-right" as ToastPosition,
    //   });
    // }
  };

  return (
    <div className="flex justify-around mt-5 border-t-2 p-1">
      <button
        className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={(event) => handleCart(event, "Buy")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Buy
      </button>
      <button
        className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={(event) => handleCart(event, "Rent")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Rent
      </button>
    </div>
  );
};

export default AddToCart;
