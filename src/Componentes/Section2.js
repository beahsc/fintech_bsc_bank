import Style from '../CSS/Section2.module.css'
import Options from '../Imagens/credito.png'
import Options2 from '../Imagens/emprestimo.png'
import Options3 from '../Imagens/taxa.png'
import Options4 from '../Imagens/especial.png'

function Section2(){
    return(
        <article className={Style.container}>
           

            <div id={Style.op}>
                <img src={Options} alt='credito' className={Style.imagem}/>
                <p className={Style.p1}>Cartão de crédito com Cashback</p>
            </div>

            <div id={Style.op}>
                <img src={Options2} alt='emprestimo' className={Style.imagem}/>
                <p className={Style.p1}>Empréstimos e Financiamentos </p>
            </div>

            <div id={Style.op}>
                <img src={Options3} alt='taxa' className={Style.imagem}/>
                <p className={Style.p1}>As melhores taxas</p>
            </div>

            <div id={Style.op}>
                <img src={Options4} alt='especial' className={Style.imagem}/>
                <p className={Style.p1}>Benefícios especiais</p>
            </div>


        </article>
    )
}

export default Section2