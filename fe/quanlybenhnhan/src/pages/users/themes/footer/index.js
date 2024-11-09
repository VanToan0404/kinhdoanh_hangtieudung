import React, { memo, useState } from "react"
import "./style.scss";
import { Link } from "react-router-dom";
import { IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
const foodter = () => {
    return (<>
        <foodter className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__about">
                            <h1 className="footer__about__logo">
                                SIVI shop
                            </h1>
                            <ul>
                                <li>
                                    Địa chỉ: 445/22/10, Tân Chánh Hiệp, Quận 12
                                </li>
                                <li>
                                    Phone: 0345687435
                                </li>
                                <li>
                                    Email: nguyentoan11111c@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer__abouut__widget">
                            <h6>Cữa hàng</h6>
                            <ul>
                                <li>
                                    <Link to="">Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to=""> Thông tin về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to="">sản phẩm kinh doanh</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to=""> Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to="">Giỏ hàng</Link>
                                </li>
                                <li>
                                    <Link to="">Danh sách ưu thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__widget">
                            <h6>Khuyễn mãi &  ưu đãi </h6>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action="#">
                                <div>
                                    <input type="Text" placeholder="Nhập email vào" />
                                    <button type="submit" className="button-submit">
                                        Đăng ký
                                    </button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                    <BsFacebook />
                                    </div>
                                    <div>
                                    <IoLogoInstagram/>
                                    </div>
                                    <div>
                                    <IoLogoLinkedin />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </foodter>
    </>
    );
};

export default memo(foodter);