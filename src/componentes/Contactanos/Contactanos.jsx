import React from 'react'
import './Contactanos-styles.css'
function Contactanos() {
  return (
        <section className='contactanos_main'>
            <div className="con_izq">
                <h2>CONTACTANOS</h2>
                <form className="contactForm">
                <label for="nombre">Nombre:</label>
                    <input type="text" className="nombre" placeholder="Arturo Borja" required/>
                    <label for="email">Correo:</label>
                    <input type="email" className="email" name="email" placeholder="ejemplo@ejemplo.com" required/>
                    <label for="mensaje">Mensaje:</label>
                    <textarea className="txt_mensaje" placeholder="Escribe tu mensaje..." required></textarea>
                    <button type="button" className="enviarBtn">Enviar</button>
                </form>
            </div>
            <div className="con_der">
                <p>Estamos aquí para ayudarlo a darle vida a su marca. Si tiene preguntas o desea más información sobre nuestras etiquetas personalizadas, no dude en contactarnos. Nuestro equipo estará encantado de asesorarlo y ofrecerle soluciones que se adapten a sus necesidades.</p>
                <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.0148062975672!2d-78.4719502!3d-0.11321719999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f811f4c97c9%3A0xac3fd6698576c803!2sAMERICALABEL%20CIA%20LTDA!5e1!3m2!1ses-419!2sec!4v1731739009966!5m2!1ses-419!2sec"></iframe>
                </div>
            </div>
        </section>
  )
}

export default Contactanos