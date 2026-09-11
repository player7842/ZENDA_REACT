import { useState, type ChangeEvent } from 'react';
import CardAccion from '../components/CardAccion';

interface Reporte {
  proyecto: string;
  fase: string;
  resultado: string;
  fecha: string;
  observaciones?: string;
}

interface ReportesProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Reportes = ({ onAccion }: ReportesProps) => {
  const [busqueda, setBusqueda] = useState<string>("");

  const [reportes] = useState<Reporte[]>([
    { proyecto: "App de Inventario", fase: "Fase 1 — Análisis", resultado: "✅ Aprobada", fecha: "2026-08-28", observaciones: "Requisitos bien definidos" },
    { proyecto: "App de Inventario", fase: "Fase 2 — Diseño", resultado: "⚠️ Con observaciones", fecha: "2026-09-01", observaciones: "Revisar diagrama de BD" },
    { proyecto: "App de Inventario", fase: "Fase 3 — Desarrollo", resultado: "⏳ En revisión", fecha: "2026-09-05", observaciones: "Pendiente de evaluación" },
    { proyecto: "Sistema de Matrículas", fase: "Fase 1 — Análisis", resultado: "✅ Aprobada", fecha: "2026-09-02", observaciones: "Alcance claro y completo" },
    { proyecto: "Sistema de Matrículas", fase: "Fase 2 — Diseño", resultado: "✅ Aprobada", fecha: "2026-09-06", observaciones: "Buenos prototipos" },
    { proyecto: "Portal de Aprendices", fase: "Fase 1 — Análisis", resultado: "⚠️ Con observaciones", fecha: "2026-09-03", observaciones: "Faltan casos de uso" },
    { proyecto: "Gestión de Evidencias", fase: "Fase 1 — Análisis", resultado: "✅ Aprobada", fecha: "2026-09-04", observaciones: "Documentación completa" },
    { proyecto: "Gestión de Evidencias", fase: "Fase 2 — Diseño", resultado: "⏳ En revisión", fecha: "2026-09-07", observaciones: "En evaluación por instructor" },
    { proyecto: "Control de Fichas", fase: "Fase 1 — Análisis", resultado: "✅ Aprobada", fecha: "2026-09-05", observaciones: "Modelo de datos correcto" },
    { proyecto: "Panel de Seguimiento", fase: "Fase 1 — Análisis", resultado: "❌ Rechazada", fecha: "2026-09-06", observaciones: "Reformular objetivos" },
  ]);

  const reportesFiltrados = reportes.filter(r =>
    r.proyecto.toLowerCase().includes(busqueda.toLowerCase()) ||
    r.fase.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Color de etiqueta según estado
  const estiloResultado = (resultado: string) => {
    if (resultado.includes("✅")) return { bg: "#E8F5E1", color: "#39A900" };
    if (resultado.includes("⚠️")) return { bg: "#FEF9E1", color: "#CA8A04" };
    if (resultado.includes("⏳")) return { bg: "#EFF6FF", color: "#3B82F6" };
    if (resultado.includes("❌")) return { bg: "#FEE2E2", color: "#DC2626" };
    return { bg: "#F3F4F6", color: "#6B7280" };
  };

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#39A900', fontSize: '1.6rem', marginBottom: '0.3rem' }}>📊 Reportes y Seguimiento</h2>
      <p style={{ color: '#636A72', marginBottom: '1.2rem' }}>Evaluación de fases y observaciones del instructor</p>

      <input
        type="text"
        placeholder="🔍 Buscar por proyecto o fase..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '0.6rem 0.8rem',
          borderRadius: '6px',
          border: '1px solid #A8E063',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '320px',
          fontSize: '0.95rem'
        }}
      />

      <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem', color: '#555' }}>
        Total: <strong style={{ color: '#39A900' }}>{reportesFiltrados.length}</strong> reporte(s)
      </p>

      {/* Lista de reportes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
        {reportesFiltrados.map((reporte, index) => {
          const etiqueta = estiloResultado(reporte.resultado);
          return (
            <div key={index} style={{
              background: '#FFFFFF',
              border: '1px solid #E8F5E1',
              borderRadius: '10px',
              padding: '1rem 1.2rem',
              borderLeft: '4px solid #39A900'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ margin: 0, color: '#1B1B1B', fontSize: '1rem' }}>{reporte.proyecto}</h4>
                  <p style={{ margin: '0.25rem 0 0.4rem 0', color: '#636A72', fontSize: '0.9rem' }}>{reporte.fase}</p>
                </div>
                <span style={{
                  background: etiqueta.bg,
                  color: etiqueta.color,
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '15px',
                  whiteSpace: 'nowrap'
                }}>
                  {reporte.resultado}
                </span>
              </div>
              {reporte.observaciones && (
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.88rem', color: '#555', fontStyle: 'italic' }}>
                  💬 {reporte.observaciones}
                </p>
              )}
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#999', textAlign: 'right' }}>
                📅 {reporte.fecha}
              </p>
            </div>
          );
        })}
      </div>

      {busqueda && reportesFiltrados.length === 0 && (
        <p style={{ color: '#888', fontStyle: 'italic', padding: '1rem' }}>No se encontraron reportes con ese criterio</p>
      )}

      <CardAccion
        titulo="Generar reporte"
        descripcion="Registrar evaluación y observaciones de una fase"
        textoBoton="Nuevo reporte"
        modulo="Reportes"
        onAccion={onAccion}
      />
    </div>
  );
};

export default Reportes;