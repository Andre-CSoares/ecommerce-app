import Carousel from '../components/Carousel';
import LastSearch from '../components/LastSearch';
import ProductList from '../components/ProductList';

const ProductSection = () => {
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

    const products = [
        {
            image: 'https://via.placeholder.com/150',
            title: 'Título do Produto 1',
            originalPrice: 100,
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Título do Produto 2',
            originalPrice: 200,
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Título do Produto 3',
            originalPrice: 500,
        },
    ];

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="flex flex-col justify-start items-center w-full max-xl:padding-x pt-28">
                <Carousel carousel={carousel} />
                <ProductList numberOfCards={6} />
                <LastSearch products={products} />
            </div>

        </section>

    )
}

export default ProductSection