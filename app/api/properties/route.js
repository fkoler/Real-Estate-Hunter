import connectDB from '@/config/db';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (req) => {
    try {
        await connectDB();

        const properties = await Property.find({});

        return new Response(JSON.stringify(properties), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new Response('Oops! Failed to get property', { status: 500 });
    }
};

// POST /api/properties
export const POST = async (req) => {
    try {
        const formData = await req.formData();

        const amenities = formData.getAll('amenities');
        const images = formData
            .getAll('images')
            .filter((image) => image.name !== '');

        const propertyData = {
            type: formData.get('type'),
            name: formData.get('name'),
            description: formData.get('description'),
            location: {
                street: formData.get('location.street'),
                city: formData.get('location.city'),
                state: formData.get('location.state'),
                zipcode: formData.get('location.zipcode'),
            },
            beds: formData.get('beds'),
            baths: formData.get('baths'),
            square_feet: formData.get('square_feet'),
            amenities,
            rates: {
                weekly: formData.get('rates.weekly'),
                monthly: formData.get('rates.monthly'),
                nightly: formData.get('rates.nightly'),
            },
            seller_info: {
                name: formData.get('seller_info.name'),
                email: formData.get('seller_info.email'),
                phone: formData.get('seller_info.phone'),
            },
            images,
        };

        console.log(propertyData);

        return new Response(JSON.stringify({ message: 'Success' }), {
            status: 200,
        });
    } catch (err) {
        return new Response('Oops! Failed to post property', { status: 500 });
    }
};
