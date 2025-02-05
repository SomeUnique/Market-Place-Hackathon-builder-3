"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { urlFor } from "../../sanity/lib/image";
import Common from "../../components/common";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const getItem = () => {
      const storedCarts = localStorage.getItem("carts");

      if (storedCarts) {
        const parsedCarts = JSON.parse(storedCarts);
        setCartItems(parsedCarts);
      }
    };

    getItem();
  }, []);

  // Update Local Storage
  const updateLocalStorage = (updatedCart: any[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  // Handle Remove Item
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((item) => item._id !== id);
        updateLocalStorage(updatedCart);

        Swal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  };

  // Handle Quantity Change
  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
    );

    updateLocalStorage(updatedCart);
  };

  const handleIncrement = (id: string) => {
    const item = cartItems.find((item) => item._id === id);
    if (item) handleQuantityChange(id, (item.quantity || 1) + 1);
  };

  const handleDecrement = (id: string) => {
    const item = cartItems.find((item) => item._id === id);
    if (item) handleQuantityChange(id, Math.max(item.quantity - 1, 0)); // Ensures it stays at 0
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 0), 0);
  };

  const router = useRouter();
  const handleProceed = async () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before proceeding.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!", 
          "Your order has been successfully processed.", 
          "success"
        );
        // await localStorage.setItem("checkout",JSON.stringify(cartItems));
        // localStorage.removeItem("carts");
        // setCartItems([]);
        router.push("/checkoutPage")

      }
    });
  };

  return (
    <div>
      <Common title="Shopping Cart" subtitle="Cart" />
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-4xl mb-10 font-bold font-sans">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-lg flex flex-col justify-between">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt="image"
                  width={500}
                  height={500}
                />
              )}
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity || 0}</p>

              <div className="flex items-center mt-4 gap-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" onClick={() => handleDecrement(item._id)}>
                  -
                </button>
                <span>{item.quantity || 0}</span>
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" onClick={() => handleIncrement(item._id)}>
                  +
                </button>
              </div>

              <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600" onClick={() => handleRemove(item._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 my-16">Your cart is empty.</p>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mt-20">Total: ${calculateTotal()}</h2>
          <button className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-700 mb-16 " onClick={handleProceed}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
