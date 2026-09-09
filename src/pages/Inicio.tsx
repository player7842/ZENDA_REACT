const Inicio = () => {
  return (
    <div style={{ padding: "2.5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Encabezado principal */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.2rem", color: "#39A900", marginBottom: "0.5rem" }}>
          Bienvenido a ZENDA
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#4E5157", maxWidth: "700px", margin: "0 auto" }}>
          Sistema de Gestión y Seguimiento de Proyectos Formativos del SENA — 
          <strong style={{ color: "#39A900" }}> Centro de Gestión de Mercados, Logística y Tecnologías de la Información</strong>.
        </p>
      </div>

      {/* Tarjeta de presentación */}
      <div style={{
        background: "linear-gradient(135deg, #F2FAF0 0%, #E8F5E1 100%)",
        border: "1px solid #A8E063",
        borderRadius: "12px",
        padding: "2rem",
        marginBottom: "2.5rem",
        boxShadow: "0 4px 12px rgba(57, 169, 0, 0.08)"
      }}>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#1B1B1B" }}>
          ZENDA es el espacio donde tu proyecto formativo cobra orden. Organiza tu trabajo 
          por <strong>cinco fases estructurales</strong>, gestiona las tareas del equipo, sube 
          tus evidencias y recibe el seguimiento del instructor. Todo en un solo lugar, 
          diseñado especialmente para el proceso formativo del SENA.
        </p>
      </div>

      {/* ¿Qué puedes hacer en ZENDA? — Tarjetas resumen */}
      <h2 style={{ fontSize: "1.3rem", color: "#39A900", marginBottom: "1.2rem" }}>¿Qué puedes hacer?</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
        
        <div style={{ background: "#FFFFFF", border: "1px solid #E8F5E1", borderRadius: "10px", padding: "1.2rem" }}>
          <h3 style={{ color: "#39A900", fontSize: "1rem", marginBottom: "0.5rem" }}>📋 Organiza por Fases</h3>
          <p style={{ fontSize: "0.9rem", color: "#636A72" }}>Análisis → Diseño → Desarrollo → Pruebas → Cierre. Estructura estándar para todos los proyectos.</p>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E8F5E1", borderRadius: "10px", padding: "1.2rem" }}>
          <h3 style={{ color: "#39A900", fontSize: "1rem", marginBottom: "0.5rem" }}>✅ Gestiona Evidencias</h3>
          <p style={{ fontSize: "0.9rem", color: "#636A72" }}>Sube y organiza los documentos por fase. Recibe aprobación u observaciones del instructor.</p>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E8F5E1", borderRadius: "10px", padding: "1.2rem" }}>
          <h3 style={{ color: "#39A900", fontSize: "1rem", marginBottom: "0.5rem" }}>👥 Equipo y Tareas</h3>
          <p style={{ fontSize: "0.9rem", color: "#636A72" }}>Asigna responsabilidades, sigue el avance y confirma tareas finalizadas.</p>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E8F5E1", borderRadius: "10px", padding: "1.2rem" }}>
          <h3 style={{ color: "#39A900", fontSize: "1rem", marginBottom: "0.5rem" }}>📊 Seguimiento Real</h3>
          <p style={{ fontSize: "0.9rem", color: "#636A72" }}>Conoce el porcentaje de avance, estado de cada fase y observaciones del instructor.</p>
        </div>
      </div>

      {/* Mensaje final */}
      <div style={{ textAlign: "center", paddingTop: "1rem", borderTop: "1px solid #E8F5E1" }}>
        <p style={{ color: "#636A72", fontSize: "0.95rem", fontStyle: "italic" }}>
          "ZENDA: Menos desorden, más organización, mejor seguimiento."
        </p>
      </div>
    </div>
  );
};

export default Inicio;