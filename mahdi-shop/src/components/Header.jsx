import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-700 p-4 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-bold">Simple Shop</h1>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/basket">Basket</Link>
          <Link to="/customer">Customer</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
