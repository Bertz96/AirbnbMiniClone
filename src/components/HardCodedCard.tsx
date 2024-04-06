import coverCard from "../assets/images/katie-zaferes.png";
import estrellita from "../assets/images/star.png";

export default function HardCodedCard() {
  return (
    <div className=' flex-none w-44'>
      <img
        src={coverCard}
        alt='foto tarjeta'
        className=' h-[235px] rounded-lg'
      />
      <section className=' mt-3'>
        <div className=' flex items-center h-[14px]  text-xs  space-x-1'>
          <img src={estrellita} alt='estrellita' className=' size-4' />
          <span>{5}</span>
          <span className='text-gray-400'>(6) • </span>
          <span className='text-gray-400 '>USA </span>
        </div>

        <h2 className=' text-xs my-2'>Katarina Devon</h2>
        <p className=' text-sm'>
          <span className=' font-semibold'>From $400</span> / person
        </p>
      </section>
    </div>
  );
}
