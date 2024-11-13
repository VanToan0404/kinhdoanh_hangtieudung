import { memo } from "react";
import Header from "../header";
import Footer from "../footer"; 

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header /> {/* Sử dụng Header ở đây */}
            {children} {/* Đảm bảo sử dụng đúng prop children */}
            <Footer /> {/* Sử dụng Footer ở đây */}
        </div>
    );
};

export default memo(MasterLayout);
