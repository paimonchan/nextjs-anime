export default function SidebarProduct(props) {
    const {string, img} = props
    return (
        <div className="product__sidebar__view__item set-bg mix day years" style={{backgroundImage: `url(${img})`}}>
            <div className="ep">18 / ?</div>
            <div className="view">
                <i className="fa fa-eye"></i> 9141</div>
            <h5>
                <a href="#">{string}</a>
            </h5>
        </div>
    )
}