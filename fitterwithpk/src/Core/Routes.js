//routing files
import React, { lazy, Suspense, } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../modules/common/GuestHome";
import { RENDER_URL } from "../Utils/Urls";
import RootRouteGuard from "./RootRouteGuard";
import Login from "../modules/common/Login";
import Register from "../modules/common/Registration";
import WeeklyUpdatesTable from "../modules/common/WeeklyUpdatesTable";
const AdminDashboard = lazy(() => import("../modules/admin/AdminHome"))
const DailyUpdates = lazy(() => import("../modules/user/DailyUpdates"))
const DailyUpdatesTable =lazy(() => import("../modules/common/DailyUpdatesTable"))
const StaffDashBoard = lazy(() => import("../modules/user/UserHome"))
const ViewClient = lazy(() => import("../modules/admin/UserProfile"))
const WeeklyUpdates = lazy(() => import("../modules/user/WeeklyUpdates"))

const RoutesComponent = ({ history }) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="displayNone"></div>}>
                <Routes>
                    <Route path="/" element={<Home history={history} />} />
                    <Route path={RENDER_URL.GUEST_DASHBOARD} element={<Home history={history} />} />
                    <Route path={RENDER_URL.LOGIN_URL} element={<Login history={history} />} />
                    <Route path={RENDER_URL.REGISTER_URL} element={<Register history={history} />} />


                    <Route element={<RootRouteGuard />}>
                        <Route path={RENDER_URL.ADMIN_DASHBOARD} element={<AdminDashboard />} />
                        <Route path={RENDER_URL.STAFF_DASHBOARD} element={<StaffDashBoard />} />
                        <Route path={RENDER_URL.DAILY_UPDATES} element={<DailyUpdates />} />
                        <Route path={RENDER_URL.VIEW_WEEKLY_UPDATES} element={<WeeklyUpdatesTable />} />
                        
                        <Route path={RENDER_URL.VIEW_DAILY_UPDATES} element={<DailyUpdatesTable />} />
                        <Route path={`${RENDER_URL.VIEW_CLIENT}/:id`} element={<ViewClient />} />
                        <Route path={RENDER_URL.WEEKLY_UPDATES} element={<WeeklyUpdates />} />
                        
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default RoutesComponent;