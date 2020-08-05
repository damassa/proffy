import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/2249891?s=460&u=38bf09b62f61ece8b93865e4e5faaa3a2c8bca01&v=4" alt="Felipe Leal Damasceno"/>
                <div>
                    <strong>Felipe Leal Damasceno</strong>
                    <span>História</span>
                </div>
            </header>

            <p>
                Entusiasta dos melhores livros de história que existem.
                <br/><br/>
                Apaixonado por surrar bolsocucks intelectualmente e por mudar a vida das pessoas através de experiências e fatos.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;