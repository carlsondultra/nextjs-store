"use client"
import useCart from "../(store)/store"

export default function ProductPage(props) {
    const {searchParams} = props
    const {price_id} = props
    const product = useCart(state => state.product)
    console.log(product)
    console.log(searchParams)

    if(!product?.name) { //upon reloading product page, send user to homepage
        window.location.href = '/'
    }

    return (
        <div>
            THIS IS THE PRODUCT PAGE!
        </div>
    )
}