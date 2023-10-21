import Style from '../CSS/Section3.module.css'
import Cartao from '../Imagens/cartao.png'

import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Section3(){

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <article className={Style.container}>
            <div id={Style.preto}>
        
            <section className={Style.texto}data-aos="zoom-out-left" data-aos-duration="1000">
                <h3>Abra sua conta na BSC bank e desfrute de uma experiência única, aproveitando todas as nossas vantagens </h3>
            </section>

            <div id={Style.header_2}data-aos="zoom-out-left" data-aos-duration="1000">
                <nav>
                    <div>
                        <button id={Style.abrir}>Pedir meu cartão</button>
                    </div>
                </nav>
            </div>

            <div id={Style.img}data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src={Cartao} alt='cartao' className={Style.imagem}/>
            </div>

        </div>

        </article>
    )
}

export default Section3