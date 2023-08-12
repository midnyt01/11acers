import React, { useContext } from 'react'
import styled from 'styled-components'
import { PropertiesContext } from '../../context/admin/properties.context';
import PropertyCard from './property-card';

const Container = styled.div`
    margin: 80px 0px 80px 50px;
`;

const Header = styled.h2`
    font-family: Roboto;
    text-decoration: underline;
    font-size: 30px;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 80px;
    column-gap: 20px;
`;


const AllCurrentProjects = () => {

    const {allCurrentProjects} = useContext(PropertiesContext)

  return (
    <Container>
        <Header>All Projects</Header>
        <Wrapper>
        {
            allCurrentProjects && allCurrentProjects.map((project) => {
                return (
                        <PropertyCard key={project.PropertyId} project={project} type={"current"} />
                )
            })
        }
        </Wrapper>
    </Container>
  )
}

export default AllCurrentProjects