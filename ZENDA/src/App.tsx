import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import './App.css';

function App() {
  const [view, setView] = useState('usuarios');

  return (
    <div className="app-container">
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar active={view} onSelect={setView} />
        <main style={{ flex: 1 }}>
          {view === 'usuarios' ? <Usuarios /> : <Productos />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;