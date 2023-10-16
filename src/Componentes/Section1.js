import Style from '../CSS/Section1.module.css'
import Mulher from '../Imagens/mulher2.jpg'

function Section1(){
    return(
        <article className={Style.container}>
        
            <section className={Style.texto}>
                <h1>AQui nós temos valores </h1>
                <p>Assuma o controle do seu dinheiro</p>
            </section>

            <div id={Style.header_2}>
                <nav>
                    <div>
                        <button id={Style.abrir}>Abrir minha conta</button>
                    </div>
                </nav>
            </div>

            <div id={Style.img}>
                <img src={Mulher} alt='mulher2' className={Style.imagem}/>
            </div>

        </article>
    )
}

export default Section1