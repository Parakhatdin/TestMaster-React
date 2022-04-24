import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../components/layouts/dashboard/DashboardLayout'
import BookPage from '../pages/Dashboard/Books/BookPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import PartPage from '../pages/Dashboard/Parts/PartPage'
import TestPage from '../pages/Dashboard/Tests/TestPage'
import HomePage from '../pages/Home/HomePage'
import { BOOKS, DASHBOARD, HOME, LOGIN, PARTS, TESTS } from './CONSTANTS'

export default function Router() {
    return (
        <Routes>
            <Route path={HOME} element={<HomePage />} />
            <Route path={DASHBOARD} element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path={BOOKS} element={<BookPage />} />
                <Route path={PARTS} element={<PartPage />} />
                <Route path={TESTS} element={<TestPage />} />
            </Route>
            <Route path={LOGIN} />
        </Routes>
    )
}
