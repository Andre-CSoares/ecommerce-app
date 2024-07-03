import Nav from './components/Nav';
import ProductSection from './sections/ProductSection';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <ProductSection />
    </section>
  </main>
);

export default App;