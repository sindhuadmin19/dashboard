import React from "react";
import "./sidebar.css";

import { IoIosArrowForward } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPaste } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrCube } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiDockTop } from "react-icons/bi";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="container">
            <div className="sub-container">
                <div className="den">
                    <div className="den1">
                        <img src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-dental-icon-png-image_1025127.jpg"width={'60px'}height={'67px'}/>
                    </div>
                    <div className="list-customer">
                    <a><FaCircleArrowRight /></a>
                        <div className="left">
                            <h3>List customer</h3>
                            <h3><IoIosArrowForward /></h3>
                            <h3>Jerome Bellingham</h3>
                        </div>
                        <div className="right">
                            <div className="l">
                                <a className="search"><IoSearch /></a>
                                <a><GoBell /></a>
                            </div>
                            <div className="r">
                                <div className="img">
                                    <img src="https://w7.pngwing.com/pngs/252/546/png-transparent-computer-icons-female-avatar-administrator-face-heroes-hand.png"/>
                                </div>
                                <div className="contact">
                                    <a className="admin">Alexander Arnold</a>
                                    <a>as a Administrator </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <div className="side-bar">
                        <div className="side-bar1">
                            <p><RxDashboard /></p>
                            <p><GoPaste /></p>
                            <p><FiUser /></p>
                            <p><CiCalendar /></p>
                            <p><GrCube /></p>
                            <p><BiDockTop /></p>
                        </div>
                        <div className="sidebar">
                            <p><FaRegQuestionCircle /></p>
                            <p><IoSettingsOutline /></p>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="c1">
                            <p>Patient Queue<a><IoSearch /></a></p>
                            <a><button>All</button>     <button>Oldest</button>     <button>Newest</button></a>
                        </div>
                        <div className="c2">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                            <div className="regi">Register 12 March 2023<a><FaArrowRight /></a></div>
                        </div>
                        <div className="c3">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                            <div className="regi">Register 12 March 2023<a><FaArrowRight /></a></div>
                        </div>
                        <div className="c4">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                            <div className="regi">Register 12 March 2023<a><FaArrowRight /></a></div>
                        </div>
                        <div className="c5">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                            <div className="regi">Register 12 March 2023<a><FaArrowRight /></a></div>
                        </div>
                        <div className="c6">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                            <div className="regi">Register 12 March 2023<a><FaArrowRight /></a></div>
                        </div>
                        <div className="c7">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                            <div className="regi">Register 12 March 2023<a><FaArrowRight /></a></div>
                        </div>
                        <div className="c8">
                            <div className="img1">
                                <div className="g">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png"width={'30px'}height={'30px'}/>
                                </div>
                                <div className="m"><BsThreeDots /></div>
                            </div>
                            <div className="name"><a>Bessie Cooper</a></div>
                        </div>
                    </div>
                    <div className="last">
                        <div className="first">
                            <div className="rows1"></div>
                            <div className="rows2"></div>
                        </div>
                        <div className="second">
                            <div className="row1"></div>
                            <div className="row2"></div>
                            <div className="row3"></div>
                        </div>
                        <div className="third">
                            <div className="ro1">
                                <h3>History dental</h3>
                                <div className="id">
                                    <div className="t1">
                                        <div className="d1">ID</div>
                                        <div className="d2">Type</div>
                                        <div className="d3">Treatment</div>
                                        <div className="d4">Date</div>
                                        <div className="d5">Result Treatment</div>
                                        <div className="d6">Payment Status</div>
                                        <div className="d7"></div>
                                    </div>
                                    <div className="t2">
                                        <div className="d1">#12324</div>
                                        <div className="d2"></div>
                                        <div className="d3">Implant</div>
                                        <div className="d4">12 Jun 2023</div>
                                        <div className="d5">Well done</div>
                                        <div className="d6">Pending</div>
                                        <div className="d7"><BsThreeDots /></div>
                                    </div>
                                    <div className="t3">
                                        <div className="d1">#20324</div>
                                        <div className="d2"></div>
                                        <div className="d3">Route canal</div>
                                        <div className="d4">4 May 2023</div>
                                        <div className="d5">Well done</div>
                                        <div className="d6">Paid</div>
                                        <div className="d7"><BsThreeDots /></div>
                                    </div>
                                    <div className="t4">
                                        <div className="d1">#57686</div>
                                        <div className="d2"></div>
                                        <div className="d3">Dentures</div>
                                        <div className="d4">2 Mar 2023</div>
                                        <div className="d5">Well done</div>
                                        <div className="d6">Paid</div>
                                        <div className="d7"><BsThreeDots /></div>
                                    </div>
                                    <div className="t5">
                                        <div className="d1">#68767</div>
                                        <div className="d2"></div>
                                        <div className="d3">Whitening</div>
                                        <div className="d4">16 Feb 2023</div>
                                        <div className="d5">Well done</div>
                                        <div className="d6">Paid</div>
                                        <div className="d7"><BsThreeDots /></div>
                                    </div>
                                    <div className="t6">
                                        <div className="d1">#69696</div>
                                        <div className="d2"></div>
                                        <div className="d3">Implant</div>
                                        <div className="d4">12 Jun 2023</div>
                                        <div className="d5">Well done</div>
                                        <div className="d6">Paid</div>
                                        <div className="d7"><BsThreeDots /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ro2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
     
  );
};

export default Sidebar;
