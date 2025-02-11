import React from 'react';
import "./Sellos-styles.css"

// Datos de los sellos
const sellos = [
  { src: "/img/sello1.png", title: "Sello Manchester United" },
  { src: "/img/sello2.png", title: "Sello Personalizado" },
  { src: "/img/sello3.png", title: "Sello Personalizado" },
  { src: "/img/sello4.png", title: "Sello Personalizado" },
  { src: "/img/sello5.png", title: "Sello Puma" },
  { src: "/img/sello6.png", title: "Sello Personalizado" },
  { src: "/img/sello7.png", title: "Sello Boca Jr" },
  { src: "/img/sello8.png", title: "Sello Personalizado" },
  { src: "/img/sello9.png", title: "Sello Ecuador" },
  { src: "/img/sello10.png", title: "Sello Brasil" },
  { src: "/img/sello11.png", title: "Sello España" },
  { src: "/img/sello12.png", title: "Sello Pais" },
  { src: "/img/sello13.png", title: "Sello Emelec" },
  { src: "/img/sello14.png", title: "Sello Personalizado" },
  { src: "/img/sello15.png", title: "Sello Bsc" },
  { src: "/img/sello16.png", title: "Sello Liga de Quito" },
  { src: "/img/sello17.png", title: "Sello Equipo" },
  { src: "/img/sello18.png", title: "Sello Paris Saint-Germain" },
  { src: "/img/sello19.png", title: "Sello Independiente" },
  { src: "/img/sello20.png", title: "Sello Paris" },
  { src: "/img/sello21.png", title: "Sello Pais" },
  { src: "/img/sello22.png", title: "Sello Real Madrid" },
  { src: "/img/sello23.png", title: "Sello Personalizado" },
  { src: "/img/sello24.png", title: "Sellos Industria Textil Logos" },
  { src: "/img/sello25.png", title: "Personalizacion de sellos" },
  { src: "/img/sello26.png", title: "Logos y Marcas de Equipos" },
  { src: "/img/sello27.png", title: "Sello Personalizado" },
  { src: "/img/sello28.png", title: "Sello Rick and Morty" },
  { src: "/img/sello29.png", title: "Sello Tom and Jerry" },
  { src: "/img/sello30.png", title: "Sello Barcelona de España" },
  { src: "/img/sello31.png", title: "Sello Lacosta" },
  { src: "/img/sello32.png", title: "Sello Stitch" },
  { src: "/img/sello33.png", title: "Sello Personalizado" },
];

const SellosTextiles = () => {
  const openModal = (index) => {
    alert(`Abriendo modal para el sello número ${index + 1}`);
  };

  return (
    <div >
      <h1 className="title_txt">SELLOS TEXTILES PERSONALIZADOS</h1>
      <section className="container">
        {sellos.map((sello, index) => (
          <div className="container_hijo" key={index}>
            <img
              src={sello.src}
              alt={sello.title}
              onClick={() => openModal(index)}
            />
            <h1 className="tittle_img">{sello.title}</h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SellosTextiles;
