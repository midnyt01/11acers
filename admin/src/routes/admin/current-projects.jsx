import React from 'react'
import Topbar from '../../component/admin-panel-components/admin-topbar/topbar.component'
import styled from 'styled-components'
import AddCurrentProjects from '../../component/admin-panel-components/add-current-projects'
import AllCurrentProjects from '../../component/admin-panel-components/all-current-projects'

const Header = styled.h1`
    margin: 100px 0px 0px 50px;
`

const CurrentProjects = () => {
  return (
    <>
    <Topbar />
    <Header>
        Current Projects
    </Header>
    <AddCurrentProjects />
    <AllCurrentProjects />
    </>
  )
}

export default CurrentProjects