import { useParams, Link } from "react-router-dom";

const DetalleProyecto = () => {
  const { nombreId } = useParams<{ nombreId: string }>();

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2 style={{ color: "#39A900" }}>Detalle del Proyecto</h2>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
        Proyecto: <strong>{decodeURIComponent(nombreId || "")}</strong>
      </p>
      <p>Aquí se verán las fases del proyecto, tareas asignadas, evidencias subidas y observaciones del instructor.</p>
      <Link to="/proyectos" style={{ display: "inline-block", marginTop: "1rem", color: "#39A900" }}>
        ← Volver al listado
      </Link>
    </div>
  );
};

export default DetalleProyecto;