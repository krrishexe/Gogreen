import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/Api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchFromApi(endpoint);
        setData(res);
    };

    return { data };
};
export default useFetch;