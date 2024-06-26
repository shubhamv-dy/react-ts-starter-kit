import { useState, useCallback } from 'react';
import axiosInstance from '../axiosInstance';
import apiMethods from '../utils/constants/apiMethods';

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callApi = useCallback(async (method: unknown, url: string, data?: any, params = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance({
                method,
                url,
                data,
                params,
            });
            setLoading(false);
            return response.data;
        } catch (err:any) {
            setLoading(false);
            setError(err);
            throw err;
        }
    }, []);

    return { callApi, loading, error, apiMethods };
};

export default useApi;
