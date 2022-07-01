//1.Context(main store)
//2.Provider(delivery guy)
//3.Consumer (useContext())

import React, { useContext } from "react";

// 1.
const FirstName = React.createContext();
const LastName = React.createContext();
const Address = React.createContext();
// 2.
// We need to create a provider func
const AppProvider = ({ children }) => {
    return (
        <FirstName.Provider value={"Manish"}>
            <LastName.Provider value={"Neog"}>
                <Address.Provider value={"Bahona Tini Ali"}>
                    {children}
                </Address.Provider>
            </LastName.Provider>
        </FirstName.Provider>
    );
};

//3. We can also create a global useContext hook

const useGlobalHook = () => {
    return useContext(Address);
};

export { FirstName, LastName, Address, AppProvider, useGlobalHook };
