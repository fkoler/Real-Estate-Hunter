'use client';
import { useState, useEffect } from 'react';

const AddPropertyForm = () => {
    const [mounted, setMounted] = useState(false);
    const [fields, setFields] = useState({
        type: '',
        name: '',
        description: '',
        location: {
            street: '',
            city: '',
            state: '',
            zipcode: '',
        },
        beds: '',
        baths: '',
        square_feet: '',
        amenities: [],
        rates: {
            weekly: '',
            monthly: '',
            nightly: '',
        },
        seller_info: {
            name: '',
            email: '',
            phone: '',
        },
        images: [],
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [outerKey, innerKey] = name.split('.');

            setFields((prevFields) => ({
                ...prevFields,
                [outerKey]: {
                    ...prevFields[outerKey],
                    [innerKey]: value,
                },
            }));
        } else {
            setFields((prevFields) => ({
                ...prevFields,
                [name]: value,
            }));
        }
    };

    const handleAmenitiesChange = (e) => {
        const { value, checked } = e.target;

        const updatedAmenities = [...fields.amenities];

        if (checked) {
            updatedAmenities.push(value);
        } else {
            const index = updatedAmenities.indexOf(value);

            if (index !== -1) {
                updatedAmenities.splice(index, 1);
            }
        }

        setFields((prevFields) => ({
            ...prevFields,
            amenities: updatedAmenities,
        }));
    };

    const handleImageChange = (e) => {
        const { files } = e.target;

        const updatedImages = [...fields.images];

        for (const file of files) {
            updatedImages.push(file);
        }

        setFields((prevFields) => ({
            ...prevFields,
            images: updatedImages,
        }));
    };

    return (
        mounted && (
            <form>
                <h2 className='text-3xl text-center font-semibold mb-6'>
                    Add Property
                </h2>

                <div className='mb-4'>
                    <label
                        htmlFor='type'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Property Type
                    </label>
                    <select
                        id='type'
                        name='type'
                        className='border rounded w-full py-2 px-3'
                        required
                        value={fields.type}
                        onChange={handleChange}
                        autoComplete='off'
                    >
                        <option value='Apartment'>Apartment</option>
                        <option value='Condo'>Condo</option>
                        <option value='House'>House</option>
                        <option value='Cabin Or Cottage'>
                            Cabin or Cottage
                        </option>
                        <option value='Room'>Room</option>
                        <option value='Studio'>Studio</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='name'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Listing Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='eg. Beautiful Apartment In Miami'
                        required
                        value={fields.name}
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='description'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Description
                    </label>
                    <textarea
                        id='description'
                        name='description'
                        className='border rounded w-full py-2 px-3'
                        rows='4'
                        placeholder='Add an optional description of your property'
                        value={fields.description}
                        onChange={handleChange}
                        autoComplete='off'
                    ></textarea>
                </div>

                <div className='mb-4 bg-blue-50 p-4'>
                    <label
                        htmlFor='street'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Location
                    </label>
                    <input
                        type='text'
                        id='street'
                        name='location.street'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Street'
                        value={fields.location.street}
                        onChange={handleChange}
                        autoComplete='street-address'
                    />

                    <label htmlFor='city'>
                        <input
                            type='text'
                            id='city'
                            name='location.city'
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='City'
                            required
                            value={fields.location.city}
                            onChange={handleChange}
                            autoComplete='address-level2'
                        />
                    </label>

                    <label htmlFor='state'>
                        <input
                            type='text'
                            id='state'
                            name='location.state'
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='State'
                            required
                            value={fields.location.state}
                            onChange={handleChange}
                            autoComplete='address-level1'
                        />
                    </label>

                    <label htmlFor='zipcode'>
                        <input
                            type='text'
                            id='zipcode'
                            name='location.zipcode'
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='Zipcode'
                            value={fields.location.zipcode}
                            onChange={handleChange}
                            autoComplete='postal-code'
                        />
                    </label>
                </div>

                <div className='mb-4 flex flex-wrap'>
                    <div className='w-full sm:w-1/3 pr-2'>
                        <label
                            htmlFor='beds'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Beds
                        </label>
                        <input
                            type='number'
                            id='beds'
                            name='beds'
                            className='border rounded w-full py-2 px-3'
                            required
                            value={fields.beds}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>

                    <div className='w-full sm:w-1/3 px-2'>
                        <label
                            htmlFor='baths'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Baths
                        </label>
                        <input
                            type='number'
                            id='baths'
                            name='baths'
                            className='border rounded w-full py-2 px-3'
                            required
                            value={fields.baths}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>

                    <div className='w-full sm:w-1/3 pl-2'>
                        <label
                            htmlFor='square_feet'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Square Feet
                        </label>
                        <input
                            type='number'
                            id='square_feet'
                            name='square_feet'
                            className='border rounded w-full py-2 px-3'
                            required
                            value={fields.square_feet}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>
                </div>

                <div className='mb-4'>
                    <legend
                        id='amenities'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Amenities
                    </legend>
                    <div
                        aria-labelledby='amenities'
                        className='grid grid-cols-2 md:grid-cols-3 gap-2'
                    >
                        {[
                            {
                                id: 'amenity_wifi',
                                label: 'Wifi',
                                value: 'Wifi',
                            },
                            {
                                id: 'amenity_kitchen',
                                label: 'Full Kitchen',
                                value: 'Full Kitchen',
                            },
                            {
                                id: 'amenity_washer_dryer',
                                label: 'Washer & Dryer',
                                value: 'Washer & Dryer',
                            },
                            {
                                id: 'amenity_free_parking',
                                label: 'Free Parking',
                                value: 'Free Parking',
                            },
                            {
                                id: 'amenity_pool',
                                label: 'Swimming Pool',
                                value: 'Swimming Pool',
                            },
                            {
                                id: 'amenity_hot_tub',
                                label: 'Hot Tub',
                                value: 'Hot Tub',
                            },
                            {
                                id: 'amenity_24_7_security',
                                label: '24/7 Security',
                                value: '24/7 Security',
                            },
                            {
                                id: 'amenity_wheelchair_accessible',
                                label: 'Wheelchair Accessible',
                                value: 'Wheelchair Accessible',
                            },
                            {
                                id: 'amenity_elevator_access',
                                label: 'Elevator Access',
                                value: 'Elevator Access',
                            },
                            {
                                id: 'amenity_dishwasher',
                                label: 'Dishwasher',
                                value: 'Dishwasher',
                            },
                            {
                                id: 'amenity_gym_fitness_center',
                                label: 'Gym/Fitness Center',
                                value: 'Gym/Fitness Center',
                            },
                            {
                                id: 'amenity_air_conditioning',
                                label: 'Air Conditioning',
                                value: 'Air Conditioning',
                            },
                            {
                                id: 'amenity_balcony_patio',
                                label: 'Balcony/Patio',
                                value: 'Balcony/Patio',
                            },
                            {
                                id: 'amenity_smart_tv',
                                label: 'Smart TV',
                                value: 'Smart TV',
                            },
                            {
                                id: 'amenity_coffee_maker',
                                label: 'Coffee Maker',
                                value: 'Coffee Maker',
                            },
                        ].map(({ id, label, value }) => (
                            <div key={id}>
                                <input
                                    type='checkbox'
                                    id={id}
                                    name='amenities'
                                    value={value}
                                    className='mr-2'
                                    checked={fields.amenities.includes(value)}
                                    onChange={handleAmenitiesChange}
                                />
                                <label htmlFor={id}>{label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mb-4 bg-blue-50 p-4'>
                    <fieldset className='border-none'>
                        <legend
                            id='rates'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Rates (Leave blank if not applicable)
                        </legend>
                        <div
                            aria-labelledby='rates'
                            className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'
                        >
                            {[
                                {
                                    id: 'weekly_rate',
                                    label: 'Weekly',
                                    name: 'rates.weekly',
                                    autoComplete: 'weekly_rate',
                                },
                                {
                                    id: 'monthly_rate',
                                    label: 'Monthly',
                                    name: 'rates.monthly',
                                    autoComplete: 'monthly_rate',
                                },
                                {
                                    id: 'nightly_rate',
                                    label: 'Nightly',
                                    name: 'rates.nightly',
                                    autoComplete: 'nightly_rate',
                                },
                            ].map(({ id, label, name, autoComplete }) => (
                                <div key={id} className='flex items-center'>
                                    <label
                                        htmlFor={id}
                                        className='mr-2 text-gray-600'
                                    >
                                        {label}
                                    </label>
                                    <input
                                        type='number'
                                        id={id}
                                        name={name}
                                        className='border rounded w-full py-2 px-3'
                                        value={
                                            fields.rates[label.toLowerCase()]
                                        }
                                        onChange={handleChange}
                                        autoComplete={autoComplete}
                                        aria-labelledby={`rates ${id}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='seller_name'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Seller Name
                    </label>
                    <input
                        type='text'
                        id='seller_name'
                        name='seller_info.name'
                        className='border rounded w-full py-2 px-3'
                        placeholder='Name'
                        value={fields.seller_info.name}
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='seller_email'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Seller Email
                    </label>
                    <input
                        type='email'
                        id='seller_email'
                        name='seller_info.email'
                        className='border rounded w-full py-2 px-3'
                        placeholder='Email address'
                        required
                        value={fields.seller_info.email}
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='seller_phone'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Seller Phone
                    </label>
                    <input
                        type='tel'
                        id='seller_phone'
                        name='seller_info.phone'
                        className='border rounded w-full py-2 px-3'
                        placeholder='Phone'
                        value={fields.seller_info.phone}
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='images'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Images (Select up to 4 images)
                    </label>
                    <input
                        type='file'
                        id='images'
                        name='images'
                        className='border rounded w-full py-2 px-3'
                        accept='image/*'
                        multiple
                        onChange={handleImageChange}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <button
                        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Add Property
                    </button>
                </div>
            </form>
        )
    );
};

export default AddPropertyForm;
