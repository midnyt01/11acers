import React, { useContext } from "react";
import styled from "styled-components";
import AddPropertyImage from "./add-property-image";
import { PropertiesContext } from "../../context/admin/properties.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { httpPostCurrentProperty } from "../../utils/nodejs/admin";

const Container = styled.div`
  margin: 50px 0px 0px 50px;
`;

const Header = styled.h2`
  font-family: Roboto;
  text-decoration: underline;
  font-size: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const RemoveButton = styled.div`
  scale: 0;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.32);
  box-sizing: border-box;
  padding: 1px 7px;
  top: 8px;
  z-index: 20;
  right: 12px;
  cursor: pointer;
  transition: all 0.2s ease 1s;
`;

const CoverImageContainer = styled.div`
  max-width: 200px;
  max-height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  &:hover ${RemoveButton} {
    scale: 1;
    transition-delay: 0s;
  }
`;
const CoverImage = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  margin-top: 30px;
`;

const ProjectDesc = styled.input`
  width: 60%;
  padding: 5px 10px;
  font-size: 20px;
`;

const AddProject = styled.button`
  width: fit-content;
  border: none;
  padding: 12px 40px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 0.2px;
  font-size: 15px;
  background-color: yellowgreen;
  cursor: pointer;

  &:hover {
    background-color: #b0e542;
  }
`;

const AddCurrentProjects = () => {
  const {
    currentPropertyTitle,
    setCurrentPropertyTitle,
    currentPropertyDesc,
    setCurrentPropertyDesc,
    setCurrentPropertyFile,
    currentPropertyFile,
    currentPropertyImageUrl,
    setCurrentPropertyImageUrl,
    allCurrentProjects,
    setAllCurrentProjects
  } = useContext(PropertiesContext);

  
  const handleOnProjectTitleChange = (e) => {
    const { value } = e.target;
    setCurrentPropertyTitle(value);
  };

  const handleOnProjectDescChange = (e) => {
    const { value } = e.target;
    setCurrentPropertyDesc(value);
  };

  const handleRemoveCoverImage = () => {
    setCurrentPropertyFile(null);
  };

  const handlePostImage = async () => {
    console.log("hello");
    // event.preventDefault();
    const formData = new FormData();
    formData.append("file", currentPropertyFile);

    // Send the file to the server for processing
    console.log(formData);
    //if cover image form is from blog then do this
    try {
        let response = await fetch('https://api.11acre.in/admin/current-property-image', {
        // let response = await fetch('http://localhost:8009/admin/current-property-image', {
            method: 'POST',
            body: formData
          })
          let data = await response.json();
          console.log('Image url')
          setCurrentPropertyImageUrl(data.url)
          return {
            success: true,
            ImageUrl : data.url
          };
        //else if statement
    } catch (error) {
        console.error('Error in posting image', error);
        return false;
    }
  }


  const handleAddProjects = async () => {
    //adding image
        let imageUpload = await handlePostImage();
        if (imageUpload.success) {
            try {
                //posting project
            let data = {
                ImageUrl: imageUpload.ImageUrl,
                Title: currentPropertyTitle,
                Description: currentPropertyDesc,
              };
              //send api call
              console.log(data);
              let response = await httpPostCurrentProperty(data);
              if (response.success) {
                setCurrentPropertyFile(null);
                setCurrentPropertyTitle("");
                setCurrentPropertyDesc("");
                alert("Current Property Updated Successfully");
                //update all current property list
                setAllCurrentProjects([{PropertyId: response.PropertyId, ...data}, ...allCurrentProjects])
              } else {
                alert("Error in Posting Current Property");
              }
            } catch (error) {
                alert('error in uploading project, try again later')
            }
        } else {
            alert('error in uploading image, try again later')
        }
        
    
  };

  return (
    <Container>
      <Header>Add New Current Project</Header>
      <Wrapper>
        <ImageContainer>
          {!currentPropertyFile ? (
            <AddPropertyImage type={"current"} />
          ) : (
            <CoverImageContainer>
              <CoverImage src={URL.createObjectURL(currentPropertyFile)} />
              <RemoveButton onClick={handleRemoveCoverImage}>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
              </RemoveButton>
            </CoverImageContainer>
          )}
        </ImageContainer>
        <InfoContainer>
          <ProjectDesc
            placeholder="Project Name"
            value={currentPropertyTitle}
            onChange={handleOnProjectTitleChange}
          />
          <ProjectDesc
            placeholder="Project Description"
            value={currentPropertyDesc}
            onChange={handleOnProjectDescChange}
          />
          <AddProject onClick={handleAddProjects}>Add Project</AddProject>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default AddCurrentProjects;
