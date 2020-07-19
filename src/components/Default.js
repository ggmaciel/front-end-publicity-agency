import React from "react";
import { Link } from "react-router-dom";

export default function Default() {
    return (
        <div>
            <div className="sobre-navbar">
                <Link to="/">
                    <img
                        src="/images/logo-agencia.svg"
                        className="home-page-logo"
                        alt="logo da empresa com quatro quadrados com dois vermelhos e dois amarelos e as letras D e B ocupando um cada"
                    />
                </Link>
            </div>
            <div>
                <div className="default">
                    <h1 className="home-page-davia">ERROR</h1>
                    <h1>URL</h1>
                    <h1 className="home-page-brigade">NOT FOUND</h1>
                </div>
            </div>
        </div>
    );
}
