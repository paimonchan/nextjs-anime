export default function ProductDetail(props) {
    const {string, img} = props
    return (
        <div className="anime__details__content">
            <div className="row">
                <div className="col-lg-3">
                    <div className="anime__details__pic set-bg" style={{backgroundImage: `url(${img})`}}>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="anime__details__text">
                        <div className="anime__details__title">
                            <h3>Fate Stay Night: Unlimited Blade</h3>
                            <span>フェイト／ステイナイト, Feito／sutei naito</span>
                        </div>
                        <div className="anime__details__rating">
                            <div className="rating">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                            <span>1.029 Votes</span>
                        </div>
                        <p>Every human inhabiting the world of Alcia is branded by a “Count” or a number written on
                            their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss,
                            never to be seen again. But her mother’s last words send Hina on a quest to find a
                        legendary hero from the Waste War - the fabled Ace!</p>
                        <div className="anime__details__widget">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <ul>
                                        <li><span>Type:</span> TV Series</li>
                                        <li><span>Studios:</span> Lerche</li>
                                        <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                        <li><span>Status:</span> Airing</li>
                                        <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <ul>
                                        <li><span>Scores:</span> 7.31 / 1,515</li>
                                        <li><span>Rating:</span> 8.5 / 161 times</li>
                                        <li><span>Duration:</span> 24 min/ep</li>
                                        <li><span>Quality:</span> HD</li>
                                        <li><span>Views:</span> 131,541</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="anime__details__btn">
                            <a href="#" className="follow-btn"><i className="fa fa-heart-o"></i> Follow</a>
                            <a href="#" className="watch-btn"><span>Watch Now</span> <i
                                className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}