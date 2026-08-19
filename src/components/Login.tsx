import CardAccion from './CardAccion';

interface LoginProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Login = ({ onAccion }: LoginProps) => {
  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const usuario = (formulario.elements.namedItem('usuario') as HTMLInputElement).value;
    const contrasena = (formulario.elements.namedItem('contrasena') as HTMLInputElement).value;

    alert(`Datos de acceso ingresados:\nUsuario: ${usuario}\nContraseña: ${contrasena}`);
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#2f9e5c' }}>Login</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '260px' }}>
        <input name="usuario" type="text" placeholder="Usuario" required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #7fd8a0' }} />
        <input name="contrasena" type="password" placeholder="Contraseña" required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #7fd8a0' }} />
        <button type="submit" style={{ background: '#2f9e5c', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem' }}>
          Ingresar
        </button>
      </form>

      <CardAccion
        titulo="Acceso de invitado"
        descripcion="Entrar sin registrarse como usuario invitado"
        textoBoton="Entrar como invitado"
        modulo="Login"
        onAccion={onAccion}
      />
    </div>
  );
};

export default Login;