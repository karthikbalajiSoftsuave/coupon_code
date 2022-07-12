import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClaimRules } from "./ClaimRules";
import { CouponGeneration } from "./CouponGeneration";
import { ProductCoupon } from "./ProductCoupon";

type Tprops = {

}

export const Coupon: React.FC<Tprops> = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/coupon-code/coupons/coupon-generation" />} />
                    <Route path="/coupon-generation" element={<CouponGeneration />} />
                    <Route path="/claim-rules" element={<ClaimRules />} />
                    <Route path="/products" element={<ProductCoupon />} />
                </Routes>
            </div>
        </div>
    )
}