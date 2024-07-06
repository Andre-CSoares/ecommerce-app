import Nav from './components/Nav';
import Offerts from './components/Offerts';
import ProductSection from './sections/ProductSection';

const App = () => (
  <main>
    <Nav />
    
    <section className="xl:padding-l wide:padding-r padding-b">
      <ProductSection carousel={carousel} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Daily Offerts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {offers.map((offer, index) => (
            <Offerts
              key={index}
              image={offer.image}
              title={offer.title}
              originalPrice={offer.originalPrice}
              discountedPrice={offer.discountedPrice}
              discountPercentage={offer.discountPercentage}
            />
          ))}
        </div>
      </div>
    </section>
  </main>
);

const carousel = [
  {
    image: 'https://via.placeholder.com/150',
    link: 'https://www.mercadolivre.com.br/',
    title: 'Carrosel Exemplo 1'
  },
  {
    image: 'https://via.placeholder.com/150',
    link: 'https://www.mercadolivre.com.br/',
    title: 'Carrosel Exemplo 2'
  },
  {
    image: 'https://via.placeholder.com/150',
    link: 'https://www.mercadolivre.com.br/',
    title: 'Carrosel Exemplo 3'
  }
];

const offers = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 1',
    originalPrice: 200.00,
    discountedPrice: 150.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 2',
    originalPrice: 300.00,
    discountedPrice: 225.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 3',
    originalPrice: 400.00,
    discountedPrice: 300.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 4',
    originalPrice: 500.00,
    discountedPrice: 375.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 5',
    originalPrice: 600.00,
    discountedPrice: 450.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 6',
    originalPrice: 700.00,
    discountedPrice: 525.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 7',
    originalPrice: 800.00,
    discountedPrice: 600.00,
    discountPercentage: 25,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto Exemplo 8',
    originalPrice: 900.00,
    discountedPrice: 675.00,
    discountPercentage: 25,
  },
];

export default App;