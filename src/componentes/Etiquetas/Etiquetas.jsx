import React from 'react'
import "./Etiquetas-styles.css"
function Etiquetas() {
  return (
    <section className='etiSec'>
        <div className='cards'>
            <div className='card'>
                <div className='tafeta'>
                    <h3>TAFETA</h3>
                </div>
                <p>La tafeta es un tipo de tejido sencillos y fino. En  el contexto de las etiquetas tejidas, las etiquetas de tafeta son ligeras y duraderas, y más economicas; se usa más amenudo para la informacion de tallas, instrucciones de cuidado para la ropa de cama.</p>
            </div>
            <div className='card'>
                <div className='damasco'>
                    <h3>DAMASCO</h3>
                </div>
                <p>Las etiquetas de  damasco son de alta definicion y ofrecen una textura mas suave que las tafeta. Permiten un mayor nivel de detalle en los diseños, lo que las hace idelaes  para logotipos complejos o pequeños textos. Se pueden diseñar con texturas, relieves y ligamentos.</p>
            </div>
            <div className='card'>
                <div className='satin'>
                    <h3>SATIN</h3>
                </div>
                <p>Las etiquetas de satín tienen un brillo distintivo y una textura muy suave , lo que las hace sentir lujosas al tacto. Suelen utilizarse para prendas de alta gama, lencería y camisetas y ternos para caballero, debido a su sauvidad y apariencia elegante.</p>
            </div>
        </div>
        <button><a href="">COMO COMPRAR</a></button>
    </section>
  )
}

export default Etiquetas