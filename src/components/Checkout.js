import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
export default function Checkout({subtotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))

    }

    return (
        <div>
            
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}

            <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_51N4xvySEKfZj3R2WfYicbEuodd8Wh5eWURrfo0ZmOb56a8rYHzF3ekoiGFsshX4fdRFq0V2buLYsO3ngCYP7TJIf00px04vJGO'
            currency='INR'
            >

                  
                  <button className='btn'>Pay Now</button>

            </StripeCheckout>
            
        </div>
    )
}
