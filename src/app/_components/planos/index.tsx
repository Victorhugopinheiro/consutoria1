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


                <article className="text-black my-16">
                    <h1 className="text-3xl font-bold text-center my-8 font-serif">Nossos Planos</h1>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Grid imagem={treino1} plano="Consultoria" valor="R$1900" />
                        <Grid imagem={treino2} plano="Treino" valor="R$2800" />
                        <Grid imagem={treino3} plano="Consultoria e Treino" valor="R$3800" />
                    </div>
                </article>
            </section>

        </Container>
    )
}