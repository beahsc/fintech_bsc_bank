import style from '../CSS/HeaderApp.module.css';
import Logo from '../Imagens/iconelogo.png'
import Logo1 from '../Imagens/logoescrita.png'

function HeaderApp() {
    return (
        <header>
          <img src={Logo} alt="Logo" className={style.logo}/>
            <img src={Logo1} alt="Logo1" className={style.logo1}/>
            <div id={style.header_1}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Produtos e Serviços</li>
                        <li>Fale Conosco</li>
                    </ul>
                </nav>
            </div>
            <div id={style.header_2}>
                <nav>
                    <div>
                        <button id={style.entrar}>Entrar</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default HeaderApp