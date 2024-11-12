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
        return new Response('Oops!', { status: 500 });
    }
};
