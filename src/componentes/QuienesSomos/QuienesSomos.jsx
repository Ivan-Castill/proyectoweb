import "./QuienesSomos-styles.css";
import React, { useEffect, useState, useRef } from "react";
import Steeve from "/public/gifs/ironman.gif"
import Sebas from "/public/gifs/pandabaile.gif"
import Paul from "/public/gifs/robod.gif"
import Ivan from "/public/gifs/panda.gif"


const QuienesSomos = () => {
    const text =
        "Somos líderes en innovación y personalización, dedicados a crear etiquetas de alta calidad que destacan y agregan valor a cada producto. Nuestro compromiso es ofrecer soluciones únicas y sostenibles, diseñadas para resaltar la identidad de tu marca y satisfacer las necesidades de nuestros clientes.";
    const typingRef = useRef(null); // Referencia al elemento del DOM

    const [backgroundImage, setBackgroundImage] = useState('url("/public/img/fondo1.jpg")'); // State for background image
    const imagenes = [
        'url("/img/seccion_1.jpeg")',
        'url("/img/fondo1.jpg")',
        'url("/img/fondo2.jpg")',
        'url("/img/fondo3.jpg")',
        'url("/img/fondo 4.jpg")',
        'url("/img/fondo5.jpg")',
        'url("/img/fondo6.jpg")',
        'url("/img/fondo7.jpg")',
        'url("/img/fondo8.jpg")'
    ];
    let indiceActual = 0; // Índice de la imagen actual
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setBackgroundImage(imagenes[indiceActual]);
        }, 10); // Espera 10ms antes de aplicar la imagen
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        // Set initial background image on load
        setBackgroundImage(imagenes[indiceActual]);

        // Function to change background every 5 seconds
        const interval = setInterval(() => {
            indiceActual = (indiceActual + 1) % imagenes.length;
            setBackgroundImage(imagenes[indiceActual]);
            console.log("Fondo actualizado:", imagenes[indiceActual]); // Verifica si se está actualizando
        }, 5000); // 5000 ms = 5 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let index = 0; // Índice para recorrer el texto
        let interval;

        const typeText = () => {
            if (index < text.length) {
                typingRef.current.textContent += text.charAt(index); // Añade carácter por carácter
                index++;
            } else {
                clearInterval(interval);
                typingRef.current.style.borderRight = "none";
            }
        };

        interval = setInterval(typeText, 50); // Inicia la animación de escritura

        // Limpieza en caso de que el componente se desmonte
        return () => {
            clearInterval(interval);
            if (typingRef.current) {
                typingRef.current.textContent = "";
            }
        };
    }, []); // Array vacío para ejecutarlo solo al montar el componente

    return (
        
        <div className="PgQuienesSomos">
            <section className="FondoWho" style={{ backgroundImage: backgroundImage }}>
                <h1 className="Titulo">¿Quiénes somos?</h1>
                <p id="typing-text" ref={typingRef} className="typing-text"></p>
            </section>
            <section className="Inicios">
                <br />
                <h1>Nuestos Inicios</h1>
                <div className="alineacion">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"><samp className="fondorecuadro">1995</samp><h2>Fundación</h2></div>
                            <div className="flip-card-back">
                                <p>Iniciamos nuestra travesía con la visión de ser líderes en la creación de etiquetas de ropa de alta calidad. La pasión por la innovación nos impulsó desde el primer día.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"><samp className="fondorecuadro">2005</samp><h2>Expansión nacional</h2></div>
                            <div className="flip-card-back">
                            <p>Aumentamos nuestra presencia en todo el país, llevando nuestras etiquetas personalizadas a más marcas reconocidas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"><samp className="fondorecuadro">2010</samp><h2>Enfoque en sostenibilidad</h2></div>
                            <div className="flip-card-back">
                            <p>Comenzamos a incorporar prácticas ecológicas en nuestra producción, impulsando la sostenibilidad como un pilar fundamental de la empresa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"><samp className="fondorecuadro">2020</samp><h2>Adopción de nuevas tecnologías</h2></div>
                            <div className="flip-card-back">
                            <p>Implementamos las últimas tecnologías en nuestra producción, mejorando la eficiencia y calidad de nuestras etiquetas, adaptándonos a las demandas del mercado actual.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Fundadores">
                <br />
                <br />
                <h1>Fundadores</h1>
                <div className="infFundadores">
                    <div className="FundadoresLeft">
                        <div className="FundadorPresentacion">
                            <img src={Steeve} alt="fotoSteeven" className="fotoFundador" />
                            <div className="NombreFundador"><h2>Steeven</h2></div>
                            <div className="DescripcionFundador"><p>Lidera la parte técnica de la empresa, enfocándose en crear soluciones innovadoras para la gestión y personalización de las etiquetas de ropa.</p></div>
                        </div>
                        <div className="FundadorPresentacion">
                            <img src={Sebas} alt="fotoSebas" className="fotoFundador" />
                            <div className="NombreFundador"><h2>Sebas</h2></div>
                            <div className="DescripcionFundador"><p>Desarrolla plataformas intuitivas que facilitan a los clientes personalizar sus etiquetas de ropa de forma rápida y sencilla.</p></div>
                        </div>
                    </div>
                    <div className="FundadoresRight">
                        <div className="FundadorPresentacion">
                            <img src={Paul} alt="fotoPaul" className="fotoFundador" />
                            <div className="NombreFundador"><h2>Paul</h2></div>
                            <div className="DescripcionFundador"><p>Se encarga de optimizar los sistemas que permiten diseñar y producir etiquetas de ropa de manera eficiente y moderna.</p></div>
                        </div>
                        <div className="FundadorPresentacion">
                            <img src={Ivan} alt="fotoIvan" className="fotoFundador" />
                            <div className="NombreFundador"><h2>Ivan</h2></div>
                            <div className="DescripcionFundador"><p>Mejora la eficiencia de la producción y gestión de etiquetas, asegurando soluciones ágiles y precisas en cada etapa del proceso.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ProyectosRecientes">
            <br />
            <br />
            <h1>Proyectos Recientes</h1>
            <br />
            <br />
            <div className="proyectos-container">
                    {[{
                        titulo: "Etiquetas Ecológicas para GreenWear",
                        cliente: "GreenWear, una marca emergente de ropa sostenible.",
                        desafio: "Crear etiquetas 100% biodegradables y sin impacto ambiental.",
                        solucion: "EtiqTech desarrolló etiquetas hechas de papel semilla y tinta ecológica. Cuando los clientes terminan de usar la prenda, pueden plantar la etiqueta y hacer crecer una planta.",
                        resultados: "Aumento del 35% en la percepción de marca ecológica y reducción del 100% en residuos de etiquetas plásticas.",
                        imagen: "/public/img/ETIQUETAECOLOGICA.jpg"
                    }, {
                        titulo: "Etiquetas NFC para UrbanFit",
                        cliente: "UrbanFit, marca de ropa deportiva.",
                        desafio: "Integrar tecnología en las etiquetas sin afectar el diseño.",
                        solucion: "Se implementaron etiquetas con chips NFC que permiten a los clientes escanearlas con su teléfono para acceder a información exclusiva, como videos de entrenamiento, recomendaciones de cuidado de la prenda y autenticidad del producto.",
                        resultados: "Aumento del 50% en la interacción digital de los clientes con la marca y reducción del 30% en falsificaciones.",
                        imagen: "/public/gifs/etiquetaNFC.gif"
                    }, {
                        titulo: "Etiquetas Térmicas para SnowPeak",
                        cliente: "SnowPeak, marca de ropa para deportes de invierno.",
                        desafio: "Crear etiquetas que ayuden a los clientes a conocer la temperatura ideal de uso.",
                        solucion: "Se diseñaron etiquetas que cambian de color según la temperatura ambiente. En frío extremo, las etiquetas se vuelven azules y muestran recomendaciones para el usuario.",
                        resultados: "Mayor confianza del cliente en la funcionalidad de la ropa y aumento del 20% en ventas de la línea invernal.",
                        imagen: "/public/img/etiquetasTermicas.jpg"
                    }, {
                        titulo: "Etiquetas Personalizadas para The Unique Label",
                        cliente: "The Unique Label, una startup de moda urbana.",
                        desafio: "Permitir que cada cliente tenga una etiqueta única en su prenda.",
                        solucion: "Se desarrolló un sistema de impresión en tiempo real donde cada prenda recibe una etiqueta con un código QR exclusivo que redirige a un mensaje personalizado del diseñador o artista colaborador.",
                        resultados: "Más de 10,000 clientes compartieron su experiencia en redes sociales, aumentando el engagement en un 70%.",
                        imagen: "/public/img/etiquetasPersonal.png"
                    }].map((proyecto, index) => (
                        <div key={index} className="proyecto-card">
                            <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img"/>
                            <h2>{proyecto.titulo}</h2>
                            <p><strong>Cliente:</strong> {proyecto.cliente}</p>
                            <p><strong>Desafío:</strong> {proyecto.desafio}</p>
                            <p><strong>Solución:</strong> {proyecto.solucion}</p>
                            <p><strong>Resultados:</strong> {proyecto.resultados}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default QuienesSomos;

