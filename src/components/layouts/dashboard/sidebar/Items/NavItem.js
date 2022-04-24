import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem(props) {
    return (
        <li className="nav-item" >
            <NavLink to={props.route} className="nav-link">
                <i className={props.icon} />
                <p>
                    {props.name}
                    {props.children ? <i className="right fas fa-angle-left" /> : ""}
                </p>
            </NavLink>
        </li>
    );
}

export default NavItem;
