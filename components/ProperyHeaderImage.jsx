import Image from 'next/image';

const ProperyHeaderImage = ({ image }) => {
    return (
        <section>
            <div className='container-xl m-auto'>
                <div className='grid grid-cols-1'>
                    <Image
                        src={`/images/properties/${image}`}
                        alt={image}
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                        className='object-cover h-[400px] w-full'
                    />
                </div>
            </div>
        </section>
    );
};

export default ProperyHeaderImage;
