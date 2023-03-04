import React from "react";
import Tarjeta from "./tarjeta";


import image1 from "../assets/nanda.png";

const Tarjetita = [
  {
    id: 1,
    titulo: "Nanda",
    image: image1,
    url: "https://docs.google.com/presentation/d/1cHlok0KAt6zpQvbgnh4lamgWRknXsUex/edit?usp=sharing&ouid=117724870943887881713&rtpof=true&sd=true",
    text:
      'NANDA es una organización que desarrolla y mantiene un estándar de diagnósticos de enfermería para ayudar a los profesionales de la salud a identificar y tratar problemas de salud en los pacientes.',
  },
  {
    id: 2,
    titulo: "NIC",
    image: image1,
    url: "https://docs.google.com/presentation/d/1M8GONlYMFirw_qo--3Lie161AGwdA27F/edit?usp=sharing&ouid=117724870943887881713&rtpof=true&sd=true",
    text:'El NIC es un sistema de clasificación y descripción de intervenciones de enfermería utilizado para ayudar a los profesionales de la salud a tratar problemas de salud de los pacientes.'
  },
  {
    id: 3,
    titulo: "NOC",
    image: image1,
    url: "https://docs.google.com/presentation/d/1UxpzpWeOgH0Tzz6sT_yuJZamtf_IT0_Q/edit?usp=share_link&ouid=117724870943887881713&rtpof=true&sd=true",
    text:'NOC es un sistema estandarizado que describe los resultados de salud esperados de las intervenciones de enfermería para medir el progreso del paciente y evaluar el éxito de las intervenciones.'
  },
  {
    id: 4,
    titulo: "NOC",
    image: image1,
    url: "https://docs.google.com/presentation/d/1UxpzpWeOgH0Tzz6sT_yuJZamtf_IT0_Q/edit?usp=share_link&ouid=117724870943887881713&rtpof=true&sd=true",
    text:'NOC es un sistema estandarizado que describe los resultados de salud esperados de las intervenciones de enfermería para medir el progreso del paciente y evaluar el éxito de las intervenciones.'
  },


  
];

function Tarjetas() {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Tarjetita.map(({ titulo, image, url, id, text }) => (
          <div className="col" key={id}>
            <div className="card tarjeta">
              <a href={url ? url:"#!"} target="_blank">
              <img src={image} className="card-img-top" alt="..." />
              </a>
              <div className="card-body tarjeta-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text tarjeta-text">
                  {text
                    ? text
                    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                </p>
                <a
                  href={url ? url : "#!"}
                  target="_blank"
                  className="btn btn-outline-secondary border-0"
                  rel="noreferrer"
                >
                Ir a {titulo}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tarjetas;
