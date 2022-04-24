import React from "react";

function Nav(props) {
    return (
        <li className="nav-item" >
            <div className="nav-link" >
                <i className={props.icon} />
                <p>
                    {props.name}
                    {props.children ? <i className="right fas fa-angle-left" /> : ""}
                </p>
            </div>
            <ul className="nav nav-treeview" data-widget="treeview">
                {props.children}
            </ul>
        </li>
    );
}

export default Nav;
