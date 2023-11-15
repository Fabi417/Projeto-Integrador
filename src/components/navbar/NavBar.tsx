import React from "react";
import './NavBar.css';
import axios from "axios";
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div>
            <ul>
                <li>
                    Sobre
                </li>
                <li>
                    Carta da Semana
                </li>  
                <li>
                    Carta 3 tiragem
                </li>
                <li>
                    Carta da Semana
                </li>
                <li>
                    Cadastro de Usuários
                </li>
               
            </ul>
        </div>


    );
}

export default NavBar;
