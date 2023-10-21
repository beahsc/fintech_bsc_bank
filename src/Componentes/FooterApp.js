import Style from '../CSS/FooterApp.module.css'

import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function FooterApp() {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <footer className={Style.container}>
            <div className={Style.icones}>
                
            <div className={Style.c1}>
                <h4>Precisa de Ajuda?</h4> 
                    
                    <h5>Central de atendimento </h5>
                    <h5>Perguntas frequentes</h5>
                    <h5>Ouvidoria</h5>
                    <p2>meajuda@bscbank.com.br <br/>Atendimento 24h</p2>
            </div>

            <div className={Style.c2}>
                <h4>Sobre</h4> 
                    
                    <h5>Renegociação de dívidas</h5>
                    <h5>Taxas e tarifas</h5>
                    <h5>Educação financeira</h5>
                    <h5>Trabalhe conosco</h5>
                   

            </div>

            <div className={Style.c3}>
                <h4>Informações</h4> 
                    
                    <h5>Política de privacidade</h5>
                    <h5>Segurança</h5>
                    <h5>Sustentabilidade</h5>
                    <h5>Acessibilidade</h5>
                   
            </div>

        
            </div>

        </footer>



    )
}

export default FooterApp