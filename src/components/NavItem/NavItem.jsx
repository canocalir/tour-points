import './NavItem.scss'

const NavItem = ({link, name}) => {
  return (
    <a className='nav-item' href={link}>{name}</a>
  )
}

export default NavItem