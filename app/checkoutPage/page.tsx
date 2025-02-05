"use client";
import Common from '../../components/common'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Food } from "../../types/food";

import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import {CgChevronRight} from "react-icons/cg"
import { getCartItems } from "../File/actions";
import Swal from "sweetalert2";
import { client } from '../../sanity/lib/client';



const Checkoutpage= () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      city: "",
    });
  
    const [formErrors, setFormErrors] = useState({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      address: false,
      zipcode: false,
      city: false,
    });
  
    useEffect(() => {
      const items = getCartItems();
      console.log('items: ', items);
      setCartItems(items || []); // Ensure cartItems is always an array
      const appliedDiscount = localStorage.getItem("appliedDiscount");
      if (appliedDiscount) {
        setDiscount(Number(appliedDiscount));
      }
  }, []);
  console.log('cartItems: ', cartItems);
  
    const subTotal = cartItems?.length > 0
      ? cartItems.reduce(
          (total, item:any) => total + item.price * item.quantity,
          0
        )
      : 0;
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.id]: e.target.value,
      });
    };
  
    const validateForm = () => {
      const errors = {
        firstName: !formValues.firstName,
        lastName: !formValues.lastName,
        email: !formValues.email,
        phone: !formValues.phone,
        address: !formValues.address,
        zipcode: !formValues.zipcode,
        city: !formValues.city,
      };
      setFormErrors(errors);
      return Object.values(errors).every((error) => !error);
    };
  
    const handlePlaceOrder = async () => {
      Swal.fire({
        title:'Proceeding Your Order....',
        text:'Please wait a moment.',
        icon:'info',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Proceed'
  
      }).then((result)=>{
        if(result.isConfirmed){
          if (validateForm()) {
            localStorage.removeItem("appliedDiscount");
            Swal.fire(
              "Success!", 
            "Your order has been successfully processed.", 
            "success"
            )
          }else{
              Swal.fire(
                "Error",
                "Please Fill in all the feilds before Proceeding",
                "error"
              );
          }
        }
      });      

      const orderData ={
        _type :'order',
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phone: formValues.phone,
        address: formValues.address,
        zipcode: formValues.zipcode,
        city: formValues.city,

        cartItems : cartItems.map((item) => ({
           _type :"reference",
           _ref :item._id,
        })),
        total: subTotal,
        discount : discount,
        orderDate :new Date ().toISOString
      };

      try{
        await client.create (orderData)
        localStorage.removeItem("appliedDiscount")
      }
      catch(error){
      console.error("error creating Order", error)
      }
      

    };
  return (
    <div className='bg-white w-full md:max-w-[1920px] mb-16'>
          <Common title='Checkout Page' subtitle='Checkout' />
          <div className="min-h-screen bg-white">
        <div className="mt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex item-center gap-2 py-4">
          <Link href={"/carts"}
          className="text-[#666666] hover:text-black transition text-sm">Carts</Link>
          <CgChevronRight/>
          <span>Checkout</span>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-col-1 lg:grid-col-2 gap-8">
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item :any) => (
                <div key={item._id} className="flex item-center gap-4 py-3 border-b">
                  <div className="w-16  h-16 rounded overflow-hidden">
                    {item.image && typeof item.image === "object" ? (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Image
                        src="/fallback-image.png"
                        alt="fallback image"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>${item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm font-medium">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
                <p className="text-sm">
                    SubTotal :<span>${subTotal}</span>
                </p>
                <p className="text-sm">
                    Discount :<span>${discount}</span>
                </p>
                <p className="text-lg font-semibold">
                    Total :{subTotal.toFixed(2)}
                </p>
            </div>
          </div>

          <div className=" border rounded-lg p-6 space-y-6">
           <h2 className="font-bold text-2xl ">Billing Information</h2>
           <div>
           <label className="block text-sm font-medium text-gray-700 mt-5">First Name :</label>
                <input
                    type="text"
                   id= "firstName"
                   placeholder="Enter Your Name"
                   value ={formValues.firstName}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.firstName && (
                        <p className="text-sm text-red-600">
                            First Name is required
                        </p>
                    )}
           </div>
           <div>
           <label className="block text-sm font-medium text-gray-700">Last Name :</label>
                <input
                    type="text"
                   id= "lastName"
                   placeholder="Enter Your Name"
                   value ={formValues.lastName}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.lastName && (
                        <p className="text-sm text-red-600">
                            Last Name is required
                        </p>
                    )}
           </div>
           <div>
           <label className="block text-sm font-medium text-gray-700">Email :</label>
                <input
                    type="text"
                   id= "email"
                   placeholder="Enter Your Email"
                   value ={formValues.email}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.email && (
                        <p className="text-sm text-red-600">
                            Email is required
                        </p>
                    )}
           </div>
           <div>
           <label className="block text-sm font-medium text-gray-700">Phone :</label>
                <input
                    type="text"
                   id= "phone"
                   placeholder="Enter Your Phone Number"
                   value ={formValues.phone}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.phone && (
                        <p className="text-sm text-red-600">
                            Phone Number is required
                        </p>
                    )}
           </div>
           <div>
           <label className="block text-sm font-medium text-gray-700">Address :</label>
                <input
                    type="text"
                   id= "address"
                   placeholder="Enter Your Address"
                   value ={formValues.address}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.address && (
                        <p className="text-sm text-red-600">
                            Address is required
                        </p>
                    )}
           </div>
           <div>
           <label className="block text-sm font-medium text-gray-700">Zip Code :</label>
                <input
                    type="text"
                   id= "zipcode"
                   placeholder="Enter Your Address"
                   value ={formValues.zipcode}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.zipcode && (
                        <p className="text-sm text-red-600">
                            Zip Code is required
                        </p>
                    )}
           </div>
           <div>
           <label className="block text-sm font-medium text-gray-700">City :</label>
                <input
                    type="text"
                   id= "city"
                   placeholder="Enter Your city"
                   value ={formValues.city}
                   onChange={handleInputChange}
                   className="border my-2 rounded-sm w-[900px] h-[50px] ml-15"
                    />
                    {formErrors.city && (
                        <p className="text-sm text-red-600">
                            City is required
                        </p>
                    )}
           </div>
           <button className="mt-7 w-[550px] h-[58px] bg-[#FF9f0D] text-white py-2 rounded-sm ml-56 mb-6"
           onClick={handlePlaceOrder}>
      Place an order 
    </button>
          </div>


        </div>
      </div>
      </div>
    </div>
      
      
          </div>
  )
}  
export default Checkoutpage