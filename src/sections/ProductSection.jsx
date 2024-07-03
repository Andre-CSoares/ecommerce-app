import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

const ProductSection = () => {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="flex flex-col justify-start items-center w-full max-xl:padding-x pt-28">
                <ProductList numberOfCards={6} />
                <Carousel />
            </div>

        </section>
    )
}

export default ProductSection