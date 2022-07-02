//1.Context(main store)
//2.Provider(delivery guy)
//3.Consumer (useContext())

import React, { useContext, useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=a4489a4d&s=titanic";

// 1.
const AppContext = React.createContext();

// 2.
// We need to create a provider func
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.error,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMovies(API_URL);
    }, []);

    return (
        <AppContext.Provider value={{ isLoading, isError, movie }}>
            {children}
        </AppContext.Provider>
    );
};

//3. We can also create a global useContext hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
