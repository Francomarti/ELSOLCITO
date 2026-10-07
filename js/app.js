function fmt(n) {
  return "$" + Number(n || 0).toLocaleString("es-AR");
}

function fmtFecha(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

async function cargarJSON(ruta) {
  const res = await fetch(ruta);
  if (!res.ok) throw new Error("No se pudo cargar " + ruta);
  return res.json();
}
