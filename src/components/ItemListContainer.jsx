export default function ItemListContainer({ greeting }) {
  return (
    <main className="content">
      <div className="container">
        <h2>{greeting}</h2>
        {/* Acá va tu listado de productos, grids, etc. */}
      </div>
    </main>
  );
}
