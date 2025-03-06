
import Head from "next/head";
import { Container } from "../_components/container";
import { Input } from "./_component";
import Link from "next/link";
import { api } from "@/services/apiClient";
import { cookies } from "next/headers";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/user/AuthContext";
import Router from 'next/router'
import { redirect } from "next/navigation"





export default function Login() {
  



    async function handleLogin(formData:FormData){
        "use server"

      const email = formData.get("email")
      const password = formData.get("password")


      
    if(email === "" || password === ""){
        console.log("PREENCHA TODOS OS CAMPOS")
        return
      }

      try{

        const data = await api.post("/session",{
            email:email,
            password:password
          })


          if(!data.data.token){
            return
          }

          
          const expressTime = 60 * 60 * 24 * 30 * 1000

          const cookieStore = await cookies();


          cookieStore.set("@consultoria", data.data.token, {
            maxAge: expressTime,
            path: "/",
            httpOnly:false,
            
      
          })

          

      }catch(err){
        console.log(err)
      }
      redirect("/dashboard")


      }

    return (


        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <section className="flex bg-slate-900 text-white justify-center items-center h-svh  ">
                <div className="flex justify-center items-center flex-col gap-3 w-full ">
                    <h1 className="text-2xl font-bold md:text-3xl">Login</h1>
                    <form action={handleLogin} className="flex flex-col w-full gap-3 justify-center items-center">
                        <Input name="email" placeholder="Digite seu email"/>
                        <Input name="password" placeholder="Digite sua senha"/>
                        <button  type="submit" className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none bg-slate-500 rounded-md 
                    hover:scale-105 duration-300  md:w-1/2 lg:w-1/3">Entrar</button>
                    </form>


                    <p className="text-slate-300">Ainda não possui conta? <Link className="font-bold text-white" href={"/register"}>Cadastre-se</Link></p>


                </div>
            </section>
        </Container>
    )
}