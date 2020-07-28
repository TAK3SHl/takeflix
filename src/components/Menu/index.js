import React from 'react'
import Logo from '../../assets/img/takeflix.png'
import './Menu.css'

import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Takeflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu