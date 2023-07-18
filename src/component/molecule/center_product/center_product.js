export default function CenterProduct(props) {
    const {string, img} = props
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="product__item">
                <div className="product__item__pic set-bg" style={{"background-image": `url(${img})`}}>
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                        <i className="fa fa-comments"></i> 11</div>
                    <div className="view">
                        <i className="fa fa-eye"></i> 9141</div>
                </div>
                <div className="product__item__text">
                    <ul>
                        <li>Active</li>
                        <li>Movie</li>
                    </ul>
                    <h5>
                        <a href="#">{string}</a>
                    </h5>
                </div>
            </div>
        </div>
    )
}