import NavLinkBtn  from './NavLinkBtn'
import nuvemLogo from '../assets/nuvem/nuvem_logo.svg'
import { useState } from 'react'

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <header className='w-full h-[60px] min-h-[60px] bg-primary flex items-center px-[40px] justify-between sticky top-0 z-1000'>
        <div className="relative w-fit h-fit">
            <img src={nuvemLogo} className="w-[40px]"/>
            <span className="font-nunito font-bold text-sm absolute top-1/2 -translate-y-1/2 -right-8">Nuvem</span>
        </div>
        <nav className='flex justify-between gap-60 items-center '>
            <ul className={`flex text-xs gap-[30px] max-lg:absolute max-lg:flex-col max-lg:w-full ${displayMenu ? 'max-lg:top-0' : 'max-lg:-top-100'} max-lg:left-0 max-lg:bg-primary max-lg:text-sm max-lg:items-center max-lg:py-18 max-lg:shadow-2xl .header-btn-active transition-[top] ease-out duration-300`}>
                <NavLinkBtn path={'/'} pathName={'Home'} setDisplayMenu={setDisplayMenu}/>
                <NavLinkBtn path={'about'} pathName={'About'} setDisplayMenu={setDisplayMenu}/>
                <NavLinkBtn path={'works'} pathName={'Works'} setDisplayMenu={setDisplayMenu}/>
                <NavLinkBtn path={'services'}  pathName={'Services'} setDisplayMenu={setDisplayMenu}/>
                <NavLinkBtn path={'contact'} pathName={'Contact'} setDisplayMenu={setDisplayMenu}/>
                <button className='absolute top-6 right-8 lg:hidden cursor-pointer'><i className="fa-solid fa-xmark text-lg" onClick={()=>{setDisplayMenu(false)}}></i></button>
            </ul>

            <ul className='flex justify-between gap-2 max-lg:hidden '>
                <a href="https://x.com/imsulaiman_Umar" target='_blank'>
                    <li className='w-8 aspect-square rounded-full border-[1.5px]    border-text-primary/30 flex justify-center items-center hover:bg-accent-two cursor-pointer hover:border-text-primary active:scale-90'>
                        <i className="text-[12px] fa-brands fa-x-twitter"></i>
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/sulaiman-umar-4a4a14343/" target='_blank'>
                    <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two cursor-pointer hover:border-text-primary active:scale-90'>
                        <i className="text-[12px] fa-brands fa-linkedin-in"></i>
                    </li>
                </a>
                <a href="https://api.whatsapp.com/send?phone=9163701212&text=Hello,%20I%20want%20more%20information%20concerning%20your%20skills%20and%20products." target='_blank'>
                    <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two cursor-pointer hover:border-text-primary active:scale-90'>
                        <i className="text-[12px] fa-brands fa-whatsapp"></i>
                    </li>
                </a>
                <a href="https://www.instagram.com/iamsulaiman_umar/" target='_blank'>
                    <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two cursor-pointer hover:border-text-primary active:scale-90'>
                        <i className="text-[12px] fa-brands fa-instagram"></i>
                    </li>
                </a>
            </ul>
        </nav>
        <button className='lg:hidden cursor-pointer' onClick={()=>{setDisplayMenu(true)}}><i className="fa-solid fa-bars"></i></button>
    </header>
  )
}

export default Header