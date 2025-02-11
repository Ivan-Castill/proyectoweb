import React from 'react'
import { Link } from 'react-router-dom'
import './Galeria-styles.css'

function Galeria() {
  return (
    <section className="gal_section">
        
            <div className="img_info">
                <h2>ETIQUETAS PERSONALIZADAS</h2>
                <p>Nuestras etiquetas personalizadas están diseñadas para destacar su marca con estilo y durabilidad. Ofrecemos una variedad de materiales y acabados para adaptarnos a sus necesidades, asegurando que cada detalle desde el color hasta el tejido refleje la identidad de su producto.</p>
                <button><Link to='/etiquetas-personalizadas'>VER MAS</Link></button>
            </div>
            <div className="galeria">
                <div className="box"><img src='./img/Barrido2.jpg' alt=""/></div>
                <div className="box"><img src='./img/Barrido3.jpg' alt=""/></div>
                <div className="box"><img src='./img/EtiquetaFlor.jpg' alt=""/></div>
                <div className="box"><img src='./img/EtMarcas2.jpg' alt=""/></div>
                <div className="box"><img src='./img/EtAnimales.jpg' alt=""/></div>
                <div className="box"><img src='./img/EtMarcas.jpg' alt=""/></div>
                <div className="box"><img src='./img/EtFutbool.jpg' alt=""/></div>
            </div>
    </section>
  )
}

export default Galeria