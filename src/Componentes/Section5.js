import Style from '../CSS/Section5.module.css'
import Moeda from '../Imagens/moedas.PNG'
import Icon1 from '../Imagens/icon-instagram.png'
import Icon2 from '../Imagens/icon-facebook.png'
import Icon3 from '../Imagens/icon-linkedin.png'
import Icon4 from '../Imagens/icon-spotify.png'

import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Section5(){

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <article className={Style.container}>
            <div id={Style.preto}>
        
            <section className={Style.texto3}>
                <h1>Conheça os nossos <span className={Style.h11}>canais digitais</span></h1>
                <h2 className={Style.h12}><br/> Acompanhe nossas novidades e conteúdos exclusivos </h2>

                <div id={Style.icon1} data-aos="zoom-in-up"data-aos-duration="1500">
                <img src={Icon1} alt='icon-instagram' className={Style.imagem5}/>
            </div>

            <div id={Style.icon2} data-aos="zoom-in-up"data-aos-duration="1500">
                <img src={Icon2} alt='icon-facebook' className={Style.imagem5}/>
            </div>

            <div id={Style.icon3} data-aos="zoom-in-up"data-aos-duration="1500">
                <img src={Icon3} alt='icon-linkedin' className={Style.imagem5}/>
            </div>

            <div id={Style.icon4} data-aos="zoom-in-up"data-aos-duration="1500">
                <img src={Icon4} alt='icon-spotify' className={Style.imagem5}/>
            </div>

            </section>

            <div id={Style.moeda}data-aos="fade-down-right"data-aos-duration="1500">
            <img src={Moeda} alt='moedas' className={Style.imagem4}/>
            </div>

           

        </div>

        </article>
    )
}

export default Section5