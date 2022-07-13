import React from "react";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

type Tprops = {

}
export const RootRoutes: React.FC<Tprops> = () => {
    const isValid = true;
    return (
        isValid ? <PrivateRoutes /> : <PublicRoutes />
    )
}