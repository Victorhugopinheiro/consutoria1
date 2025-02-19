import { Container } from "@/app/_components/container"
import Image from "next/image"
import treino from "../../../../public/Treinoheader2.0.jpg"
import { Check } from "lucide-react"



export default async function Detail({ params }: { params: Promise<{ planos: string }> }) {

    const { planos } = await params


    return (
        <section className="relative">
            <Container>
                <div className="bg-white flex flex-col lg:flex-row gap-4 p-3 justify-center ">
                    <div className="relative w-5/5 h-[350px] md:h-[600px] lg:w-4/5   ]">
                        <Image className="object-fill   " quality={100} fill priority src={treino} alt="foto do produto" />
                    </div>

                    <div className=" flex flex-col sticky top-0 gap-3 justify-between border border-gray-500 rounded-md p-3">
                        <div>
                            <div className="flex justify-center">
                                <span className="text-gray-500 mb-3 text-center">Referencia no mercado</span>
                            </div>
                            <h1 className="text-3xl mb-3 text-center font-bold">Consultoria</h1>
                            <div className=" flex flex-col items-center">
                                <div className="flex flex-col items-center w-full gap-1">
                                    <div>
                                        <span className="text-sm px-6 text-gray-600 opacity-80 line-through">R$100</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold">R$100</span>
                                            <div>
                                                <span className="text-sm text-green-500">5%OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm text-black">Em 12x de R$11,99</span>

                                </div>


                                <div className="mt-6 border w-2/5 flex flex-col p-1 border-gray-500 rounded-md">
                                    <form>
                                        <select>
                                            <option>Mensal</option>
                                            <option>Trimestral</option>
                                            <option>Semestral</option>
                                        </select>
                                    </form>
                                </div>
                            </div>



                            <div className="flex justify-center">
                                <div className="py-3 cursor-pointer px-3 w-3/5 flex justify-center mt-6 rounded-md bg-green-500 hover:scale-105 duration-300 font-bold  md:w-3/5 lg:w-full">
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="  lg:w-44 mt-3 text-center">
                                <p className="text-gray-800">Consultoria preparada</p>
                            </div>

                        </div>

                        <div className="flex justify-start gap-6 lg:justify-between">
                            <span className="flex gap-1">Segurança <Check color="green" /></span>
                            <span className="">Devolução </span>
                        </div>

                    </div>




                </div>




            </Container>
        </section>
    )
}