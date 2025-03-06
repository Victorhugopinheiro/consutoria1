"use client"

import { createContext, ReactNode, useEffect, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import Router from 'next/router'

import { api } from '@/services/apiClient'
import { getCookieClient } from '@/lib/cookieClient'
import { consumers } from 'stream'

interface AuthContextData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>
  logoutUser: () => Promise<void>;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  endereço: string | null;
  subscriptions?: SubscriptionProps | null;
}

interface SubscriptionProps {
  id: string;
  status: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  email: string;
  password: string;
  name: string;
  telefone: string
}




export const AuthContext = createContext({} as AuthContextData)


export function signOut() {
  console.log("ERORR LOGOUT");
  try {
    destroyCookie(null, '@consultoria', { path: '/' })
    Router.push('/login');

  } catch (err) {
    console.log("Error ao sair")
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      })
      console.log(response)

      const { id, name, token, subscriptions, endereço } = response.data;

      setCookie(undefined, '@barber.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mês
        path: '/'
      })

      setUser({
        id,
        name,
        email,
        endereço,
        subscriptions
      })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`


      Router.push('/dashboard')


    } catch (err) {
      console.log("ERRO AO ENTRAR", err)
    }
  }


  async function signUp({ email, name, password, telefone }: SignUpProps) {

    if (!email || !name || !password || !telefone) {
      return console.log("preencha todos os campos")
    }

    const response = await api.post("/users", {
      email,
      name,
      password,
      telefone
    })

    console.log("cadastro feito com sucesso")
  }

  async function logoutUser() {
    try {
      destroyCookie(null, "@consultoria", { path: '/' })
      setUser(null)
    } catch (err) {
      console.log(err)
    }
  }


  


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}