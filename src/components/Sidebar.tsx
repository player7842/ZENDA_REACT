import { useState } from 'react';

type SidebarProps = {
  active: string;
  onSelect: (view: string) => void;
};

const Sidebar = ({ active, onSelect }: SidebarProps) => {
  // ✅ Estado inicial: ABIERTO por defecto
  const [menuAbierto, setMenuAbierto] = useState<boolean>(true);

  return (
    <aside style={{ 
      width: '160px', 
      background: '#ffffff', 
      borderRight: '1px solid #E8F5E1', 
      padding: '1rem' 
    }}>
      {/* 🔹 Botón mostrar/ocultar */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        style={{
          color: '#39A900',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '0.9rem',
          marginBottom: '0.8rem'
        }}
      >
        {menuAbierto ? '▼ Ocultar menú' : '▶ Mostrar menú'}
      </button>

      {/* ✅ Sección que aparece/desaparece */}
      {menuAbierto && (
        <>
          <p
            onClick={() => onSelect('usuarios')}
            style={{ 
              cursor: 'pointer', 
              fontWeight: active === 'usuarios' ? 'bold' : 'normal', 
              color: '#39A900' 
            }}
          >
            Usuarios
          </p>
          <p
            onClick={() => onSelect('proyectos')}
            style={{ 
              cursor: 'pointer', 
              fontWeight: active === 'proyectos' ? 'bold' : 'normal', 
              color: '#39A900' 
            }}
          >
            Proyectos
          </p>
        </>
      )}
    </aside>
  );
};

export default Sidebar;