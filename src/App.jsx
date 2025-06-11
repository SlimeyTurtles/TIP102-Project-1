import './App.css'
import Card from './components/card'

function App() {

  const cardData = [
    { name: "Birria-Landia", image_path: "birria-landia", type: "Mexican" },
    { name: "Mysttik Masala", image_path: "mysttik-masala", type: "Indian" },
    { name: "The Halal Guys", image_path: "the-halal-guys", type: "Middle Eastern" },
    { name: "NY Dosas", image_path: "ny-dosas", type: "Vegetarian" },
    { name: "Jerk Pan", image_path: "jerk-pan", type: "Jamaican" },
    { name: "Tong", image_path: "tong", type: "Asian Bangladeshi" },
    { name: "King Souvlaki of Astoria", image_path: "king-souvlaki-of-astoria", type: "Greek" },
    { name: "Ling's Sweet Mini Cakes", image_path: "lings-sweet-mini-cakes", type: "Chinese" },
    { name: "Uncle Gussy's", image_path: "uncles-gussys", type: "Greek" },
    { name: "Patacon Pisao", image_path: "patacon-pisao", type: "Venezuelan" },
    { name: "Mom's Mono", image_path: "moms-mono", type: "Tibetan" },
    { name: "Makina Cafe", image_path: "makina-cafe", type: "Ethiopian" },
  ];

  return (
    <>
      <img src='/awning.png' />
      
      <h1>Food Truck Favorites</h1>

      <div className='Cards'>
        {cardData.map((data, index) => (
          <Card 
            key={index}
            image_path={data.image_path}
            name={data.name}
            type={data.type}
          />
        ))}
      </div>
    </>
  )
}

export default App
