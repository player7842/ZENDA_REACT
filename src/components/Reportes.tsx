import CardAccion from './CardAccion';

interface UsuariosProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Usuarios = ({ onAccion }: UsuariosProps) => {
  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#2f9e5c' }}>Usuarios</h2>
      <ul>
        <li>Camilo Torres - Instructor</li>
        <li>Laura Gómez - Aprendiz</li>
        <li>Andrés Ruiz - Aprendiz</li>
      </ul>

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