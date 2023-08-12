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


const AllRentalProjects = () => {

    const {allRentalProjects} = useContext(PropertiesContext)

  return (
    <Container>
        <Header>All Projects</Header>
        <Wrapper>
        {
            allRentalProjects && allRentalProjects.map((project) => {
                return (
                        <PropertyCard key={project.PropertyId} project={project} type={"rental"} />
                )
            })
        }
        </Wrapper>
    </Container>
  )
}

export default AllRentalProjects