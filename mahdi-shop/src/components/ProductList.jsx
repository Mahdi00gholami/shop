import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, onAdd }) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </section>
  );
}
