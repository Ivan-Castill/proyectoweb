import React from 'react'
import './Footer-styles.css'

function Footer() {
  return (
    <footer>
        <div className="footer-principal">
            <p className="contactanos-footer">¡Contáctanos a través de nuestras redes sociales!</p>

            <div className="social-links">
                <a href="https://web.whatsapp.com/" target="_blank">
                    <img src="./img/whatsapp.png" alt="Whatsapp"/>
                </a>
                <a href="https://facebook.com" target="_blank">
                    <img src="./img/facebook.PNG" alt="Facebook"/>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="./img/instagram.PNG" alt="Instagram"/>
                </a>
            </div>
            <p>@american_label</p>
            <div className="copyright">
                <p>&copy; 2024 AmericanLabel. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer