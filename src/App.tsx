import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPrincipal from "./components/MenuPrincipal";
import MenuModulos from "./components/MenuModulos";

// Páginas principales
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

// Módulos
import Usuarios from "./pages/Usuarios";
import DetalleUsuario from "./pages/DetalleUsuario";
import Proyectos from "./pages/Proyectos";
import DetalleProyecto from "./pages/DetalleProyecto";
import Reportes from "./pages/Reportes";

// perfil
import PerfilUsuario from "./components/PerfilUsuario"; // ✅ Importar

function App() {
  // función para las alertas
  const handleAccion = (modulo: string, mensaje: string) => {
    alert(`Módulo: ${modulo}\nAcción: ${mensaje}`);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Header />
      <PerfilUsuario />
      <MenuPrincipal />
      <MenuModulos />

      <main style={{ flex: 1, padding: "1.5rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <Routes>
          {/* Páginas principales — SIN onAccion */}
          <Route path="/" element={<Inicio />} />
          
          {/* Páginas que NECESITAN onAccion — se la pasamos */}
          <Route path="/login" element={<Login onAccion={handleAccion} />} />
          <Route path="/registro" element={<Registro onAccion={handleAccion} />} />

          {/* Módulos con onAccion */}
          <Route path="/usuarios" element={<Usuarios onAccion={handleAccion} />} />
          <Route path="/usuarios/:id" element={<DetalleUsuario />} />

          <Route path="/proyectos" element={<Proyectos onAccion={handleAccion} />} />
          <Route path="/proyectos/:nombreId" element={<DetalleProyecto />} />

          <Route path="/reportes" element={<Reportes onAccion={handleAccion} />} />

          {/* Ruta 404 */}
          <Route
            path="*"
            element={
              <div style={{ padding: "3rem", textAlign: "center" }}>
                <h2 style={{ color: "#EF4444", fontSize: "1.8rem" }}>Error 404</h2>
                <p style={{ color: "#636A72", marginTop: "0.5rem" }}>Página no encontrada en ZENDA</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;