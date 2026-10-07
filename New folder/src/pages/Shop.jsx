import ProductList from '../components/ProductList.jsx';

export default function Shop({ products, onAdd, purchased }) {
  return (
    <section className="mx-auto max-w-6xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Shop</h1>
      <ProductList products={products} onAdd={onAdd} />

      <section className="mt-10 rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold">Purchased items</h2>
        {purchased.length === 0 ? (
          <p className="mt-3">No items purchased yet.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {purchased.map((item, index) => (
              <article key={`${item.id}-${index}`} className="flex items-center gap-3 rounded-lg border p-3">
                <span className="text-3xl">{item.emoji}</span>
                <p>{item.name} - {item.quantity} × ${item.price}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
