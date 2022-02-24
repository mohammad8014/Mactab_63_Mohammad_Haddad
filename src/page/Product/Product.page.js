import { Navigation } from 'coponents/Navigation/Navigation';
import { FooterComponent } from 'layout';
import { Item } from 'page';
import React from 'react';

export default function ProductPage() {
  return (<>
    <Navigation></Navigation>

    <div className='w-4/12 text-right bg-black    flex flex-col'>
      <div class="w-96   min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src="#" alt="#" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div>
        <h3 className='text-right w-96'>dgd</h3>
        <p className='text-green-700 text-right w-96'>sdgsgg</p>
      </div>
    </div>

    
    <FooterComponent></FooterComponent>

  </>);
}









export { ProductPage };
