import { Container } from "@/app/_components/container"
import Image from "next/image"
import treino from "../../../../public/Treinoheader2.0.jpg"



export default async function Detail({ params }: { params: Promise<{ planos: string }> }) {

    const { planos } = await params


    return (
        <section className="relative">
            <Container>
                <div className="bg-white flex gap-4 p-3 justify-center ">
                    <div className="relative w-2/5 h-[600px]   ]">
                        <Image className="object-fill   " quality={100} fill priority src={treino} alt="foto do produto" />
                    </div>

                    <div className=" border border-gray-500 rounded-md p-3">
                        <span className="text-gray-500 mb-3">Referencia no mercado</span>
                        <h1 className="text-3xl">Nome do produto</h1>
                        <div className="flex gap-6">
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-600 opacity-80 line-through">100</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-2xl font-bold">100</span>
                                    <span className="text-sm text-green-500">100% OFF</span>
                                </div>
                                <span className="text-sm text-black">Em 12x de R$11,99</span>

                            </div>


                            <div className="mt-6 border p-1 border-gray-500 rounded-md">
                                <form>
                                    <select>
                                        <option>Mensal</option>
                                        <option>Trimestral</option>
                                        <option>Semestral</option>
                                    </select>
                                </form>
                            </div>
                        </div>


                        <div className="flex justify-center w-full bg-red">
                            <div className="py-3 px-3 w-full flex justify-center mt-6 rounded-md bg-green-500">
                                <button>Comprar</button>
                            </div>
                        </div>

                    </div>


                </div>
            </Container>
        </section>
    )
}