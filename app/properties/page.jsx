import { useMemo } from 'react';

import PropertyCard from '@/components/PropertyCard';
import properties from '@/properties.json';

const PropertiesPage = () => {
    const sortedProperties = useMemo(
        () => [...properties].sort((a, b) => a._id - b._id),
        []
    );

    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {sortedProperties.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {sortedProperties.map((property) => (
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
