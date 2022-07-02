import logo from '../assets/logo.png'
export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className='container'>
            <a className="navbar-brand" href="/">
               <div className="d-flex"></div>
               <img src={logo} alt="log" className="mr-2"></img>
               <div>Project Mgmt</div>
               
            </a>
        </div>
    </nav>
  )
}
