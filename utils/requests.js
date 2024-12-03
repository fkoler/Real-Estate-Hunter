const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

// Fetch all properties
const fetchProperties = async () => {
    if (!apiDomain) return [];

    try {
        const res = await fetch(`${apiDomain}/properties`);

        if (res.ok) return await res.json();
        throw new Error('Failed to fetch data');
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
};

// Fetch single property
const fetchProperty = async (id) => {
    if (!apiDomain) return null;

    try {
        const res = await fetch(`${apiDomain}/properties/${id}`, {
            cache: 'no-store',
        });

        if (res.ok) return await res.json();
        throw new Error('Failed to fetch data');
    } catch (err) {
        console.error('Fetch error:', err);
        return null;
    }
};

export { fetchProperties, fetchProperty };
