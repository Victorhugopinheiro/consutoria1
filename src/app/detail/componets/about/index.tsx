
import Image from "next/image"
import frutas from "../../../../../public/frutas2.webp"

export function AboutProduto() {

    return (
        <section className="">

            <div className="">

                <div className="relative text-white flex 
                flex-col w-5/5 h-[1000px] md:h-[800px] lg:w-4/5 my-28  bg-white rounded-md p-3   ]">

                    <div className="relative w-full h-[1000px] md:h-[800px] lg:h-[800px]">
                        <Image className="object-cover" fill quality={100} priority={true} src={frutas} alt="imagem Frutas" />
                        <div className="absolute inset-0 opacity-80 bg-black ">

                        </div>
                    </div>


                    <div className="absolute w-full pt-10 flex flex-col justify-center items-center ">
                        <h1 className="text-3xl text-center font-bold mb-5">Detalhes</h1>


                        <p className="border-t-2 mb-6 py-2 w-10/12 border-slate-400 "><strong>Quem somos?</strong> Uma equipe formada e certificada para extrair o seu máximo potêncial </p>

                        <p className="border-t-2 mb-6 py-2 border-slate-400 w-10/12"><strong>Como será o acompanhamento?</strong> Atendimento pessoal e online de treino e dieta. </p>

                        <p className="border-t-2 border-b-2 mb-6 py-2 w-10/12  border-slate-400"><strong>Porque escolher a nossa consultoria? </strong>Somos profissionais preparados para mudar a sua auto estima e sua saúde, estamos no mercado a +10 anos</p>



                        <h2 className="text-3xl font-bold text-center mb-2 ">Nossa história</h2>
                        <p className=" w-full  px-10 leading-7 text-lg lg:w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam sint veritatis itaque, harum quos autem officiis quia dignissimos quasi necessitatibus eveniet dicta optio distinctio molestiae qui alias ea repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut, eum porro consequuntur fugit repellendus nemo, aliquam sed aut obcaecati cum. Hic, natus quam magnam cum perferendis nam sit neque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aut? Incidunt optio, nam cum quo tenetur quos magni laborum delectus, quis fugit quisquam tempora dolore neque debitis culpa. Temporibus, rem!</p>

                    </div>
                </div>

            </div>
        </section>

    )
}