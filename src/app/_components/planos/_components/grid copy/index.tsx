import Image, { StaticImageData } from "next/image";
import halter from "../../../../../../public/halter.jpg"
import abs from "../../../../../../public/Pessoas treinando.jpg"
import Link from "next/link";



interface PlanosProps {
    plano: string;
    valor: string;
    imagem:string | StaticImageData
}

export function Grid({ plano, valor, imagem }: PlanosProps) {
    return (
        <section id="planos" className="w-full px-2  md:w-full ">
            <div className="w-full h-full rounded-md  p-2 bg-black text-black">
                <div className="relative w-full h-[300px] mx-auto">
                    <Image className="object-contain" src={imagem} alt="Imagem serviço" quality={100} fill priority />
                </div>

                <div className="flex items-center flex-col gap-8 bg-[#ece5cd]  border-white p-2 border " >
                    <h1 className="text-center font-serif text-2xl font-bold">{plano}</h1>


                    <div>
                        <span className="text-2xl font-bold">{valor}</span>
                    </div>

                    <Link href={"/"}>
                        <div className="bg-slate-900 rounded-md px-16 py-4 hover:scale-105 duration-300">
                            <button className="text-center font-serif text-white">
                                Comprar
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}