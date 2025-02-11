import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImagenUser from '/public/gifs/login.gif'; // Esto es tu imagen de usuario
import appFirebase from './credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const navigate = useNavigate();

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const constraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, constraseña);
                alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            } catch (error) {
                alert("Asegúrate que la contraseña tenga más de 8 caracteres.");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, constraseña);
                alert("¡Bienvenido! Has iniciado sesión correctamente.");
                navigate('/cruedetiquetas'); // Redirigir tras inicio de sesión exitoso
            } catch (error) {
                alert("El correo o la contraseña son incorrectos.");
            }
        }
    };

    return (
        <div
            className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
            style={{
                backgroundImage: 'url(/public/gifs/fondo.gif)', // Cambiar aquí con la ruta de tu gif
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="row justify-content-center text-white">
                <div className="col-md-6 col-lg-4 bg-secondary p-4 rounded shadow">
                    <div className="text-center mb-4">
                        <img src={ImagenUser} alt="Login" className="img-fluid" />
                    </div>
                    <h2 className="text-center mb-4">{registrando ? "Crea una cuenta" : "Inicia sesión"}</h2>
                    <form onSubmit={functAutenticacion}>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Ingresar Email"
                                id="email"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Ingresar Contraseña"
                                id="password"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">
                                {registrando ? "Registrate" : "Inicia Sesión"}
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <h5>
                            {registrando
                                ? "¿Ya tienes cuenta?"
                                : "¿No tienes cuenta?"}
                            <button
                                className="btn btn-link text-light"
                                onClick={() => setRegistrando(!registrando)}
                            >
                                {registrando ? "Inicia sesión" : "Regístrate"}
                            </button>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
