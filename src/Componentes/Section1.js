import Style from '../CSS/Section1.module.css'
import Mulher from '../Imagens/mulher2.jpg'

import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Section1(){

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <article className={Style.container}>
        
            <section className={Style.texto} data-aos="zoom-in-down"data-aos-duration="1500">
                <h1>Aqui nós temos a solução para tornar a gestão das suas finanças mais simples </h1>
                <p>Assuma o controle do seu dinheiro</p>
            </section>

            <div id={Style.header_2} data-aos="zoom-in-down"data-aos-duration="1500">
                <nav>
                    <div>
                        <button id={Style.abrir}>Abrir minha conta</button>
                    </div>
                </nav>
            </div>

            <div id={Style.img}>
                <img src={Mulher} alt='mulher2' className={Style.imagem}data-aos="fade-down-left"data-aos-duration="600"/>
            </div>

        </article>
    )
}

export default Section1