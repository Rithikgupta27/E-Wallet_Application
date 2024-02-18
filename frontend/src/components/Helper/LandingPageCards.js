import React from 'react'
import LandingCardItem from './LandingCardItem';
function LandingPageland_cards() {
 
    return (
        <div className='land_cards'>
          
          <div className='land_cards__container'>
            <div className='land_cards__wrapper'>
              <ul className='land_cards__items'>
                <LandingCardItem
                  src='images/wallet.png'
                  text='Our expert technicians will inspect your car and ensure that the best car service is provided to you.'
                  label='TRENDING'
                  path='/services'
                />
                <LandingCardItem
                  src='images/img-2.jpg'
                  text='Vehicle diagnosis by our expert'
                  label='TRENDING'
                  path='/services'
                />
              </ul>
              <ul className='land_cards__items'>
                <LandingCardItem
                  src='images/img-3.jpg'
                  text=' Tire and wheel services such as wheel alignments, tire balancing, and flat tire repairs.' 
                  // This can include washing, waxing, polishing, and vacuuming the interior.'
                  label='WHEEL SERVICE'
                  path='/services'
                />
                <LandingCardItem
                  src='images/img-4.jpg'
                  text='Full vehicle diagnosis using different tools'
                  label='VEHICLE DIAGNOSIS'
                  path='/products'
                />
                <LandingCardItem
                  src='images/img-8.jpg'
                  text='Full vehicle check-up'
                  label='FULL CHECK-UP'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default LandingPageland_cards
