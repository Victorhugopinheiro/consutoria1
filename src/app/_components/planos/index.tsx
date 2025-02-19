import { Container } from "../container";
import { Grid } from "./_components/grid";
import abs1 from "../../../../public/abs1.webp"
import abs2 from "../../../../public/abs2.webp"
import abs3 from "../../../../public/abs3.webp"

import treino1 from "../../../../public/treino1.jpg"
import treino2 from "../../../../public/treino2.jpg"
import treino3 from "../../../../public/treino3.webp"


export function Planos() {
    return (
        <Container>
            <section className="my-28">


                <article className="text-black my-16w-full ">
                    <h1 className="text-2xl font-bold text-center my-8 font-serif md:text-3xl">Planos</h1>
                    <div className="flex w-full justify-center  ">
                        <Grid imagem={treino1} plano="Consultoria" valor="R$1900" porcentagem="5" />

                    </div>
                </article>
            </section>

        </Container>
    )
}