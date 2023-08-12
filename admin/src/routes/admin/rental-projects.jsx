import React from 'react'
import Topbar from '../../component/admin-panel-components/admin-topbar/topbar.component'
import styled from 'styled-components'
import AddRentalProjects from '../../component/admin-panel-components/add-rental-projects'
import AllRentalProjects from '../../component/admin-panel-components/all-rental-projects'

const Header = styled.h1`
    margin: 100px 0px 0px 50px;
`

const RentalProjects = () => {
  return (
    <>
    <Topbar />
    <Header>
        Rental Projects
    </Header>
    <AddRentalProjects />
    <AllRentalProjects />
    </>
  )
}

export default RentalProjects