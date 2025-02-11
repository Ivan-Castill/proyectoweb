import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import appfirebase from '../Login/credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { db } from "./firebaseConfig"; 
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Modal } from "react-bootstrap";  // Make sure to import Modal from Bootstrap

const auth = getAuth(appfirebase);

const CrudEtiquetas = ({ correoUsuario }) => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        cantidad: "",
        precio: "",
        fecha: ""
    });
    const [editMode, setEditMode] = useState(false);  // To handle whether we're in edit mode
    const [editingProductId, setEditingProductId] = useState(""); // Store the ID of the product we're editing

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "inventario"));
        setProductos(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            await updateDoc(doc(db, "inventario", editingProductId), form);
            setEditMode(false);  // Exit edit mode after saving
        } else {
            await addDoc(collection(db, "inventario"), form);
        }
        setForm({ nombre: "", descripcion: "", cantidad: "", precio: "", fecha: "" });
        fetchData();
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "inventario", id));
        fetchData();
    };

    const handleEdit = (prod) => {
        setForm({
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            cantidad: prod.cantidad,
            precio: prod.precio,
            fecha: prod.fecha
        });
        setEditingProductId(prod.id);
        setEditMode(true);  // Switch to edit mode
    };

    const navigate = useNavigate(); 

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/'); 
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            alert('Hubo un error al cerrar sesión. Inténtalo de nuevo.');
        }
    };

    return (
        <div 
            className="container-fluid text-white min-vh-100 p-4" 
            style={{ 
                backgroundImage: 'url("https://i.redd.it/0qmkyg8xcvf61.gif")', // Replace with your GIF URL
                backgroundSize: 'cover', 
                backgroundPosition: 'center center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div className="text-center mb-4">
                <h2 className="display-4">Registro de Inventario</h2>
                <h5>Bienvenido, {correoUsuario}</h5>
            </div>

            <form className="bg-secondary p-4 rounded shadow-lg" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-2 mb-3">
                        <input name="cantidad" type="number" placeholder="Cantidad" value={form.cantidad} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-2 mb-3">
                        <input name="precio" type="text" placeholder="Precio" value={form.precio} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <input name="fecha" type="date" value={form.fecha} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 mt-3">{editMode ? "Actualizar" : "Guardar"}</button>
                    </div>
                </div>
            </form>

            <table className="table table-dark table-striped table-bordered mt-5">
                <thead>
                    <tr>
                        <th>Nombre de la empresa</th>
                        <th>Descripción de la etiqueta</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.nombre}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.fecha}</td>
                            <td>
                                <button onClick={() => handleEdit(prod)} className="btn btn-warning btn-sm">Editar</button>
                                <button onClick={() => handleDelete(prod.id)} className="btn btn-danger btn-sm ml-2">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handleLogout} className="btn btn-danger w-100 mt-4">Cerrar sesión</button>

            {/* Edit Modal */}
            <Modal show={editMode} onHide={() => setEditMode(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="form-control mb-2" required />
                            <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} className="form-control mb-2" required />
                            <input name="cantidad" type="number" placeholder="Cantidad" value={form.cantidad} onChange={handleChange} className="form-control mb-2" required />
                            <input name="precio" type="text" placeholder="Precio" value={form.precio} onChange={handleChange} className="form-control mb-2" required />
                            <input name="fecha" type="date" value={form.fecha} onChange={handleChange} className="form-control mb-2" required />
                        </div>
                        <button className="btn btn-primary w-100">{editMode ? "Actualizar" : "Guardar"}</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CrudEtiquetas;
