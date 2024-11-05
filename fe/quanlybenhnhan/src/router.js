import { Routes,Route } from "react-router-dom";
import { ROUTERS } from "./utils/routers";
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/themes/masterLayout";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            Component: <ProfilePage />
        },
    ];
    return (
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key)=> (
                    <Route key={key}  path={item.path} element={item.Component}/>
                ))
            }
        </Routes>
        </MasterLayout>
    );
}
function RouterCustom() {
    return renderUserRouter();
}
export default RouterCustom;