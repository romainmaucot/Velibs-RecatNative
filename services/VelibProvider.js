import React, { createContext, useState, useEffect } from "react";

const getPosition = () => {
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position);
        }, reject,);
    });
};

const DISTANCE = 1000;

export const VelibContext = createContext(1);

const VelibProvider = ({ children }) => {
    const [velibs, setVelibs] = useState([]);
    const [position, setPosition] = useState([]);

    useEffect(() => {
        const update = async () => {
            const position = await getPosition();
            const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&geofilter.distance=${position.coords.latitude},${position.coords.longitude},${DISTANCE}&rows=50`;

            fetch(url)
                .then(response => response.json())
                .then(data => setVelibs(data));
            setPosition(position)
        }
        update();
    },[]);

    return (
        <VelibContext.Provider value={{ velibs, position }}>
            {children}
        </VelibContext.Provider>
    );
};

export default VelibProvider;
