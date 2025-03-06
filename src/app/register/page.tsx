"use client"
import Head from "next/head";
import { Container } from "../_components/container";

import Link from "next/link";
import { api } from "@/services/apiClient";
import { cookies } from "next/headers";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/user/AuthContext";





export default function Login() {
    const { signIn, signUp  } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [telefone, setTelefone] = useState("")



    async function handleLogin(){
        await signUp({
          email,
          password,
          name, 
          telefone
        })
      }

    return (


        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <section className="flex bg-slate-900 text-white justify-center items-center h-svh  ">
                <div className="flex justify-center items-center flex-col gap-3 w-full ">
                    <h1 className="text-2xl font-bold md:text-3xl">Login</h1>
                    <form className="flex flex-col w-full gap-3 justify-center items-center">
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-1/2 lg:w-1/3 ">
                        </input>

                        <input placeholder="Senha" value={password}
                            onChange={(e) => setPassword(e.target.value)} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-1/2 lg:w-1/3 ">
                        </input>

                        <input placeholder="name" value={name}
                            onChange={(e) => setName(e.target.value)} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-1/2 lg:w-1/3 ">
                        </input>

                        <input placeholder="Telefone" value={telefone}
                            onChange={(e) => setTelefone(e.target.value)} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-1/2 lg:w-1/3 ">
                        </input>

                        <button onClick={handleLogin} type="submit" className="h-12 w-10/12 font-bold mb-2 py-1 px-2 decoration-none bg-slate-500 rounded-md 
                    hover:scale-105 duration-300  md:w-1/2 lg:w-1/3">Entrar</button>
                    </form>


                    <p className="text-slate-300">Já possui conta? <Link className="font-bold text-white" href={"/login"}>Cadastre-se</Link></p>


                </div>
            </section>
        </Container>
    )
}