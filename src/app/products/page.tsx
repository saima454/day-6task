import AboutCard from '@/components/AboutCards';
import HeaderAbout from '@/components/headerAbout';
import { client } from '@/sanity/lib/client';
import { fetchData } from '@/services/api';
import React from 'react'

 async function ProductsCards() {
  
  const res = await client.fetch(`*[_type == 'product'][]{ name,price,description,'image':image.asset->url, category
                         
 } `)


  
        if(!res || res.length === 0){
          await fetchData();
  
          const res = await client.fetch(`*[_type == 'product'][]{ name,price,description,'image':image.asset->url, category
                         
 }`);

        }
 
  return (
    <div>
       <HeaderAbout/>
        <AboutCard/> 
    </div>
  )
}

export default ProductsCards;