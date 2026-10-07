function fmt(n) {
  const v = Number(n || 0);
  const dec = Number.isInteger(v) ? 0 : 2;
  return "$" + v.toLocaleString("es-AR", { minimumFractionDigits: dec, maximumFractionDigits: 2 });
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
