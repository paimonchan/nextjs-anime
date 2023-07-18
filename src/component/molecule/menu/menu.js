export default function Menu(props) {
    const {dropdown, children} = props

    const classNames = []
    classNames.push(dropdown ? 'dropdown' : '')
    return (
        <ul className={classNames.join(' ')}>
            {children}
        </ul>
    )
}