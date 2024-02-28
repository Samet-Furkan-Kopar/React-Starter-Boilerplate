/* eslint-disable react/prop-types */
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import { useAccount } from "../../store/user/hooks";

export default function PrivateRoutes() {
    const user = useAccount();
    const location = useLocation(); 
    const outlet = useOutlet();
 
    if (!user?.id ) {
        return (   
            <Navigate
                to="/auth/login"
                replace={true}
                state={{
                    return_url: location.pathname,
                }}
            />
        );
    }
    return [outlet];
}


