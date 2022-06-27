import React from "react";

// In our React app sometimes we want to access the parameters of the
// current route in this case useParams hook comes into action.
import { useParams } from "react-router-dom";

const Movieinfo = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Our movie details {id}</h1>
        </>
    );
};

export default Movieinfo;
