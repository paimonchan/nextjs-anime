export default function SidebarProduct(props) {
    const {string, img} = props
    return (
        <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
                <img src={img} alt=""/>
            </div>
            <div className="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5>
                    <a href="#">{string}</a>
                </h5>
                <span>
                    <i className="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
    )
}