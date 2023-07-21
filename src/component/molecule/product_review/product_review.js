export default function ProductReview(props) {
    const {string, userName, img} = props
    return (
        <div className="anime__review__item">
            <div className="anime__review__item__pic">
                <img src={img} alt=""/>
            </div>
            <div className="anime__review__item__text">
                <h6>{userName} - <span>1 Hour ago</span></h6>
                <p>
                    {string}
                </p>
            </div>
        </div>
    )
}