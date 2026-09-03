import { useState, type ChangeEvent } from 'react';
import CardAccion from './CardAccion';

interface Usuario {
  nombre: string;
  rol: string;
}

interface UsuariosProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Usuarios = ({ onAccion }: UsuariosProps) => {
  const [busqueda, setBusqueda] = useState<string>("");

  // ✅ 10 REGISTROS DE USUARIOS
  const [usuarios] = useState<Usuario[]>([
    { nombre: "Camilo Torres", rol: "Instructor" },
    { nombre: "Freddy Ardila", rol: "Instructor" },
    { nombre: "Laura Gómez", rol: "Aprendiz" },
    { nombre: "Andrés Ruiz", rol: "Aprendiz" },
    { nombre: "Hernan Robledo", rol: "Aprendiz" },
    { nombre: "Omar González", rol: "Aprendiz" },
    { nombre: "Nicolás Aparicio", rol: "Aprendiz" },
    { nombre: "Leyner Buitrago", rol: "Aprendiz" },
    { nombre: "Pineda Téllez", rol: "Aprendiz" },
    { nombre: "Sebastián Aguilar", rol: "Aprendiz" },
  ]);

  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#39A900' }}>Usuarios</h2>
      <input
        type="text"
        placeholder="🔍 Buscar usuario..."
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
        Total: <strong>{usuariosFiltrados.length}</strong> usuario(s)
      </p>
      <ul>
        {usuariosFiltrados.map((usuario, index) => (
          <li key={index} style={{ marginBottom: '0.4rem' }}>
            {usuario.nombre} - {usuario.rol}
          </li>
        ))}
      </ul>
      {busqueda && usuariosFiltrados.length === 0 && (
        <p style={{ color: '#888', fontStyle: 'italic' }}>No se encontraron usuarios</p>
      )}
      <CardAccion
        titulo="Nuevo usuario"
        descripcion="Registrar un usuario dentro del sistema"
        textoBoton="Agregar usuario"
        modulo="Usuarios"
        onAccion={onAccion}
      />
    </div>
  );
};

export default Usuarios;