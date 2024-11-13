const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

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

export { fetchProperties };
