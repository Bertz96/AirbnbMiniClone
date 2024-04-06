import heroImg from "../assets/images/photo-grid.png";

export default function Hero() {
  return (
    <section className=' flex flex-col items-start p-5    '>
      <img
        src={heroImg}
        alt='hero grid'
        className='h-[232px] self-center max-w[400px]  my-7'
      />

      <h1 className=' mb-4 font-bold'>Online Experiences</h1>
      <p className=' w-80'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
