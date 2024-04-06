import { DataTarjeta } from "../App";
import estrellita from "../assets/images/star.png";

export default function Card({
  coverImg,
  price,
  location,
  openSpots,
  stats,
  title,
}: DataTarjeta) {
  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className=' relative flex-none w-44'>
      {badgeText && (
        <div className='  absolute bg-gray-200  rounded-sm ml-2 mt-2 text-sm px-1'>
          {badgeText}
        </div>
      )}
      <img
        src={coverImg}
        alt='foto tarjeta'
        className=' h-[235px] rounded-lg'
      />
      <section className=' mt-3'>
        <div className=' flex items-center h-[14px]  text-xs  space-x-1'>
          <img src={estrellita} alt='estrellita' className=' size-4' />
          <span>{stats.rating}</span>
          <span className='text-gray-400'>({stats.reviewCount}) • </span>
          <span className='text-gray-400 '>{location} </span>
        </div>

        <h2 className=' text-xs my-2'>{title}</h2>
        <p className=' text-sm'>
          <span className=' font-semibold'>From ${price}</span> / person
        </p>
      </section>
    </div>
  );
}
