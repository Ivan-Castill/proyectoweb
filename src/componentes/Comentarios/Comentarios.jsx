import React from 'react'
import './Comentarios-styles.css'

function Comentarios() {
  return (
    <section className="comentarios_main">
        <h1>DEJA TU COMENTARIO</h1>
        <div className="form_comentario">
            <img src="./img/user.png" alt=""/>
            <textarea className="dejar_com" placeholder="Deja un comentario..."></textarea>
        </div>
        <div className="comentarios">
            <div className="comentario">
                <div className="info_user">
                    <img src="./img/user.png" alt=""/>
                    <div className="name_con">
                        <h4>Nadia Martinez</h4>
                        <label for="">Hace un mes</label>
                    </div>
                </div>
                    <p>Necesitaba etiquetas personalizadas para una colección de edición limitada, y no puedo estar más feliz con el resultado. El equipo fue muy atento y escucharon cada detalle que quería incluir. Las etiquetas quedaron justo como las imaginé, con una gran atención a los colores y al tipo de tela. ¡Gracias por la dedicación!</p>
                    <div className="social_stats">
                        <img src="./img/socialLike.png" alt=""/>
                        <label for="">0</label>
                    </div>
            </div>
            <div className="comentario">
                <div className="info_user">
                    <img src="./img/user.png" alt=""/>
                    <div className="name_con">
                        <h4>Nadia Martinez</h4>
                        <label for="">Hace 3 dias</label>
                    </div>
                    </div>
                    <p>Estoy muy contento con las etiquetas que encargamos para nuestra marca de ropa. La calidad del material es excelente, y la impresión de los logos es precisa y duradera. Además, el pedido llegó en el tiempo estimado, incluso para la gran cantidad que solicitamos. Definitivamente volveremos a trabajar con esta empresa</p>
                    <div className="social_stats">
                        <img src="./img/socialLike.png" alt=""/>
                        <label for="">0</label>
                    </div>
            </div>
            <div className="comentario">
                <div className="info_user">
                    <img src="./img/user.png" alt=""/>
                    <div className="name_con">
                        <h4>Nadia Martinez</h4>
                        <label for="">Hace un mes</label>
                    </div>
                    </div>
                    <p>Pedí etiquetas en masa para una línea de uniformes escolares y la empresa fue muy profesional. La calidad es muy buena y resistente, perfecta para el uso diario que tendrán las prendas. Además, los precios son muy competitivos y el servicio al cliente fue excelente durante todo el proceso. Recomendado al 100%</p>
                    <div className="social_stats">
                        <img src="./img/socialLike.png" alt=""/>
                        <label for="">0</label>
                    </div>
            </div>
        </div>
</section>
  )
}

export default Comentarios