// src/utils/programPdf.js
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Genera y descarga el PDF del programa
 * @param {Object[]} propuestas - Array de propuestas [{slug,titulo,eje,resumen,updatedAt}, ...]
 * @param {string} titulo - Título de la portada
 * @param {string} autor  - Autor o campaña (pie de página)
 */
export function downloadProgramaPDF({ propuestas, titulo, autor = "Campaña Andrés Arce" }) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();

  // Helpers
  const mm = (n) => (n * 72) / 25.4;
  const now = new Date().toLocaleDateString();

  // -------- Portada --------
  doc.setFillColor(11, 27, 43); // brand-primary
  doc.rect(0, 0, W, H, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text(titulo, mm(20), mm(40), { maxWidth: W - mm(40) });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Programa completo de propuestas", mm(20), mm(55));
  doc.text(`Fecha: ${now}`, mm(20), mm(65));

  // Footer portada
  doc.setFontSize(10);
  doc.text(autor, W - mm(20), H - mm(20), { align: "right" });

  // -------- Tabla de contenido --------
  doc.addPage();
  doc.setTextColor(11, 27, 43);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Tabla de Contenido", mm(20), mm(30));

  const tocRows = propuestas.map((p, i) => [i + 1, p.titulo, p.eje || "—"]);
  autoTable(doc, {
    startY: mm(40),
    head: [["#", "Propuesta", "Eje"]],
    body: tocRows,
    styles: { font: "helvetica", fontSize: 11, cellPadding: 6 },
    headStyles: { fillColor: [11, 95, 255], textColor: 255 },
    theme: "grid",
    margin: { left: mm(20), right: mm(20) },
  });

  // Guardar la página donde empieza el contenido (toc usa 2)
  let pageNum = doc.getNumberOfPages();

  // -------- Secciones de propuestas --------
  propuestas.forEach((p, i) => {
    doc.addPage();
    pageNum++;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(11, 95, 255); // brand-secondary
    doc.text(`Propuesta ${i + 1}`, mm(20), mm(25));

    // Título
    doc.setTextColor(11, 27, 43);
    doc.setFontSize(18);
    doc.text(p.titulo, mm(20), mm(40), { maxWidth: W - mm(40) });

    // Meta
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(90);
    doc.text(`Eje: ${p.eje || "—"}  •  Última actualización: ${p.updatedAt || "—"}`, mm(20), mm(58));

    // Resumen
    doc.setTextColor(20);
    const bodyY = mm(75);
    const resumen = p.resumen || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere.";
    doc.setFontSize(12);
    doc.text(resumen, mm(20), bodyY, { maxWidth: W - mm(40) });

    // “Programa de la propuesta” (placeholder largo)
    const programY = bodyY + mm(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(11, 27, 43);
    doc.text("Programa de la propuesta", mm(20), programY);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(40);

    const paragraphs = [
      "1) Objetivo general: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "2) Medidas clave: Cras fermentum odio eu feugiat pretium nibh ipsum consequat.",
      "3) Implementación: Ut placerat orci nulla pellentesque dignissim enim sit amet.",
      "4) Indicadores de seguimiento: Nisl tincidunt eget nullam non nisi est sit amet facilisis.",
      "5) Financiamiento y calendario: Dui nunc mattis enim ut tellus elementum sagittis vitae.",
    ];

    let y = programY + mm(12);
    const maxWidth = W - mm(40);
    const lineH = 16;

    paragraphs.forEach((para) => {
      const lines = doc.splitTextToSize(para, maxWidth);
      lines.forEach((line) => {
        if (y > H - mm(25)) {
          doc.addPage();
          pageNum++;
          y = mm(25);
        }
        doc.text(line, mm(20), y);
        y += lineH;
      });
      y += 6;
    });

    // Footer con paginación
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(`${autor} — Página ${pageNum}`, W - mm(20), H - mm(15), { align: "right" });
  });

  // Descargar
  const safeName = titulo.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
  doc.save(`${safeName}.pdf`);
}
