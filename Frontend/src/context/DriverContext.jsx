import { createContext, useState } from "react";

export const DriverDataContext = createContext();


const DriverContext = ({ children }) => {
    const [driver, setDriver] = useState(null); // Store driver data
    const [isLoading, setIsLoading] = useState(false); // Indicates loading state
    const [error, setError] = useState(null); // Holds error information

    const updateDriver = (driverData) => {
        setDriver(driverData);
    };

    const value = {
        driver,
        isLoading,
        error,
        updateDriver,
        setDriver,
        setIsLoading,
        setError,
    };

    return (
        <DriverDataContext.Provider value={value}>
            {children}
        </DriverDataContext.Provider>
    );
};

export default DriverContext;
