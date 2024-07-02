import Nav from './components/Nav';
import ProductSection from './sections/ProductSection';
import Carousel from './components/Carousel';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <ProductSection />
      <Carousel />
    </section>
  </main>
);

export default App;