import React from 'react';
import NavItem from "./Items/NavItem";
import "@fortawesome/fontawesome-svg-core"
import MainSidebar from "./Items/MainSidebar";
import Nav from './Items/Nav';
import { BOOKS, DASHBOARD, PARTS, TESTS } from '../../../../routes/CONSTANTS';

function Sidebar() {
    return (
        <MainSidebar>
            <NavItem route={DASHBOARD} name="Home" icon="nav-icon fa fa-home" />
            <Nav name="Entities" icon="nav-icon fas fa-brain" >
                <NavItem route={BOOKS} name="Books" icon="nav-icon fa fa-book" />
                <NavItem route={PARTS} name="Parts" icon="nav-icon fa fa-copy" />
                <NavItem route={TESTS} name="Tests" icon="nav-icon fa fa-edit" />
            </Nav>
            {/*<NavItem route="#" name="Settings" icon="nav-icon far fa-circle "/>*/}
            {/*<NavItem route="#" name="Settings" icon="nav-icon fa fa-hammer "/>*/}
        </MainSidebar>
    );
}

export default Sidebar;