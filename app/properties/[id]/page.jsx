'use client';
import {
    useRouter,
    useParams,
    useSearchParams,
    usePathname,
} from 'next/navigation';

const PropertyPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { id } = useParams();

    const name = searchParams.get('name');

    return (
        <div>
            <button onClick={() => router.push()} className='bg-blue-500 p-2'>
                Go Home {pathname}
            </button>
        </div>
    );
};

export default PropertyPage;
