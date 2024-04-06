import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import data from "./assets/data";

export type Datos = typeof data;
export type DatoIndividual = Datos[number];
export type DataTarjeta = Omit<DatoIndividual, "id" | "description">;

function App() {
  console.log(data);
  return (
    <div className=' w-[550px] h-[853px] mx-auto  rounded-lg'>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div className=' flex gap-4 pl-6 py-6 flex-nowrap overflow-x-auto scrollbar-thin  scrollbar-thumb-rounded-full  scrollbar-thumb-gray-500 scrollbar-track-rounded-full scrollbar-track-gray-300     '>
        {data &&
          data.map((card) => {
            return (
              <Card
                key={card.id}
                coverImg={card.coverImg}
                title={card.title}
                price={card.price}
                openSpots={card.openSpots}
                stats={card.stats}
                location={card.location}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
