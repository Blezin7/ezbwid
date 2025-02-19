import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)


const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId)=>{
        setCartItems((c)=>({...c,[itemId]: c[itemId] ? c[itemId] + 1 : 1}))
    }
    
    const removeFromCart = (itemId)=>{
        setCartItems((c)=>({...c,[itemId]:c[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItems){
            console.log(item)
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount
    }

    const  getTotalCartItems = ()=>{
        let totalItem=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    
    const contextValue = {getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider