import React, { useContext } from "react";
import { FirstName, LastName } from "./context";
import { useGlobalHook } from "./context";

const Home = () => {
    const Fname = useContext(FirstName);
    const Lname = useContext(LastName);
    const City = useGlobalHook();
    return (
        <>
            <h1>My home</h1>
            <p>{`${Lname} ${Fname}`}</p>
            <p>{City}</p>
        </>
    );
};

export default Home;
