import { useState, type ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import CardAccion from '../components/CardAccion';

interface Proyecto {
    nombre: string;
    avance: number;
    fase: string;
    responsable: string;
}

interface ProyectosProps {
    onAccion: (modulo: string, mensaje: string) => void;
}

const Proyectos = ({ onAccion }: ProyectosProps) => {
    const [busqueda, setBusqueda] = useState<string>("");

    const [proyectos] = useState<Proyecto[]>([
        { nombre: "App de Inventario", avance: 80, fase: "Fase 4 — Pruebas", responsable: "Camilo Torres" },
        { nombre: "Sistema de Matrículas", avance: 45, fase: "Fase 2 — Diseño", responsable: "Freddy Ardila" },
        { nombre: "Portal de Aprendices", avance: 20, fase: "Fase 1 — Análisis", responsable: "Laura Gómez" },
        { nombre: "Gestión de Evidencias", avance: 35, fase: "Fase 2 — Diseño", responsable: "Andrés Ruiz" },
        { nombre: "Control de Fichas", avance: 60, fase: "Fase 3 — Desarrollo", responsable: "Hernan Robledo" },
        { nombre: "Panel de Seguimiento", avance: 15, fase: "Fase 1 — Análisis", responsable: "Nicolás Aparicio" },
    ]);

    const proyectosFiltrados = proyectos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Color según porcentaje de avance
    const colorAvance = (porcentaje: number) => {
        if (porcentaje >= 70) return "#39A900";
        if (porcentaje >= 35) return "#FACC15";
        return "#F97316";
    };

    return (
        <div style={{ padding: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ color: '#39A900', fontSize: '1.6rem', marginBottom: '0.3rem' }}>📁 Proyectos</h2>
            <p style={{ color: '#636A72', marginBottom: '1.2rem' }}>Seguimiento de proyectos formativos por fases</p>

            <input
                type="text"
                placeholder="🔍 Buscar por nombre..."
                value={busqueda}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value)}
                style={{
                    padding: '0.6rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid #A8E063',
                    marginBottom: '1rem',
                    width: '100%',
                    maxWidth: '320px',
                    fontSize: '0.95rem'
                }}
            />

            <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem', color: '#555' }}>
                Total: <strong style={{ color: '#39A900' }}>{proyectosFiltrados.length}</strong> proyecto(s)
            </p>

            {/* Tarjetas de proyectos en cuadrícula */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                {proyectosFiltrados.map((proyecto, index) => (
                    <Link
                        key={index}
                        to={`/proyectos/${encodeURIComponent(proyecto.nombre)}`}
                        style={{
                            textDecoration: 'none',
                            background: '#FFFFFF',
                            border: '1px solid #E8F5E1',
                            borderRadius: '10px',
                            padding: '1.1rem',
                            display: 'block',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 6px rgba(57, 169, 0, 0.05)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = '#A8E063';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = '#E8F5E1';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <h3 style={{ color: '#39A900', margin: '0 0 0.4rem 0', fontSize: '1.05rem' }}>
                            {proyecto.nombre}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: '#636A72', margin: '0 0 0.3rem 0' }}>
                            📍 {proyecto.fase}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#636A72', margin: '0 0 0.6rem 0' }}>
                            👤 Responsable: {proyecto.responsable}
                        </p>

                        {/* Barra de progreso */}
                        <div style={{ height: '8px', background: '#E8F5E1', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{
                                width: `${proyecto.avance}%`,
                                height: '100%',
                                background: colorAvance(proyecto.avance),
                                borderRadius: '4px',
                                transition: 'width 0.4s ease'
                            }} />
                        </div>
                        <p style={{ textAlign: 'right', fontSize: '0.85rem', fontWeight: '600', color: colorAvance(proyecto.avance), marginTop: '0.3rem' }}>
                            {proyecto.avance}% completado
                        </p>
                    </Link>
                ))}
            </div>

            {busqueda && proyectosFiltrados.length === 0 && (
                <p style={{ color: '#888', fontStyle: 'italic', padding: '1rem' }}>No se encontraron proyectos con ese nombre</p>
            )}

            <CardAccion
                titulo="Nuevo proyecto"
                descripcion="Registrar un nuevo proyecto de seguimiento formativo"
                textoBoton="Agregar proyecto"
                modulo="Proyectos"
                onAccion={onAccion}
            />
        </div>
    );
};

export default Proyectos;