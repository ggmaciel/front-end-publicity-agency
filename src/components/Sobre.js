import React from "react";
import { Link } from "react-router-dom";

export default function Sobre() {
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
            <div className="sobre-title">
                <h4 className="sobre-title-text">
                    Aqui na <span className="home-page-davia">Davia</span>&
                    <span className="home-page-brigade">Brigade</span> nosso
                    objetivo é ser um serviço completo de marketing e
                    publicidade para conectar pessoas ao conteúdo de forma
                    eficaz e inovadora. Se sua empresa busca resultado, entre em
                    contato conosco para trabalharmos juntos no que sua empresa
                    busca.{" "}
                </h4>
            </div>
            {/*-----------------Offer section*/}
            <div className="sobre-offer-container">
                <div className="sobre-offer">
                    <h1>O que oferecemos</h1>
                    <div className="sobre-offer-cols">
                        <div className="sobre-design">
                            <h5 className="home-page-brigade">Design</h5>
                            <h5>Branding</h5>
                            <h5>Design Websites</h5>
                            <h5>Gráficos</h5>
                        </div>
                        <div className="sobre-conteudo">
                            <h5 className="home-page-brigade">Conteúdo</h5>
                            <h5>Audiovisual</h5>
                            <h5>Revista</h5>
                            <h5>Social Media</h5>
                            <h5>Blog</h5>
                        </div>
                        <div className="sobre-tecnologia">
                            <h5 className="home-page-brigade">Tecnologia</h5>
                            <h5>Websites</h5>
                            <h5>Comércio Online</h5>
                            <h5>Apps</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-contato-container">
                <div className="home-page-contato">
                    <h2>Contato</h2>
                    <p>Rua da aurora - 000</p>
                    <p>50050-907</p>
                    <p>(81) 99999-9999</p>
                    <p>daviabrigade@email.com</p>
                </div>
                <form
                    className="home-page-form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input placeholder="Nome" />
                    <input placeholder="Email" />
                    <textarea />
                    <button className="home-page-form-btn">Enviar</button>
                </form>
            </div>
            <div className="social-icons">
                <a href="https://twitter.com/">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120C93.1371 120 120 93.1371 120 60Z"
                            fill="#FF304F"
                            className="social-icon"
                        />
                        <path
                            d="M74.364 28.7881C65.851 29.0039 59.022 35.9717 59.022 44.5381C59.022 45.7713 59.1543 46.9769 59.424 48.1321C46.3282 47.4742 34.7177 41.2015 26.946 31.6681C25.5896 33.9942 24.81 36.7037 24.81 39.5941C24.81 45.0601 27.5959 49.8792 31.824 52.7041C29.2423 52.6215 26.8089 51.9103 24.684 50.7301C24.6828 50.7956 24.684 50.8671 24.684 50.9341C24.684 58.5671 30.1171 64.9283 37.326 66.3781C36.004 66.7367 34.6114 66.9301 33.174 66.9301C32.1575 66.9301 31.1719 66.8337 30.21 66.6481C32.2165 72.9076 38.028 77.4659 44.922 77.5921C39.5294 81.8186 32.7455 84.3361 25.362 84.3361C24.0914 84.3361 22.8332 84.2667 21.6 84.1201C28.5751 88.593 36.8527 91.2001 45.75 91.2001C74.7337 91.2001 90.582 67.1904 90.582 46.3681C90.582 45.6853 90.5696 44.9988 90.54 44.3221C93.6175 42.1052 96.2891 39.3283 98.4 36.1681C95.5766 37.4232 92.5402 38.2733 89.352 38.6521C92.6072 36.7034 95.1049 33.6165 96.282 29.9341C93.2372 31.741 89.8644 33.0543 86.274 33.7621C83.4007 30.7002 79.3041 28.7881 74.772 28.7881C74.636 28.7881 74.4991 28.7847 74.364 28.7881Z"
                            fill="white"
                        />
                    </svg>
                </a>
                <a href="https://www.instagram.com/">
                    <svg
                        width="52"
                        height="52"
                        viewBox="0 0 121 122"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M59.8871 72.3317C65.8444 72.3317 70.6737 67.5024 70.6737 61.5451C70.6737 55.5879 65.8444 50.7585 59.8871 50.7585C53.9299 50.7585 49.1006 55.5879 49.1006 61.5451C49.1006 67.5024 53.9299 72.3317 59.8871 72.3317Z"
                            fill="#FF304F"
                            className="social-icon"
                        />
                        <path
                            d="M73.3703 35.0691H46.4039C42.4815 35.0691 39.0494 36.2948 36.843 38.5012C34.6367 40.7075 33.4109 44.1396 33.4109 48.062V75.0285C33.4109 78.9509 34.6367 82.383 37.0882 84.8345C39.5397 87.0409 42.7266 88.2666 46.649 88.2666H73.3703C77.2927 88.2666 80.7248 87.0409 82.9312 84.8345C85.3827 82.6282 86.6084 79.1961 86.6084 75.2737V48.3072C86.6084 44.3848 85.3827 41.1978 83.1763 38.7463C80.7248 36.2948 77.5379 35.0691 73.3703 35.0691ZM59.8871 78.2155C50.5714 78.2155 43.2169 70.6158 43.2169 61.5453C43.2169 52.2296 50.8166 44.8751 59.8871 44.8751C68.9577 44.8751 76.8025 52.2296 76.8025 61.5453C76.8025 70.861 69.2028 78.2155 59.8871 78.2155ZM77.2928 48.062C75.0864 48.062 73.3703 46.346 73.3703 44.1396C73.3703 41.9333 75.0864 40.2172 77.2928 40.2172C79.4991 40.2172 81.2151 41.9333 81.2151 44.1396C81.2151 46.346 79.4991 48.062 77.2928 48.062Z"
                            fill="#FF304F"
                            className="social-icon"
                        />
                        <path
                            d="M60.3774 0.748047C27.0371 0.748047 0.0705719 27.7145 0.0705719 61.0549C0.0705719 94.3953 27.0371 121.362 60.3774 121.362C93.7178 121.362 120.684 94.3953 120.684 61.0549C120.929 27.7145 93.7178 0.748047 60.3774 0.748047ZM92.4921 75.2736C92.4921 80.9121 90.5309 85.8151 87.0988 89.2472C83.6667 92.6793 78.7637 94.3953 73.3704 94.3953H46.6491C41.2558 94.3953 36.3528 92.6793 32.9207 89.2472C29.2434 85.8151 27.5274 80.9121 27.5274 75.2736V48.3071C27.5274 37.0302 35.127 29.1854 46.6491 29.1854H73.6155C79.254 29.1854 83.9118 31.1466 87.3439 34.5787C90.776 38.0108 92.4921 42.6687 92.4921 48.3071V75.2736Z"
                            fill="#FF304F"
                            className="social-icon"
                        />
                    </svg>
                </a>
                <a href="https://www.facebook.com/">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120C93.1371 120 120 93.1371 120 60Z"
                            fill="#FF304F"
                            className="social-icon"
                        />
                        <path
                            d="M69.525 14.3999C53.2568 14.3999 47.8875 21.864 47.8875 34.6649V44.7974H37.2V60.0074H47.8875V105.6H67.5975V60.0074H80.9925L82.7925 44.7974H67.5975V35.7599C67.5975 31.675 68.494 29.6024 74.835 29.6024H82.7925V14.3999H69.525Z"
                            fill="white"
                        />
                    </svg>
                </a>
            </div>
            <h5 className="copyright">© 2020 by Gustavo Maciel</h5>
        </div>
    );
}
