import Style from '../CSS/Section4.module.css'

import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section4(){

    useEffect(() => {
        AOS.init();
      }, [])


    return(
        <article className={Style.container}>
            <div id={Style.azul}>
            <div id={Style.preto} data-aos="fade-up-right"data-aos-duration="1500">
        
        <div className={Style.texto2}data-aos="zoom-in"data-aos-duration="2000">
                <h1>Investir é simples aqui </h1>
                <h2>Diga-nos onde você deseja estar financeiramente e nós o ajudaremos a chegar lá.</h2>
            </div>

            <div id={Style.header_2}>
                <nav>
                    <div>
                        <button id={Style.abrir}data-aos="zoom-in"data-aos-duration="2000">Saiba mais</button>
                    </div>
                </nav>
            </div>

        </div>
        </div>

        </article>
    )
}

export default Section4