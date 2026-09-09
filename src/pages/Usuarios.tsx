import { useState, type ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import CardAccion from '../components/CardAccion';

interface Usuario {
  nombre: string;
  rol: string;
  ficha?: string;
}

interface UsuariosProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Usuarios = ({ onAccion }: UsuariosProps) => {
  const [busqueda, setBusqueda] = useState<string>("");

  const [usuarios] = useState<Usuario[]>([
    { nombre: "Camilo Torres", rol: "Instructor", ficha: "CGMLTI-001" },
    { nombre: "Freddy Ardila", rol: "Instructor", ficha: "CGMLTI-002" },
    { nombre: "Laura Gómez", rol: "Aprendiz", ficha: "2621345" },
    { nombre: "Andrés Ruiz", rol: "Aprendiz", ficha: "2621345" },
    { nombre: "Hernan Robledo", rol: "Aprendiz", ficha: "2621346" },
    { nombre: "Omar González", rol: "Aprendiz", ficha: "2621346" },
    { nombre: "Nicolás Aparicio", rol: "Aprendiz", ficha: "2621347" },
    { nombre: "Leyner Buitrago", rol: "Aprendiz", ficha: "2621347" },
    { nombre: "Pineda Téllez", rol: "Aprendiz", ficha: "2621348" },
    { nombre: "Sebastián Aguilar", rol: "Aprendiz", ficha: "2621348" },
  ]);

  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Estilo distintivo por rol
  const estiloRol = (rol: string) => {
    if (rol === "Instructor") {
      return { bg: "#E8F5E1", color: "#39A900", icon: "🎓" };
    }
    return { bg: "#E6F4FF", color: "#3B82F6", icon: "👨‍🎓" };
  };

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#39A900', fontSize: '1.6rem', marginBottom: '0.3rem' }}>👥 Usuarios del Sistema</h2>
      <p style={{ color: '#636A72', marginBottom: '1.2rem' }}>Registro de aprendices e instructores del centro</p>

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
        Total: <strong style={{ color: '#39A900' }}>{usuariosFiltrados.length}</strong> usuario(s)
      </p>

      {/* Tarjetas de usuarios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '0.9rem',
        marginBottom: '2rem'
      }}>
        {usuariosFiltrados.map((usuario, index) => {
          const rol = estiloRol(usuario.rol);
          return (
            <Link
              key={index}
              to={`/usuarios/${index + 1}`}
              style={{
                textDecoration: 'none',
                background: '#FFFFFF',
                border: '1px solid #E8F5E1',
                borderRadius: '10px',
                padding: '1rem',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#A8E063'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E8F5E1'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ color: '#1B1B1B', margin: 0, fontSize: '1rem' }}>
                  {rol.icon} {usuario.nombre}
                </h3>
                <span style={{
                  background: rol.bg,
                  color: rol.color,
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '12px'
                }}>
                  {usuario.rol}
                </span>
              </div>
              {usuario.ficha && (
                <p style={{ fontSize: '0.85rem', color: '#636A72', marginTop: '0.5rem', marginBottom: 0 }}>
                  📋 Ficha: {usuario.ficha}
                </p>
              )}
            </Link>
          );
        })}
      </div>

      {busqueda && usuariosFiltrados.length === 0 && (
        <p style={{ color: '#888', fontStyle: 'italic', padding: '1rem' }}>No se encontraron usuarios con ese nombre</p>
      )}

      <CardAccion
        titulo="Nuevo usuario"
        descripcion="Registrar un aprendiz o instructor en el sistema"
        textoBoton="Agregar usuario"
        modulo="Usuarios"
        onAccion={onAccion}
      />
    </div>
  );
};

export default Usuarios;