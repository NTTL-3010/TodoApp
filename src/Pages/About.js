import React  from 'react'
import * as FaIcons from "react-icons/fa";
import logo from '../image/Me.png';
// import { IconName } from "react-icons/go";
export const About = () => {

    return (
        <React.Fragment>
        <section>
            <div class="abs-left">
                <div class="abs-profile">
                <img src={logo} />
                </div>
                <div class="abs-content"> 
                    <div class="abs-item abs-infor">
                        <div class="title">
                            <p class="bold">Thông tin cá nhân</p>
                        </div>
                        <ul>
                            <li>
                                <span className="text">Name : Nguyễn Thị Thuỳ Linh</span>
                            </li>
                            <li>
                                <span className="text">MSSV: 46.01.104.093</span>
                            </li>


                            <li>
                                <span className="text">SĐT: 0359391***</span>
                            </li>

                            <li>
                                <span className="text">Email: lnhlynh89@gmail.com</span>
                            </li>

                            <li>
                                <span className="text">Address: Xuân Tâm, Xuân Lộc, Đồng Nai</span>
                            </li>                        
                        </ul>
                    </div>
                    <div class="abs-item abs-skills">
                        <div class="title">
                            <p class="bold">KỸ NĂNG</p>
                        </div>
                        <ul>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                                <FaIcons.FaHtml5/>
                                            </div>
                                            <div className="text">HTML</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaCss3Alt/>
                                            </div>
                                            <div className="text">CSS</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaJs/>
                                            </div>
                                            <div className="text">JS</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaGitAlt/>
                                            </div>
                                            <div className="text">GIT</div>
                                        </div>
                                    </li>
                                </ul>

                    </div>
                   
                </div>

            </div>
        </section>
        </React.Fragment>
    )
};