import {Contact,CopyRights,Footer,Hero,How,Intro,Navbar,Tech,Why} from './components'
import { Vector1,Vector2,Vector3,Vector4 } from './assets/imports';

function App() {
  return (
   <div className='bg-[#302C42] p-12'>
   <Navbar/>
   <div className='relative'>
   <Hero/>
   </div>
   <Intro/>
   <Why/>
   <Tech/>
   <How/>
   <Contact/>
   <Footer/>
   <div className='w-full h-full flex justify-center items-center '>
   <div className='md:w-[1269px] w-[289px] h-[0.1px] bg-primary mt-20'/>
   </div>
   <CopyRights/>
   </div>
  );
}

export default App;
