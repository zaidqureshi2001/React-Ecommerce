// utils/navigation.js

import { useNavigate } from 'react-router-dom';

export const useSmoothNavigate = () => {
    const navigate = useNavigate();

    const smoothNavigate = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return smoothNavigate;
};
