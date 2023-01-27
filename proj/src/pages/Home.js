
import './style/home.css';
import FirstCard from '../components/FirstCard';
import MidCard from '../components/MidCard';
import SmallCard from '../components/SmallCard';
function Home() {
  return (
    <>

    <div className = "homeMain">
        {/* main div -- flex direction row*/}
       
            {/* component */}
            <FirstCard/>
       
            <MidCard/>
        
        <div className = "column"> 
            {/* flex direction column */}
           <SmallCard/>
           <SmallCard/>

            
        </div>
    </div>
    </>
  );
}

export default Home;