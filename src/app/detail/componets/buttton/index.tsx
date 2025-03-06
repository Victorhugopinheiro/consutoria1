"use client"

import { getCookieClient } from "@/lib/cookieClient"
import { getStripeJs } from "../../../../services/stripe-js"

import { api } from "@/services/apiClient"

export function Button() {

    const buyItem = async () => {



        try {
            let token = await getCookieClient();

            const response = await api.post("/subscribe", {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })





        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="flex justify-center">
            <div className="py-3 cursor-pointer px-3 w-3/5 flex justify-center mt-6 rounded-md bg-green-500 hover:scale-105 duration-300 font-bold  md:w-3/5 lg:w-full">
                <button onClick={buyItem}>Comprar</button>
            </div>
        </div>
    )
}