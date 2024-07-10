const Interest = ({ interest }) => {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
                {interest.map((product, index) => (
                    <div key={index} className="w-full rounded overflow-hidden shadow-lg p-4 bg-white m-4">
                        <div className="text-center font-bold">{product.banner}</div>
                        <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.title}</div>
                            <div className="flex items-baseline">
                                <span className="text-gray-600 font-bold">R${product.originalPrice}</span>
                            </div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
                                <div className="mt-2">
                                    <span className="inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                                        Frete grátis
                                    </span>
                                </div>
                                <button className="bg-red-500 text-white rounded-lg hover:bg-red-700 transition-all duration-300">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>




    )
}

export default Interest;