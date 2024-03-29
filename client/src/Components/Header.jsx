import {Link} from 'react-router-dom'
import Logo from '../assets/ll2-removebg-preview.png'
import { useSelector } from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  console.log(currentUser)
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-600 shadow-md font-montserrat">
        <div className="flex justify-between items-start">
        <h1 className="font-bold text-3xl md:text-6xl flex flex-wrap">
            <img className="max-w-20 md:max-w-36" src={Logo} alt="This is logo"></img>
        </h1>
        <div className='flex justify-around gap-3 md:gap-6 p-5 md:p-8'>
        <ul className='flex flex-row justify-between gap-8 text-lg'>
          <li className='hidden sm:inline text-white hover:text-blue-300 rounded-2xl m-3 tracking-widest'><Link to='/'>Home</Link></li>
          <li className='hidden sm:inline text-white hover:hover:text-blue-300 rounded-2xl m-3 tracking-widest'><Link to='/models'>Ideas</Link></li>
          <li className='hidden sm:inline text-white hover:hover:text-blue-300 rounded-2xl m-3 tracking-widest'><Link to='/about'>Create Project</Link></li>
          <li className='hidden sm:inline text-white hover:hover:text-blue-300 rounded-2xl m-3 tracking-widest'><Link to='/about'>About</Link></li>
          {currentUser?<li className='inline items-center text-white hover:hover:text-blue-300 rounded-full m-3'><Link to='/profile'><img src={currentUser.avatar} className='max-h-10 rounded-full'></img></Link></li> :
            <li className='inline text-white hover:hover:text-blue-300 rounded-2xl m-3 tracking-widest'><Link to='/signin'>Sign In</Link></li>
          }
     </ul>
        </div>
        </div>
    </header>
  )
}
