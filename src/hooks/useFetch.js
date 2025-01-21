import { useState, useEffect } from 'react';

const cache = new Map();

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const cacheKey = JSON.stringify({ url, options });

    useEffect(() => {
        if (cache.has(cacheKey)) {
            setData(cache.get(cacheKey));
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, options);

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const result = await res.json();
                cache.set(cacheKey, result);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cacheKey]); 

    return { data, error, loading };
};

export default useFetch;