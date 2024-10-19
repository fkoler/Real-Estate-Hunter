import '@/assets/styles/globals.scss';

export const metadata = {
    title: 'RealEstateHunter | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
};

export default MainLayout;
