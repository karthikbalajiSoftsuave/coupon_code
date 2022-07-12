import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Coupon } from "../pages/Coupon";
import { Dashboard } from "../pages/Dashboard";
import { History } from "../pages/History";
import { Reports } from "../pages/Reports";
import { Sidebar } from "./Sidebar";
import "./styles.scss"

type Tprops = {

}

export const Layout: React.FC<Tprops> = () => {
    return (
        <div className="layouts">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Navigate replace to="/coupon-code/dashboard" />} />
                <Route path="/coupons/*" element={<Coupon />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/history" element={<History />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </div>
    )
}