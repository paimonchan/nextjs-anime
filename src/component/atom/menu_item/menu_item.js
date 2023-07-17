import Icon from '@/component/atom/icon'

export default function MenuItem(props) {
    const {href, string, icon, active, children} = props
    const iconEl = icon ? <Icon icon={icon}/> : false

    const classNames = []
    classNames.push(active ? 'active' : '')
    return (
        <li className={classNames.join(' ')}>
            <a href={href}>{string}{iconEl}</a>
            {children}
        </li>
    )
}