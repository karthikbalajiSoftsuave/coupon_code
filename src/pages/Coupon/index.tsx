import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { MenuButton } from "../../components/MenuButton";
import { ClaimRules } from "./ClaimRules";
import { CouponGeneration } from "./CouponGeneration";
import { ProductCoupon } from "./ProductCoupon";
import DiscountIcon from "../../assets/icons/discount.svg"
import AddProductsIcon from "../../assets/icons/add-product.svg"
import SignatureIcon from "../../assets/icons/signature.svg"
import SearchIcon from "../../assets/icons/search.svg"
import "./styles.scss"

type Tprops = {

}

export const Coupon: React.FC<Tprops> = () => {
    return (
        <div className="coupon-page">
            <div className="coupon-page-header">
                <MenuButton path={"/coupon-code/coupons/coupon-generation"} img={DiscountIcon} name={"Coupon Generations"} />
                <MenuButton path={"/coupon-code/coupons/claim-rules"} img={AddProductsIcon} name={"Products"} />
                <MenuButton path={"/coupon-code/coupons/products"} img={SignatureIcon} name={"Claim Rules"} />
                <MenuButton path={"/coupon-code/coupons/summary"} img={SearchIcon} name={"Summary"} />
            </div>
            <div>
                <Routes>
                    <Route path="/*" element={<Navigate replace to="/coupon-code/coupons/coupon-generation" />} />
                    <Route path="/coupon-generation" element={<CouponGeneration />} />
                    <Route path="/claim-rules" element={<ClaimRules />} />
                    <Route path="/products" element={<ProductCoupon />} />
                </Routes>
            </div>
        </div>
    )
}