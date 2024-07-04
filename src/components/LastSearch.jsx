const LastSearch = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-4 mt-16">Last Products searched</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-md shadow-2xl bg-white h-60 w-96 flex justify-center py-4 px-4 flex justify-center items-center"><p>Product 1</p></div>
                <div className="rounded-md shadow-2xl bg-white h-60 w-96 flex justify-center py-4 px-4 flex justify-center items-center"><p>Product 2</p></div>
                <div className="rounded-md shadow-2xl bg-white h-60 w-96 flex justify-center py-4 px-4 flex justify-center items-center"><p>Product 3</p></div>
            </div>
        </>
    )
}

export default LastSearch;