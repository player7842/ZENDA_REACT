import CardAccion from './CardAccion';

interface ProductosProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Productos = ({ onAccion }: ProductosProps) => {
  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#2f9e5c' }}>Proyectos</h2>
      <ul>
        <li>App de Inventario - 80% completado</li>
        <li>Sistema de Matrículas - 45% completado</li>
        <li>Portal de Aprendices - 20% completado</li>
      </ul>

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

export default Productos;