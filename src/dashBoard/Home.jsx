import React, { useEffect,useState } from 'react'
import './Home.css'
import Card from './Card';
import Carousel from './CarouselComponent';
import Navigation from './NavigationComponent';
import { useFlag } from '../Context/FlagContextPrvider';
function Home() {
const {setData,currentData}=useFlag()
const [page,setPage]=useState(1)
const item_per_load=12;

    useEffect(() => {
        const loadData = async () => {
          const data = await fetchData("https://restcountries.com/v2/all?fields=name,region,flag");
          console.log("Fetched Countries:", data);
        };
    
        loadData(); // Call the async function
      }, []);
    
      async function fetchData(apiUrl) {
        try {
          const response = await fetch(apiUrl);
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const res = await response.json();
          setData(res)
          return res;
        } catch (error) {
          console.error("Error fetching data:", error);
          setData(null)
          return null;
        }
      }

      const filteredData=currentData?.slice(0, item_per_load * page);
      
      const hasMore = () =>filteredData&&fetchData.length< currentData.length ;

  return (
    <div className='home'>
    <div className='nav'>
      <Navigation />

    </div>
    <div className='header'>
      <div id='line1'></div>
      <h1>WELCOME</h1>
      <div id='line2'></div>
    </div>

    <div className='slider'>
<Carousel slides={currentData}/>
    </div>

    <div className='content'>

{
    filteredData&&filteredData.map((itm)=>{
return<Card data={itm}/>
    })
}
    </div>
   { hasMore()&&<button id='loadbutton' onClick={() => {
setPage((prevPage) => prevPage + 1);
    }}>
      Load More
    </button>
}
    <div className="social-icons">
        <button className="social-btn google">G</button>
        <button className="social-btn facebook">f</button>
        <button className="social-btn linkedin">in</button>
        <button className="social-btn twitter">t</button>
      </div>

    <div>
      example@email.com
    </div>
    <div>
      copywrite @ 2020 Nmae. All rights reserved
    </div>

    </div>
  )
}

export default Home