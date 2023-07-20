import Page from '@/component/test'

import Menu from '@/component/molecule/menu'
import MenuItem from '@/component/atom/menu_item'
import CenterProduct from '@/component/molecule/center_product'
import CenterSection from '@/component/molecule/center_section'
import SidebarProduct from '@/component/molecule/sidebar_product'
import SidebarComment from '@/component/molecule/sidebar_comment'

export default function Home() {
  return (
<>
    {/*    <div id="preloder">
        <div className="loader"></div>
    </div> */}

    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header__logo">
                        <a href="./index.html">
                            <img src="img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="header__nav">
                        <nav className="header__menu mobile-menu">
                            <Menu>
                                <MenuItem href="./index.html" string="Homepage" active="1"/>
                                <MenuItem href="./categories.html" string="Categories" icon="arrow_carrot-down">
                                    <Menu dropdown="1">
                                        <MenuItem href="./categories.html" string="Categories"/>
                                        <MenuItem href="./anime-details.html" string="Anime Details"/>
                                        <MenuItem href="./anime-watching.html" string="Anime Watching"/>
                                        <MenuItem href="./blog-details.html" string="Blog Details"/>
                                        <MenuItem href="./signup.html" string="Sign Up"/>
                                        <MenuItem href="./login.html" string="Login"/>
                                    </Menu>
                                </MenuItem>
                                <MenuItem href="./blog.html" string="Our Blog"/>
                                <MenuItem href="#" string="Contacts"/>
                            </Menu>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="header__right">
                        <a href="#" className="search-switch">
                            <span className="icon_search"></span>
                        </a>
                        <a href="./login.html">
                            <span className="icon_profile"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>

    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="trending__product">
                        <CenterSection string="Trending Now"/>
                        <div className="row">
                            <CenterProduct img="img/trending/trend-1.jpg" string="The Seven Deadly Sins: Wrath of the Gods"/>
                            <CenterProduct img="img/trending/trend-2.jpg" string="Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien"/>
                            <CenterProduct img="img/trending/trend-3.jpg" string="Shingeki no Kyojin Season 3 Part 2"/>
                            <CenterProduct img="img/trending/trend-4.jpg" string="Fullmetal Alchemist: Brotherhood"/>
                            <CenterProduct img="img/trending/trend-5.jpg" string="Shiratorizawa Gakuen Koukou"/>
                            <CenterProduct img="img/trending/trend-6.jpg" string="Code Geass: Hangyaku no Lelouch R2"/>
                        </div>
                    </div>
                    <div className="popular__product">
                        <CenterSection string="Popular Shows"/>
                        <div className="row">
                            <CenterProduct img="img/popular/popular-1.jpg" string="Sen to Chihiro no Kamikakushi"/>
                            <CenterProduct img="img/popular/popular-2.jpg" string="Kizumonogatari III: Reiket su-hen"/>
                            <CenterProduct img="img/popular/popular-3.jpg" string="Shirogane Tamashii hen Kouhan sen"/>
                            <CenterProduct img="img/popular/popular-4.jpg" string="Rurouni Kenshin: Meiji Kenkaku Romantan"/>
                            <CenterProduct img="img/popular/popular-5.jpg" string="Mushishi Zoku Shou 2nd Season"/>
                            <CenterProduct img="img/popular/popular-5.jpg" string="Monogatari Series: Second Season"/>
                        </div>
                    </div>
                    <div className="recent__product">
                        <CenterSection string="Recently Added Shows"/>
                        <div className="row">
                            <CenterProduct img="img/recent/recent-1.jpg" string="Great Teacher Onizuka"/>
                            <CenterProduct img="img/recent/recent-2.jpg" string="Fate/stay night Movie: Heaven&apos;s Feel - II. Lost"/>
                            <CenterProduct img="img/recent/recent-3.jpg" string="Mushishi Zoku Shou: Suzu no Shizuku"/>
                            <CenterProduct img="img/recent/recent-4.jpg" string="Fate/Zero 2nd Season"/>
                            <CenterProduct img="img/recent/recent-5.jpg" string="Kizumonogatari II: Nekket su-hen"/>
                            <CenterProduct img="img/recent/recent-6.jpg" string="The Seven Deadly Sins: Wrath of the Gods"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="product__sidebar">
                        <div className="product__sidebar__view">
                            <div className="section-title">
                                <h5>Top Views</h5>
                            </div>
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Day</li>
                                <li data-filter=".week">Week</li>
                                <li data-filter=".month">Month</li>
                                <li data-filter=".years">Years</li>
                            </ul>
                            <div className="filter__gallery">
                                <SidebarProduct img="img/sidebar/tv-1.jpg" string="Boruto: Naruto next generations"/>
                                <SidebarProduct img="img/sidebar/tv-2.jpg" string="The Seven Deadly Sins: Wrath of the Gods"/>
                                <SidebarProduct img="img/sidebar/tv-3.jpg" string="Sword art online alicization war of underworld"/>
                                <SidebarProduct img="img/sidebar/tv-4.jpg" string="Fate/stay night: Heaven&apos;s Feel I. presage flower"/>
                                <SidebarProduct img="img/sidebar/tv-5.jpg" string="Fate stay night unlimited blade works"/>
                            </div>
                        </div>
                        <div className="product__sidebar__comment">
                            <div className="section-title">
                                <h5>New Comment</h5>
                            </div>
                            <SidebarComment img="img/sidebar/comment-1.jpg" string="The Seven Deadly Sins: Wrath of the Gods"/>
                            <SidebarComment img="img/sidebar/comment-2.jpg" string="Shirogane Tamashii hen Kouhan sen"/>
                            <SidebarComment img="img/sidebar/comment-3.jpg" string="Kizumonogatari III: Reiket su-hen"/>
                            <SidebarComment img="img/sidebar/comment-4.jpg" string="Monogatari Series: Second Season"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer">
        <div className="page-up">
            <a href="#" id="scrollToTopButton">
                <span className="arrow_carrot-up"></span>
            </a>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer__logo">
                        <a href="./index.html">
                            <img src="img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer__nav">
                        <Menu>
                            <MenuItem href="./index.html" active="1" string="Homepage"/>
                            <MenuItem href="./index.html" string="Categories"/>
                            <MenuItem href="./index.html" string="Our Blog"/>
                            <MenuItem href="./index.html" string="Contacts"/>
                        </Menu>
                    </div>
                </div>
                <div className="col-lg-3">
                    {/* <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p> */}

                </div>
            </div>
        </div>
    </footer>

    <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">
                <i className="icon_close"></i>
            </div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
</>
)
}