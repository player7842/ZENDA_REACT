import { useState, type FormEvent, type ChangeEvent } from 'react';
import CardAccion from '../components/CardAccion';

interface LoginProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Login = ({ onAccion }: LoginProps) => {
  //Estados tipados explícitamente
  const [usuario, setUsuario] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Leemos directamente del estado, NO del formulario
    alert(`Datos de acceso ingresados:\nUsuario: ${usuario}\nContraseña: ${contrasena}`);
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#39A900' }}>Login</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '260px' }}>
        {/* Input conectado al estado: value + onChange */}
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsuario(e.target.value)}
          required
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #A8E063' }}
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setContrasena(e.target.value)}
          required
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #A8E063' }}
        />

        <button
          type="submit"
          style={{ background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem' }}
        >
          Ingresar
        </button>
      </form>

      {/*Visualización DINÁMICA: se actualiza mientras escribes */}
      {usuario && (
        <p style={{ marginTop: '0.8rem', color: '#39A900', fontSize: '0.9rem' }}>
          👋 Hola, <strong>{usuario}</strong> — bienvenido a ZENDA
        </p>
      )}

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