import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'RealEstateHunter | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout;
