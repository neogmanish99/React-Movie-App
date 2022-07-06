import React, { useState, useEffect } from "react";

// In our React app sometimes we want to access the parameters of the
// current route in this case useParams hook comes into action.
import { useParams, NavLink } from "react-router-dom";
import { API_URL } from "./context";

const Movieinfo = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");

    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        //Using the debouncing functionality
        let timer = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, 900);

        //Cleanup function
        return () => {
            clearTimeout(timer);
        };
    }, [id]);

    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="loading">Loading...</div>
            </div>
        );
    }
    return (
        <>
            <section className="movie-section">
                <div className="movie-card">
                    <figure>
                        <img src={movie.Poster} alt="" />
                    </figure>
                    <div className="card-content">
                        <p className="title">{movie.Title}</p>
                        <p className="card-text">{movie.Released}</p>
                        <p className="card-text">{movie.Genre}</p>
                        <p className="card-text">{movie.imdbRating}</p>
                        <p className="card-text">{movie.Country}</p>
                        <NavLink to="/" className="back-btn">
                            Go Back
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movieinfo;
