
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
 

  return (
    <div className='m-20'>
      
      <h1 className='text-center text-7xl text-amber-900 font-semibold'>Bing Cafe</h1>
      <h1 className='text-5xl text-center m-7'>Coffees we do produce are displayed below</h1>
    <div className='grid md:grid-cols-2 gap-4'>
    {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
      }
    </div>
    </div>
  )
}

export default App
