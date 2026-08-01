// App.tsx
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';

function App() {
  // Definimos qué página mostrar: 'usuarios' o 'productos'
  const [pagina, setPagina] = useState<string>('usuarios');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Header />

      <div style={{ display: 'flex' }}>

        <div style={{ flex: 1, padding: '20px' }}>
          <nav style={{ marginBottom: '20px' }}>
            <button onClick={() => setPagina('usuarios')}>Ver Usuarios</button>
            <button onClick={() => setPagina('productos')} style={{ marginLeft:'10px' }}>Ver Productos</button>
          </nav>

          <hr />

          {/* Lógica para mostrar un componente u otro */}
          <main>
            {pagina === 'usuarios' && <Usuarios />}
            {pagina === 'productos' && <Productos />}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;