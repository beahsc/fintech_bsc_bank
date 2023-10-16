import Style from '../CSS/Section3.module.css'
import Cartao from '../Imagens/cartao.png'

function Section3(){
    return(
        <article className={Style.container}>
            <div id={Style.preto}>
        
            <section className={Style.texto}>
                <h3>Abra sua conta na BSC bank e desfrute de uma experiência única, aproveitando todas as nossas vantagens </h3>
            </section>

            <div id={Style.header_2}>
                <nav>
                    <div>
                        <button id={Style.abrir}>Pedir meu cartão</button>
                    </div>
                </nav>
            </div>

            <div id={Style.img}>
                <img src={Cartao} alt='cartao' className={Style.imagem}/>
            </div>

        </div>

        </article>
    )
}

export default Section3