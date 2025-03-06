import Image from "next/image";
import { Container } from "../container";
import gym from "../../../../public/transferir.jpg"
import alimento from "../../../../public/dieta.jpeg"
import useEmblaCarousel from "embla-carousel-react"
import { Flex, Text } from "@chakra-ui/react";



export function About() {



    return (
        <Container>


            <div className="flex p-2 flex-col items-center relative my-10 rounded-md md:flex-row">


                <div className="relative flex  flex-[0_0_calc(100%/2)] p-2">
                    <article className="max-w-xl flex justify-center items-center flex-col">
                        <h1 className="text-2xl text-center font-bold  mb-2">Quem somos?</h1>

                        <p className=" max-w-96 lg:max-w-xl leading-7 text-lg ">Na consutoria Seya acreditamos que a saúde e o bem-estar são a base de uma vida plena e feliz. Nossa missão é transformar seus objetivos em resultados concretos, oferecendo um serviço personalizado de treino e nutrição.

                            Com uma equipe de especialistas altamente qualificados, criamos planos de treino adaptados às suas necessidades e metas individuais, combinados com orientações nutricionais que potencializam seus resultados. Estamos aqui para guiá-lo em cada passo do caminho, motivando e apoiando você na conquista de uma vida mais saudável e equilibrada.

                            Junte-se a nós e descubra como é possível atingir o máximo do seu potencial com a nossa consultoria de treino e nutrição. Venha transformar sua vida e alcançar seus objetivos de saúde e bem-estar de maneira eficaz e sustentável..</p>
                    </article>
                </div>


                <div className=" flex w-10/12 justify-center flex-[0_0_calc(100%/2)] p-2">



                    <div className="relative w-full h-[400px] ">
                        <Image className="object-cover rounded-md" fill quality={100} priority src={alimento} alt="Foto de um alimento" />
                    </div>

                </div>



            </div>

        </Container>
    )
}