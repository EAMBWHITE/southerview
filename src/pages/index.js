import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../css/style.css";
// markup
const IndexPage = () => {
  return (
    <div className="container font">
      <div className="row">
        <div className="col-md-12 ps-0 pe-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#quienes">
                <StaticImage
                  src="../images/logoSWA.png"
                  alt="Southern View Associates"
                  className="logoMenu StaticImage-fluid"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#quienes"
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#quienes">
                      Quiénes somos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#hacemos">
                      ¿Qué hacemos?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link contactenos" href="#contactanos">
                      Contáctenos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div id="quienes" className="row align-items-center mt-4">
        <div className="col-md-6 cajaBanner">
          <div className="textoBanner">
            <p>
              Crea la mejor <strong>Estrategia Financiera</strong> con nosotros
            </p>
            <a href="#quienes">
              <div className="cajaQS"> ¿Quiénes somos? </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 imgBanner">
          <div className="text-end">
            <StaticImage
              src="../images/imgBannerHome.jpg"
              alt="Banner Principal"
              className="StaticImage-fluid"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
        </div>
      </div>
      <div id="hacemos" className="row bloqueQH">
        <div className="col-md-12">
          <h2>¿Qué Hacemos?</h2>
          <div className="bordeTit">&nbsp;</div>
          <p>
            Brindamos opciones de financiamiento e inversión a empresas de todo
            tipo, naturaleza e industria que mediante estrategias financieras,
            comerciales, fiscales o implementación de procesos puedan mejorar su
            eficiencia.
          </p>
        </div>
        <div className="row jqMargin">
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico1.png"
                alt="costos reducidos"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>
                Empresas donde los costos pueden reducirse y incluyendo más
                eficiencia
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico2.png"
                alt="activos duros"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>
                Empresas con activos duros que pueden usarse como garantía para
                una deuda futura
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico3.png"
                alt="fuertes flujos de efectivo"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>
                Empresas con poca o ninguna deuda y fuertes flujos de efectivo
              </p>
            </div>
          </div>
        </div>
        <div className="row Margin jqMargin">
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico4.png"
                alt="acciones infravaloradas"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>Empresas cuyas acciones está infravaloradas</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico5.png"
                alt="mercado probado"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>Empresas en un mercado probado, maduro y con altos márgenes</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico6.png"
                alt="buena gestión"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>Empresas con buena gestión</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center Margin jqMargin">
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico7.png"
                alt="oportunidades de salida"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>Empresas que tienen oportunidades de salida</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="caja">
              <StaticImage
                src="../images/QH_ico8.png"
                alt="activos que pueden venderse"
                placeholder="blurred"
                layout="fullWidth"
              />
              <p>Empresas que tienen activos que pueden venderse</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contactanos" className="row bloqueContacto">
        <div className="col-sm-12 col-md-5">
          <div className="contacto">
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
                aria-label="default input example"
              />
              <br></br>
              <input
                className="form-control"
                type="text"
                placeholder="Correo"
                aria-label="default input example"
              />
              <br></br>
              <input
                className="form-control"
                type="text"
                placeholder="Asunto"
                aria-label="default input example"
              />
              <br></br>
              <div className="btnEnviar">
                <button type="button" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
