import CardAccion from './CardAccion';

interface RegistroProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Registro = ({ onAccion }: RegistroProps) => {
  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const usuario = (formulario.elements.namedItem('usuario') as HTMLInputElement).value;
    const correo = (formulario.elements.namedItem('correo') as HTMLInputElement).value;
    const contrasena = (formulario.elements.namedItem('contrasena') as HTMLInputElement).value;

    alert(`Datos de registro ingresados:\nUsuario: ${usuario}\nCorreo: ${correo}\nContraseña: ${contrasena}`);
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#2f9e5c' }}>Registro</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '260px' }}>
        <input name="usuario" type="text" placeholder="Usuario" required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #7fd8a0' }} />
        <input name="correo" type="email" placeholder="Correo electrónico" required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #7fd8a0' }} />
        <input name="contrasena" type="password" placeholder="Contraseña" required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #7fd8a0' }} />
        <button type="submit" style={{ background: '#2f9e5c', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem' }}>
          Registrarme
        </button>
      </form>

      <CardAccion
        titulo="Términos y condiciones"
        descripcion="Consultar las políticas antes de registrarte"
        textoBoton="Ver términos"
        modulo="Registro"
        onAccion={onAccion}
      />
    </div>
  );
};

export default Registro;