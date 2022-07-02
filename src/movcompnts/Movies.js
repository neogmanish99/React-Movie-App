import React from "react";
import { useGlobalContext } from "./context";

const Movies = () => {
    const { movie } = useGlobalContext();
    return (
        <>
            {movie.map((currentMov) => {
                return (
                    <>
                        <div>
                            <h2>{currentMov.Title}</h2>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Movies;
