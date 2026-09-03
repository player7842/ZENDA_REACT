import { useState, type FormEvent, type ChangeEvent } from 'react';
import CardAccion from './CardAccion';

interface RegistroProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Registro = ({ onAccion }: RegistroProps) => {
  // 🔹 Tres estados tipados
  const [usuario, setUsuario] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Datos de registro ingresados:\nUsuario: ${usuario}\nCorreo: ${correo}\nContraseña: ${contrasena}`);
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#39A900' }}>Registro</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '260px' }}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsuario(e.target.value)}
          required
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #A8E063' }}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value)}
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
          Registrarme
        </button>
      </form>

      {/* ✅ Resumen dinámico: se construye SOLO con lo que escribes */}
      {(usuario || correo) && (
        <div style={{ marginTop: '1rem', padding: '0.8rem', background: '#F2FAF0', borderRadius: '6px', fontSize: '0.9rem' }}>
          <p><strong>Usuario:</strong> {usuario || "pendiente"}</p>
          <p><strong>Correo:</strong> {correo || "pendiente"}</p>
          <p><strong>Contraseña:</strong> {contrasena ? "••••••••" : "pendiente"}</p>
        </div>
      )}

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