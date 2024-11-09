'use client';
import PuffLoader from 'react-spinners/PuffLoader';

const override = {
    display: 'block',
    margin: '100px auto',
};

const LoadingPage = ({ loading }) => {
    return (
        <PuffLoader
            color='#1d4ed8'
            loading={loading}
            cssOverride={override}
            size={300}
            aria-label='Loading Spinner'
        />
    );
};

export default LoadingPage;
