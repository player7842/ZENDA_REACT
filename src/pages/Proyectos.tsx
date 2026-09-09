import { useState, type ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import CardAccion from '../components/CardAccion';

interface Proyecto {
    nombre: string;
    avance: number;
}

interface ProductosProps {
    onAccion: (modulo: string, mensaje: string) => void;
}

const Proyectos = ({ onAccion }: ProductosProps) => {
    const [busqueda, setBusqueda] = useState<string>("");

    // 6 PROYECTOS (tus 3 originales + 3 nuevos)
    const [proyectos] = useState<Proyecto[]>([
        { nombre: "App de Inventario", avance: 80 },
        { nombre: "Sistema de Matrículas", avance: 45 },
        { nombre: "Portal de Aprendices", avance: 20 },
        { nombre: "Gestión de Evidencias", avance: 35 },
        { nombre: "Control de Fichas", avance: 60 },
        { nombre: "Panel de Seguimiento", avance: 15 },
    ]);

    const proyectosFiltrados = proyectos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div style={{ padding: '1.5rem' }}>
            <h2 style={{ color: '#39A900' }}>Proyectos</h2>
            <input
                type="text"
                placeholder="🔍 Buscar proyecto..."
                value={busqueda}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value)}
                style={{
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #A8E063',
                    marginBottom: '1rem',
                    width: '100%',
                    maxWidth: '260px'
                }}
            />
            <p style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: '#555' }}>
                Total: <strong>{proyectosFiltrados.length}</strong> proyecto(s)
            </p>
            <ul>
                {proyectosFiltrados.map((proyecto, index) => (
                    <li key={index} style={{ marginBottom: '0.4rem' }}>
                        <Link to={`/proyectos/${encodeURIComponent(proyecto.nombre)}`} style={{ color: '#39A900' }}>
                            {proyecto.nombre}
                        </Link>
                        — {proyecto.avance}% completado
                    </li>
                ))}
            </ul>
            {busqueda && proyectosFiltrados.length === 0 && (
                <p style={{ color: '#888', fontStyle: 'italic' }}>No se encontraron proyectos</p>
            )}
            <CardAccion
                titulo="Nuevo proyecto"
                descripcion="Registrar un nuevo proyecto de seguimiento"
                textoBoton="Agregar proyecto"
                modulo="Productos"
                onAccion={onAccion}
            />
        </div>
    );
};

export default Proyectos;