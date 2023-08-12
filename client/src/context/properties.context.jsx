import { createContext, useEffect, useState } from "react";
import { httpGetAllCurrentProperties, httpGetAllRentalProperties } from "../utils/api";

export const PropertiesContext = createContext({
    allCurrentProjects: null,
    setAllCurrentProjects: () => {},

    allRentalProjects: null,
    setAllRentalProjects: () => {},
})


export const PropertiesProvider = ({ children }) => {

    const [allCurrentProjects, setAllCurrentProjects] = useState([]);

    const [allRentalProjects, setAllRentalProjects] = useState([]);

    useEffect(()=> {
        let getAllProjects = async () => {
            let projectArray = await httpGetAllCurrentProperties();
            console.log(projectArray);
            setAllCurrentProjects(projectArray)
        }
        getAllProjects();
    }, [])

    
    useEffect(()=> {
        let getAllProjects = async () => {
            let projectArray = await httpGetAllRentalProperties();
            console.log(projectArray);
            setAllRentalProjects(projectArray)
        }
        getAllProjects();
    }, [])


    const value = {
        allCurrentProjects,
        setAllCurrentProjects,

        allRentalProjects,
        setAllRentalProjects
    }

    return (
        <PropertiesContext.Provider value={value}>
           {children} 
        </PropertiesContext.Provider>
    )
}