export default function ProductCard({ product, onAdd }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-md">
      <div className="text-5xl">{product.emoji}</div>
      <h2 className="mt-3 text-xl font-bold">{product.name}</h2>
      <p className="mt-2 text-slate-600">${product.price}</p>
      <button
        type="button"
        onClick={() => onAdd(product)}
        className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-white"
      >
        Add to basket
      </button>
    </article>
  );
}
