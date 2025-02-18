import Image from "next/image";
import { Container } from "../container";
import treinoHeader from "../../../../public/Treinoheader2.0.jpg"

export function Header() {
    return (
        <section className="w-full relative ">

            <div className="  w-auto h-[400px]">
                <Image className="object-cover" fill quality={100} priority src={treinoHeader} alt="Imagem header" />
                <div className="absolute inset-0 opacity-60 bg-black "></div>
            </div>


            <Container>
                <div className="w-full gap-12 flex justify-center top-1 mx-auto max-w-7xl text-white  absolute   ">
                    <button id="planos">Planos</button>
                    <p>Sobre</p>
                    <p>Depoimentos</p>
                    <p>Contato</p>
                </div>
                <div className="top-1 flex justify-center w-full text-white">





                </div>
            </Container>
        </section>
    )
}