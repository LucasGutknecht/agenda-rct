import React from "react";

class Menu extends React.Component{
    render(){
        return(
            <div className="border-b border-green-100">
                <ul className="flex md:flex-row">
                    <li className="m-5 text-green-900 hover:text-green-400">Contatos</li>
                    <li className="m-5 text-green-900 hover:text-green-400">Cadastro</li>
                    <li className="m-5 text-green-900 hover:text-green-400">Sobre</li>
                </ul>
            </div>
        )
    }
}

export default Menu;