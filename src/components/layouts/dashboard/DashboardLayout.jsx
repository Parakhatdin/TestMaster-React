import React from 'react'

import "admin-lte/plugins/fontawesome-free/css/all.min.css"
import "admin-lte/dist/css/adminlte.min.css"
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "admin-lte/plugins/jquery/jquery.min"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min"
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min"
import "admin-lte/dist/js/adminlte.min"
import "admin-lte/plugins/jquery-mousewheel/jquery.mousewheel"
import "admin-lte/plugins/raphael/raphael.min"
import "admin-lte/plugins/jquery-mapael/jquery.mapael.min"
import "admin-lte/plugins/jquery-mapael/maps/usa_states.min"
import "admin-lte/plugins/chart.js/Chart.min"
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'


export default function DashboardLayout() {
    document.body.className = "hold-transition light-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed";
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </div>
    )
}
