
import React from 'react'
import { Food } from '../../types/food'

export const AddToCart = (food:Food) => {
  const cart: Food[] = JSON.parse(localStorage.getItem('carts')||'[]')
  const existingProductIndex = cart.findIndex(item => item._id === food._id)

  if(existingProductIndex > -1){
    cart[existingProductIndex].available += 1
  }
  else{
    cart.push({
        ...food, available:1
    })
  }
localStorage.setItem('carts',JSON.stringify(cart))
}

export const removeFromCart =(foodId:string)=>{
    let cart : Food[] = JSON.parse(localStorage.getItem('carts')||'[]')
    cart = cart.filter(item => item._id !==foodId )
    localStorage.setItem('carts' ,JSON.stringify(cart))
}

export const updateCartQuantity =(foodId :string, quantity:number)=>{
const cart: Food[] = JSON.parse(localStorage.getItem('carts')||'[]')
const ProductIndex = cart.findIndex(item => item._id === foodId)
if(ProductIndex >-1){
    cart[ProductIndex].available = quantity
}
}

export const getCartItems =(): Food[]=>{
    return JSON.parse(localStorage.getItem('carts')as any)
}