import React, { memo, useState } from "react";
import "./style.scss";
import { BsFacebook, BsInstagram, BsBezier2, BsFillHouseDoorFill, BsMailbox } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";
import { formater } from '../../../../utils/fomater';
import { ROUTERS } from '../../../../utils/routers';

const Header = () => {
    const [menus, setMEnus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Sản phẩm",
            path: "",
            inShowSubmenu: false,
            child: [
                { name: "Thịt", path: "" },
                { name: "Rau củ", path: "" },
                { name: "Thức ăn nhanh", path: "" },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ]);

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li><BsMailbox /> hello@gmail.com</li>
                                <li>miễn phí ship {formater(200000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li><Link to=""><BsFacebook /></Link></li>
                                <li><Link to=""><BsInstagram /></Link></li>
                                <li><Link to=""><IoLogoLinkedin /></Link></li>
                                <li><Link to=""><BsFillHouseDoorFill /></Link><span>Đăng nhập</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>SIVI SHOP</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => {
                                        return (  // Cần trả về giá trị JSX trong map()
                                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                                <Link to={menu?.path}>{menu?.name}</Link>
                                                {
                                                    menu.child && (
                                                        <ul className="header__menu_dropdown">
                                                            {
                                                                menu.child.map((chilItme, chilKey) => (
                                                                    <li key={'${menuKey}-${childKey}'}>
                                                                        <Link to={chilItme.path}>{chilItme.name}</Link>
                                                                    </li>
                                                                ))
                                                            }

                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        );
                                    })
                                }
                                {/* <li>
                                    <ul>
                                        <li>Thịt</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formater(111222)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#"><AiOutlineShoppingCart /><span>5</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);