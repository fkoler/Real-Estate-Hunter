import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import AuthProvider from '@/components/AuthProvider';

import '@/assets/styles/globals.css';

export const metadata = {
    title: 'RealEstateHunter | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default MainLayout;
