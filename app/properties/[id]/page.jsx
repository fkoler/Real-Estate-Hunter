'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { fetchProperty } from '@/utils/requests';

const PropertyPage = () => {
    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyData = async () => {
            if (!id) return;

            try {
                const propertyData = await fetchProperty(id);

                setProperty(propertyData);
            } catch (err) {
                console.error('Error fetching property: ', err);
            } finally {
                setLoading(false);
            }
        };

        if (!property) fetchPropertyData();
    }, [id, property]);

    return <div>PropertyPage</div>;
};

export default PropertyPage;
