"use client"

import Image, { StaticImageData } from "next/image";
import halter from "../../../../../../public/halter.jpg"
import abs from "../../../../../../public/Pessoas treinando.jpg"
import Link from "next/link";
import { useContext } from "react";
import { OrderContext } from "@/providers/order";



interface PlanosProps {
    plano: string;
    valor: string;
    imagem: string | StaticImageData
    porcentagem: string
}




export function Grid({ plano, valor, imagem, porcentagem }: PlanosProps) {

    const { setItems } = useContext(OrderContext)

    function itemsBuy() {
        setItems({ plano, valor, imagem })
    }

    return (
        <section id="planos" className="w-full px-2 md:w-3/4 hover:scale-105 duration-500 ">
            <div className="w-full h-full rounded-md  p-2 bg-white text-black">
                <div className="relative w-full h-[300px] mx-auto">
                    <Image className="object-cover rounded-md" src={imagem} alt="Imagem serviço" quality={100} fill priority />
                </div>

                <div className="flex items-center flex-col gap-4   border-white p-2 border " >
                    <div>
                        <h1 className="text-center font-serif text-xl font-bold md:text-3xl">{plano}</h1>
                    </div>


                    <div className="flex flex-col">
                        <span className="text-sm text-gray-600 opacity-80 line-through">{valor}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold md:text-2xl">{valor}</span>
                            <span className="text-sm text-green-500">{porcentagem}%OFF</span>
                        </div>
                        <span className="text-sm text-black">Em 12x de R$11,99</span>
                    </div>

                    <Link href={`/detail/${plano}`}>
                        <div className="bg-slate-900 rounded-md w-full px-16 py-4 hover:scale-105 duration-300 md:px-24">
                            <button onClick={itemsBuy} className="text-center font-serif text-white font-bold">
                                Comprar
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}