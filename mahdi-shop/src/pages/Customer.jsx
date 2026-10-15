import CustomerForm from '../components/CustomerForm.jsx';

export default function Customer() {
  return (
    <section className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Customer Information</h1>
      <CustomerForm />
    </section>
  );
}
