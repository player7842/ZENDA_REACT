import { useState, type ChangeEvent } from 'react';
import CardAccion from './CardAccion';

interface Reporte {
  proyecto: string;
  fase: string;
  resultado: string;
  fecha: string;
}

interface ReportesProps {
  onAccion: (modulo: string, mensaje: string) => void;
}

const Reportes = ({ onAccion }: ReportesProps) => {
  const [busqueda, setBusqueda] = useState<string>("");

  // ✅ 3 REGISTROS DE REPORTES → completamos los 10 totales
  const [reportes] = useState<Reporte[]>([
    { proyecto: "App de Inventario", fase: "Fase 1 - Análisis", resultado: "✅ Aprobada", fecha: "2026-08-28" },
    { proyecto: "App de Inventario", fase: "Fase 2 - Diseño", resultado: "⚠️ Con observaciones", fecha: "2026-09-01" },
    { proyecto: "Sistema de Matrículas", fase: "Fase 1 - Análisis", resultado: "✅ Aprobada", fecha: "2026-09-02" },
  ]);

  const reportesFiltrados = reportes.filter(r =>
    r.proyecto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ color: '#39A900' }}>Reportes y Seguimiento</h2>
      <input
        type="text"
        placeholder="🔍 Buscar por proyecto..."
        value={busqueda}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value)}
        style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #A8E063',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '260px'
        }}
      />
      <p style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: '#555' }}>
        Total: <strong>{reportesFiltrados.length}</strong> reporte(s)
      </p>
      <ul>
        {reportesFiltrados.map((reporte, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8F5E1' }}>
            <strong>{reporte.proyecto}</strong> — {reporte.fase}<br />
            <span style={{ fontSize: '0.9rem' }}>{reporte.resultado} | {reporte.fecha}</span>
          </li>
        ))}
      </ul>
      {busqueda && reportesFiltrados.length === 0 && (
        <p style={{ color: '#888', fontStyle: 'italic' }}>No se encontraron reportes</p>
      )}
      <CardAccion
        titulo="Generar reporte"
        descripcion="Crear un nuevo reporte de seguimiento"
        textoBoton="Nuevo reporte"
        modulo="Reportes"
        onAccion={onAccion}
      />
    </div>
  );
};

export default Reportes;