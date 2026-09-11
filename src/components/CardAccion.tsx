interface CardAccionProps {
  titulo: string;
  descripcion: string;
  textoBoton: string;
  modulo: string;
  onAccion: (modulo: string, mensaje: string) => void;
}

const CardAccion = ({ titulo, descripcion, textoBoton, modulo, onAccion }: CardAccionProps) => {
  const handleClick = () => {
    onAccion(modulo, `Se ejecutó la acción "${textoBoton}"`);
  };

  return (
    <div style={{
      background: '#F2FAF0',
      border: '1px solid #A8E063',
      borderRadius: '8px',
      padding: '1rem',
      marginTop: '1rem',
      maxWidth: '280px',
    }}>
      <h3 style={{ color: '#39A900', margin: '0 0 0.4rem 0' }}>{titulo}</h3>
      <p style={{ margin: '0 0 0.8rem 0' }}>{descripcion}</p>
      <button
        onClick={handleClick}
        style={{
          background: '#39A900',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        {textoBoton}
      </button>
    </div>
  );
};

export default CardAccion;