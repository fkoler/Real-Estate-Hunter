import PropertyCard from '@/components/PropertyCard';

const fetchProperties = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
        );

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return await res.json();
    } catch (err) {
        console.error(err);
        return [];
    }
};

const PropertiesPage = async () => {
    const properties = await fetchProperties();
    properties.length > 0 &&
        properties.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {properties ? (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map((property) => (
                            <PropertyCard
                                key={property._id}
                                property={property}
                            />
                        ))}
                    </div>
                ) : (
                    <p className='text-center text-gray-500'>
                        No Properties found
                    </p>
                )}
            </div>
        </section>
    );
};

export default PropertiesPage;
