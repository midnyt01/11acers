import { createContext, useEffect, useState } from "react";
import { httpGetAllCurrentProperties, httpGetAllRentalProperties } from "../../utils/nodejs/admin";

export const PropertiesContext = createContext({
    currentPropertyFile: null,
    setCurrentPropertyFile: () => {},
    currentPropertyImageUrl: null,
    setCurrentPropertyImageUrl: () => {},
    currentPropertyDesc: null,
    setCurrentPropertyDesc: () => {},
    allCurrentProjects: null,
    setAllCurrentProjects: () => {},

    rentalPropertyFile: null,
    setRentalPropertyFile: () => {},
    rentalPropertyImageUrl: null,
    setRentalPropertyImageUrl: () => {},
    rentalPropertyDesc: null,
    setRentalPropertyDesc: () => {},
    allRentalProjects: null,
    setAllRentalProjects: () => {},
})


export const PropertiesProvider = ({ children }) => {

    const [currentPropertyFile, setCurrentPropertyFile] = useState(null);
    const [currentPropertyImageUrl, setCurrentPropertyImageUrl] = useState("");
    const [currentPropertyDesc, setCurrentPropertyDesc] = useState("");
    const [allCurrentProjects, setAllCurrentProjects] = useState([]);

    const [rentalPropertyFile, setRentalPropertyFile] = useState(null);
    const [rentalPropertyImageUrl, setRentalPropertyImageUrl] = useState("");
    const [rentalPropertyDesc, setRentalPropertyDesc] = useState("");
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
        currentPropertyFile,
        setCurrentPropertyFile,
        currentPropertyImageUrl,
        setCurrentPropertyImageUrl,
        currentPropertyDesc,
        setCurrentPropertyDesc,
        allCurrentProjects,
        setAllCurrentProjects,

        rentalPropertyFile,
        setRentalPropertyFile,
        rentalPropertyImageUrl,
        setRentalPropertyImageUrl,
        rentalPropertyDesc,
        setRentalPropertyDesc,
        allRentalProjects,
        setAllRentalProjects
    }

    return (
        <PropertiesContext.Provider value={value}>
           {children} 
        </PropertiesContext.Provider>
    )
}