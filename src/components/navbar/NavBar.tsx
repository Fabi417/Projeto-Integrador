import React from "react";
import './NavBar.css';
import axios from "axios";

function NavBar(){
    return(
        <div>

            <ul>
                <img src="not-found.jpg"></img>
                <li><a href='http://localhost:3000/'>Home</a></li>
                <li><a href='http://localhost:3000/'>Produtos</a></li>
                <li><a href='http://localhost:3000/'>Cadastro de Usuários</a></li>
                <li><a href='http://localhost:3000/'>Cadastro de Vendas</a></li>
                <a href='http://localhost:3000/'><button type="button">Login</button></a>
            </ul>

       
        </div>


    );
}

export default NavBar;
