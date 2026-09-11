import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPrincipal from "./components/MenuPrincipal";
import MenuModulos from "./components/MenuModulos";
import PerfilUsuario from "./components/PerfilUsuario";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Usuarios from "./pages/Usuarios";
import DetalleUsuario from "./pages/DetalleUsuario";
import Proyectos from "./pages/Proyectos";
import DetalleProyecto from "./pages/DetalleProyecto";
import Reportes from "./pages/Reportes";

function App() {
  const handleAccion = (modulo: string, mensaje: string) => {
    alert(`Módulo: ${modulo}\nAcción: ${mensaje}`);
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#FFFFFF"
    }}>
      <Header />
      
      {/* Componente Global de Perfil (Consume el Store de Redux en cualquier ruta) */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "0.5rem 1.5rem" }}>
        <PerfilUsuario />
      </div>

      <MenuPrincipal />
      <MenuModulos />

      <main style={{ flex: 1, padding: "1.5rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login onAccion={handleAccion} />} />
          <Route path="/registro" element={<Registro onAccion={handleAccion} />} />
          <Route path="/usuarios" element={<Usuarios onAccion={handleAccion} />} />
          <Route path="/usuarios/:id" element={<DetalleUsuario />} />
          <Route path="/proyectos" element={<Proyectos onAccion={handleAccion} />} />
          <Route path="/proyectos/:nombreId" element={<DetalleProyecto />} />
          <Route path="/reportes" element={<Reportes onAccion={handleAccion} />} />
          <Route path="*" element={
            <div style={{ padding: "3rem", textAlign: "center" }}>
              <h2 style={{ color: "#EF4444", fontSize: "1.8rem" }}>Error 404</h2>
              <p style={{ color: "#636A72", marginTop: "0.5rem" }}>Página no encontrada en ZENDA</p>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;