import Link from 'next/link'
import Icon from '@/component/atom/icon'

export default function MenuItem(props) {
    const {href, string, icon, active, children} = props
    const iconEl = icon ? <Icon icon={icon}/> : false

    const classNames = []
    classNames.push(active ? 'active' : '')
    return (
        <li className={classNames.join(' ')}>
            <Link href={href}>{string}{iconEl}</Link>
            {children}
        </li>
    )
}