// App.tsx
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Usuarios from './components/Usuarios';
import Proyectos from './components/Proyectos';
import Login from './components/Login';
import Registro from './components/Registro';
import Reportes from './components/Reportes';


function App() {
  const [pagina, setPagina] = useState<string>('usuarios');

  const handleAccion = (modulo: string, mensaje: string) => {
    alert(`Módulo: ${modulo}\nAcción: ${mensaje}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Header />

      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <nav style={{ marginBottom: '20px' }}>
            <button onClick={() => setPagina('usuarios')}>Ver Usuarios</button>
            <button onClick={() => setPagina('proyectos')} style={{ marginLeft: '10px' }}>Ver Proyectos</button>
            <button onClick={() => setPagina('login')} style={{ marginLeft: '10px' }}>Ver Login</button>
            <button onClick={() => setPagina('registro')} style={{ marginLeft: '10px' }}>Ver Registro</button>
            <button onClick={() => setPagina('reportes')} style={{ marginLeft: '10px' }}>Ver Reportes</button>
          </nav>

          <hr />

          <main>
            {pagina === 'usuarios' && <Usuarios onAccion={handleAccion} />}
            {pagina === 'proyectos' && <Proyectos onAccion={handleAccion} />}
            {pagina === 'login' && <Login onAccion={handleAccion} />}
            {pagina === 'registro' && <Registro onAccion={handleAccion} />}
            {pagina === 'reportes' && <Reportes onAccion={handleAccion} />}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;