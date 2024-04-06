import logoAirbnb from "../assets/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div className=' flex items-center shadow-navbarShadow h-[70px]'>
      <img src={logoAirbnb} alt='logo airbnb' className=' h-[25.35px] ml-7' />
    </div>
  );
}
