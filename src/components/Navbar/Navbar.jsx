import NavItem from '../NavItem/NavItem'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavItem link={'/about'} name={'ABOUT US'}/>
        <NavItem link={'/foryou'} name={'FOR YOU'}/>
        <NavItem link={'/services'} name={'SERVICES'}/>
        <NavItem link={'/vlog'} name={'VLOG'}/>
        <NavItem link={'/contact'} name={'CONTACT'}/>
    </div>
  )
}

export default Navbar