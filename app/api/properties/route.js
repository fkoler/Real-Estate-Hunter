import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/utils/authOptions';
import { getSessionUser } from '@/utils/getSessionUser';

import connectDB from '@/config/db';
import Property from '@/models/Property';
import cloudinary from '@/config/cloudinary';

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
        await connectDB();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', { status: 401 });
        }

        const { userId } = sessionUser;

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
            owner: userId,
        };

        // Uploading image(s) to Cloudinary
        const imageUploadPromises = [];

        for (let image of images) {
            const imageBuffer = await image.arrayBuffer();
            const imageArray = Array.from(new Uint8Array(imageBuffer));
            const imageData = Buffer.from(imageArray);

            // convert the image to base64
            const imageBase64 = imageData.toString('base64');

            // make req to ul to Cloudinary
            const res = await cloudinary.uploader.upload(
                `data:image/png;base64,${imageBase64}`,
                {
                    folder: 'realestatehunter',
                }
            );

            imageUploadPromises.push(res.secure_url);

            // waiting for all images to upload
            const uploadedImages = await Promise.all(imageUploadPromises);

            // adding uploaded images to the propertyData object
            propertyData.images = uploadedImages;
        }

        const newProperty = new Property(propertyData);
        await newProperty.save();

        return Response.redirect(
            `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
        );

        // return new Response(JSON.stringify({ message: 'Success' }), {
        //     status: 200,
        // });
    } catch (err) {
        return new Response('Oops! Failed to post property', { status: 500 });
    }
};
