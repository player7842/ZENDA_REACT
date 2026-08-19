type SidebarProps = {
  active: string;
  onSelect: (view: string) => void;
};

const Sidebar = ({ active, onSelect }: SidebarProps) => {
  return (
    <aside style={{ width: '160px', background: '#ffffff', borderRight: '1px solid #d7f5e0', padding: '1rem' }}>
      <p
        onClick={() => onSelect('usuarios')}
        style={{ cursor: 'pointer', fontWeight: active === 'usuarios' ? 'bold' : 'normal', color: '#2f9e5c' }}
      >
        Usuarios
      </p>
      <p
        onClick={() => onSelect('productos')}
        style={{ cursor: 'pointer', fontWeight: active === 'productos' ? 'bold' : 'normal', color: '#2f9e5c' }}
      >
        Proyectos
      </p>
    </aside>
  );
};

export default Sidebar;