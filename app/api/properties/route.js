import connectDB from '@/config/db';

export const GET = async (req) => {
    try {
        await connectDB();

        return new Response(JSON.stringify({ message: 'Hey Buddy' }), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new Response('Oops!', { status: 500 });
    }
};
