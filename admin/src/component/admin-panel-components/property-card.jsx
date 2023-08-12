import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { httpRemoveCurrentProperty, httpRemoveRentalProperty } from '../../utils/nodejs/admin';
import { PropertiesContext } from '../../context/admin/properties.context';

const Container = styled.div`
  width: 100%;
  height: 300px;
`;

const Wrapper = styled.div`
    width: 90%;
    height: inherit;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`;

const Desc = styled.p``;

const DeleteButton = styled.button`
    border: none;
    padding: 10px 30px;
    background-color: #ffab27;
    border-radius: 5px;
    cursor: pointer;
`;

const DeleteCard = styled.div`
    position: fixed;
    top: 300px;
    background-color: white;
    border-radius: 10px;
    width: 350px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow:
  0px 0px 2.2px rgba(0, 0, 0, 0.02),
  0px 0px 5.3px rgba(0, 0, 0, 0.028),
  0px 0px 10px rgba(0, 0, 0, 0.035),
  0px 0px 17.9px rgba(0, 0, 0, 0.042),
  0px 0px 33.4px rgba(0, 0, 0, 0.05),
  0px 0px 80px rgba(0, 0, 0, 0.07)
;
`;

const CloseDelete = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 0 0;
    margin: 0;
    text-align: right;

`

const DeleteText = styled.div`
    width: 90%;
    margin: 20px auto;
    text-align: center;
    font-size: 16px;
`;

const Confirmation = styled.div`
    width: 60%;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
`

const Yes = styled.div`
    box-sizing: border-box;
    padding: 5px 30px;
    color: white;
    background-color: coral;
    font-weight: 600;
    cursor: pointer;
`;

const No = styled.div`
    box-sizing: border-box;
    padding: 5px 20px;
    color: white;
    background-color: greenyellow;
    font-weight: 600;
    cursor: pointer;`;


const PropertyCard = ({project, type}) => {
    const {allCurrentProjects, setAllCurrentProjects, allRentalProjects, setAllRentalProjects} = useContext(PropertiesContext)

    const {PropertyId, ImageUrl, Description} = project;

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const toggleDeleteCard = () => {
        setIsDeleteOpen(!isDeleteOpen);
    }

    const confirmDeleteProject = async () => {
        if (type == "current") {
            try {
                let response = await httpRemoveCurrentProperty(PropertyId);
                console.log(response)
                if (response.success) {
                    toggleDeleteCard();
                    let newPropertyArray = allCurrentProjects.filter((project) => {return (project.PropertyId != PropertyId)});
                    setAllCurrentProjects(newPropertyArray)
                }
            } catch (error) {
                    console.log(error)
                }
            } else if (type == "rental") {
                try {
                    let response = await httpRemoveRentalProperty(PropertyId);
                    console.log(response)
                    if (response.success) {
                        toggleDeleteCard();
                        let newPropertyArray = allRentalProjects.filter((project) => {return (project.PropertyId != PropertyId)});
                        setAllRentalProjects(newPropertyArray)
                    }
                } catch (error) {
                        console.log(error)
                    }
                }
        }


  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <img src={ImageUrl} alt="property image" />
            </ImageContainer>
            <Desc>{Description}</Desc>
            <DeleteButton onClick={toggleDeleteCard}>Remove Project</DeleteButton>
        </Wrapper>
        {
            isDeleteOpen && <DeleteCard>
            <CloseDelete>
                <FontAwesomeIcon icon={faRemove} size="xl" style={{cursor: 'pointer'}} onClick={toggleDeleteCard}/>
            </CloseDelete>
            <DeleteText>Are you sure you want to delete this Project - <b>{Description}</b></DeleteText>
            <Confirmation>
                <No onClick={toggleDeleteCard}>No</No>
                <Yes onClick={confirmDeleteProject} >Yes</Yes>
            </Confirmation>
        </DeleteCard>
        }
    </Container>
  )
}

export default PropertyCard