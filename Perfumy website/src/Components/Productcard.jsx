import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";

function Products() {
  return (
    <div className='mt-[60px] flex justify-between ml-[80px] mr-[80px]'>
      <div className='w-[250px] border-solid border-2 border-black text-center bg-white hover:bg-black hover:text-white'>
        <img src={one} alt="Fogg Wood Extreme"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      
      <div className='w-[250px] border-solid border-2 border-black text-center bg-white hover:bg-black hover:text-white'>
        <img src={two} alt="villain"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      
      <div className='w-[250px] border-solid border-2 border-black text-center bg-white hover:bg-black hover:text-white'>
        <img src={three} alt="Designs Club"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
    </div>
  );
}

export default Products;