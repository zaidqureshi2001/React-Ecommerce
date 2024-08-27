import React from 'react';
import Carouselsall from './Carouselsall';
// import image6 from '/src/assets/image5.jpeg';
// import image7 from '/src/assets/image6.jpeg';
// import image8 from '/src/assets/image7.jpeg';
// import image9 from '/src/assets/image8.jpeg';
import banner1 from '/src/assets/banners/banner1.jpeg';
import banner2 from '/src/assets/banners/banner2.jpeg';
import banner3 from '/src/assets/banners/banner3.jpeg';
import banner4 from '/src/assets/banners/banner4.jpeg';
import banner5 from '/src/assets/banners/banner5.jpeg';

const Newr = () => {
    const newimg = [
        // image6,
        // image7,
        // image8,
        // image9,
        banner1,
        banner2,
        banner3,
        banner4,
        banner5
    ];
    return (
        <div  className='pt-9'>
            <Carouselsall newimg={newimg} width='100vw' height='50%' justify-content='center' top='29rem' padding="0"/>
        </div>
    );
}

export default Newr;
