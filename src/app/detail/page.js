
import ProductDetail from '@/component/molecule/product_detail'
import ProductReview from '@/component/molecule/product_review'

export default function Detail() {
    return (
        <>
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
                            <ul>
                                <li className="active"><a href="./index.html">Homepage</a></li>
                                <li><a href="./categories.html">Categories <span className="arrow_carrot-down"></span></a>
                                    <ul className="dropdown">
                                        <li><a href="./categories.html">Categories</a></li>
                                        <li><a href="./anime-details.html">Anime Details</a></li>
                                        <li><a href="./anime-watching.html">Anime Watching</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                        <li><a href="./signup.html">Sign Up</a></li>
                                        <li><a href="./login.html">Login</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Our Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="header__right">
                        <a href="#" className="search-switch"><span className="icon_search"></span></a>
                        <a href="./login.html"><span className="icon_profile"></span></a>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>

    <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <a href="./categories.html">Categories</a>
                        <span>Romance</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="anime-details spad">
        <div className="container">
            <ProductDetail/>
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <div className="anime__details__review">
                        <div className="section-title">
                            <h5>Reviews</h5>
                        </div>
                        <ProductReview
                            userName="Paimon 01" img="img/anime/review-1.jpg"
                            string="whachikan Just noticed that someone categorized this as belonging to the genre LOL"/>
                        <ProductReview
                            userName="Paimon 02" img="img/anime/review-2.jpg"
                            string="Pertamax"/>
                        <ProductReview
                            userName="Paimon 03" img="img/anime/review-3.jpg"
                            string="Keduax"/>
                        <ProductReview
                            userName="Paimon 04" img="img/anime/review-4.jpg"
                            string="Ketigax"/>
                        <ProductReview
                            userName="Paimon 05" img="img/anime/review-5.jpg"
                            string="Spoiler om"/>
                        <ProductReview
                            userName="Paimon 06" img="img/anime/review-6.jpg"
                            string="Review"/>
                    </div>
                    <div className="anime__details__form">
                        <div className="section-title">
                            <h5>Your Comment</h5>
                        </div>
                        <form action="#">
                            <textarea placeholder="Your Comment"></textarea>
                            <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="anime__details__sidebar">
                        <div className="section-title">
                            <h5>you might like...</h5>
                        </div>
                        <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-1.jpg">
                            <div className="ep">18 / ?</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                            <h5><a href="#">Boruto: Naruto next generations</a></h5>
                        </div>
                        <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-2.jpg">
                            <div className="ep">18 / ?</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                        </div>
                        <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-3.jpg">
                            <div className="ep">18 / ?</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                            <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                        </div>
                        <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-4.jpg">
                            <div className="ep">18 / ?</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                            <h5><a href="#">Fate/stay night: Heaven&apos;s Feel I. presage flower</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <footer className="footer">
            <div className="page-up">
                <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer__nav">
                            <ul>
                                <li className="active"><a href="./index.html">Homepage</a></li>
                                <li><a href="./categories.html">Categories</a></li>
                                <li><a href="./blog.html">Our Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                  </div>
              </div>
          </footer>
          <div className="search-model">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch"><i className="icon_close"></i></div>
                <form className="search-model-form">
                    <input type="text" id="search-input" placeholder="Search here....."/>
                </form>
            </div>
        </div>
        </>
    )
}