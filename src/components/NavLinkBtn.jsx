import { NavLink } from "react-router-dom"

const NavLinkBtn = (props) => {
  return (
    <NavLink to={props.path} className={`text-text-primary relative group font-nunito [&.active]:text-accent-one`} onClick={()=>{props.setDisplayMenu(false)}}>
      {props.pathName}
      <div className="h-[2px] w-0 group-hover:w-full bg-text-primary rounded absolute -bottom-[6px] transition-[width] transition-ease duration-400"></div>
    </NavLink>
  )
}

export default NavLinkBtn;