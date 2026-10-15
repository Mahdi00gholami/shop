import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Basket from './pages/Basket.jsx';
import Customer from './pages/Customer.jsx';
import About from './pages/About.jsx';

const products = [
  { id: 1, name: 'Keyboard', price: 35, emoji: '⌨️' },
  { id: 2, name: 'Mouse', price: 20, emoji: '🖱️' },
  { id: 3, name: 'Headphones', price: 45, emoji: '🎧' },
  { id: 4, name: 'Laptop', price: 650, emoji: '💻' },
  { id: 5, name: 'Phone', price: 500, emoji: '📱' },
  { id: 6, name: 'Camera', price: 300, emoji: '📷' },
  { id: 7, name: 'Smart Watch', price: 120, emoji: '⌚' },
  { id: 8, name: 'Tablet', price: 280, emoji: '📱' },
  { id: 9, name: 'Monitor', price: 220, emoji: '🖥️' },
  { id: 10, name: 'Printer', price: 150, emoji: '🖨️' },
  { id: 11, name: 'USB Cable', price: 10, emoji: '🔌' },
  { id: 12, name: 'Speaker', price: 60, emoji: '🔊' },
  { id: 13, name: 'Microphone', price: 75, emoji: '🎙️' },
  { id: 14, name: 'Game Controller', price: 55, emoji: '🎮' },
  { id: 15, name: 'Webcam', price: 70, emoji: '📹' },
  { id: 16, name: 'Power Bank', price: 40, emoji: '🔋' },
  { id: 17, name: 'Flash Drive', price: 18, emoji: '💾' },
  { id: 18, name: 'Router', price: 80, emoji: '📡' },
  { id: 19, name: 'Desk Lamp', price: 30, emoji: '💡' },
  { id: 20, name: 'Backpack', price: 45, emoji: '🎒' }
];

export default function App() {
  const [basket, setBasket] = useState([]);
  const [purchased, setPurchased] = useState([]);

  function addItem(product) {
    setBasket((items) => [...items, { ...product, quantity: 1 }]);
  }

  function removeItem(id) {
    setBasket((items) => items.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
    setBasket((items) => items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }

  function decreaseQuantity(id) {
    setBasket((items) => items.map((item) => {
      if (item.id === id) {
        const nextQuantity = Math.max(1, item.quantity - 1);
        return { ...item, quantity: nextQuantity };
      }
      return item;
    }));
  }

  function buyItems() {
    setPurchased((items) => [...items, ...basket]);
    setBasket([]);
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} onAdd={addItem} purchased={purchased} />} />
        <Route path="/basket" element={<Basket items={basket} purchased={purchased} onRemove={removeItem} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onBuy={buyItems} />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}
