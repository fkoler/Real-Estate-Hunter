import connectDB from '@/config/db';
import Property from '@/models/Property';

// GET /api/properties/:id
export const GET = async (req, { params }) => {
    try {
        await connectDB();

        const property = await Property.findById(params.id);

        if (!property)
            return new Response('Property Not Found', { status: 404 });

        return new Response(JSON.stringify(property), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new Response('Oops!', { status: 500 });
    }
};
