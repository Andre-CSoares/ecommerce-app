const LastSearch = ({ products }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-4 mt-16">Last Products searched</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="w-full rounded overflow-hidden shadow-lg p-4 bg-white m-4 transform transition-transform duration-300 hover:-translate-y-1.5">
                        <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.title}</div>
                            <div className="flex items-baseline">
                                <span className="text-red-600 font-bold">R${product.originalPrice}</span>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default LastSearch;