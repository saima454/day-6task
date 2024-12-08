


import BestProduct from "@/components/BestProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Picture from "@/components/Picture";




export default function Home() {
  return (
    <div className=" mx-auto overflow-hidden">
      <Header/>
      
      <Hero/>

     
    <BestProduct/>
    <Picture/>
    <Footer/>
    </div>
  )
    
     
}
