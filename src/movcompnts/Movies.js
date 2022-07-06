import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
    const { movie, isLoading } = useGlobalContext();
    if (isLoading) {
        return <h1>Is Loading?</h1>;
    }
    return (
        <>
            <section className="movie-page">
                <div className="container grid grid-4-col">
                    {movie.map((currentMovie) => {
                        const { imdbID, Title, Poster } = currentMovie;
                        const movieName = Title.substring(0, 20);
                        return (
                            <NavLink to={`/movie/${imdbID}`} key={imdbID}>
                                <div className="card">
                                    <div className="card-info">
                                        <h2>
                                            {movieName.length >= 15
                                                ? `${movieName}...`
                                                : movieName}
                                        </h2>
                                        <img src={Poster} alt={imdbID} />
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Movies;
