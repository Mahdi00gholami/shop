export default function BasketList({ items, onRemove, onIncrease, onDecrease, onBuy }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="space-y-4">
      {items.map((item) => (
        <article key={item.id} className="rounded-xl bg-white p-5 shadow-md">
          <div className="text-4xl">{item.emoji}</div>
          <h2 className="mt-2 text-xl font-bold">{item.name}</h2>
          <p className="mt-2">Price: ${item.price}</p>
          <p className="mt-2">Quantity: {item.quantity}</p>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={() => onDecrease(item.id)} className="rounded-lg bg-slate-200 px-3 py-2">-</button>
            <button type="button" onClick={() => onIncrease(item.id)} className="rounded-lg bg-slate-200 px-3 py-2">+</button>
            <button type="button" onClick={() => onRemove(item.id)} className="rounded-lg bg-blue-700 px-4 py-2 text-white">Remove</button>
          </div>
        </article>
      ))}
      <p className="text-xl font-bold">Total: ${total}</p>
      <button type="button" onClick={onBuy} className="rounded-lg bg-green-700 px-6 py-3 text-white">
        Finally Buy
      </button>
    </section>
  );
}
