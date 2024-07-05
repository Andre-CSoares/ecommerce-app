const Offerts = ({ image, title, originalPrice, discountedPrice, discountPercentage }) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white m-4 transform transition-transform duration-300 hover:-translate-y-1.5">
                <img className="w-full h-48 object-cover" src={image} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <div className="flex items-baseline">
                        <span className="text-gray-500 line-through mr-2">R${originalPrice}</span>
                        <span className="text-red-600 font-bold">R${discountedPrice}</span>
                    </div>
                    <div className="mt-2">
                        <span className="inline-block bg-red-500 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                            {discountPercentage}% off
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offerts