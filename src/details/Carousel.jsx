import { useState } from 'react';

const Carousel = ({ images }) => {
    const [active, setActive] = useState(0);

    if (!images?.length) {
        images = ['https://pets-images.dev-apis.com/pets/none.jpg'];
    }
    return (
        <div className='carousel'>
            <img src={images[active]} alt='animal' />
            <div className='carousel-smaller'>
                {images.map((photo, index) => (
                    <button
                        key={photo}
                        data-index={index}
                        onClick={(e) => {
                            if (e.target.tagName === 'IMG') {
                                setActive(+e.target.dataset.index);
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setActive(+e.target.firstChild.dataset.index);
                            }
                        }}
                    >
                        <img
                            src={photo}
                            className={index === active ? 'active' : ''}
                            alt='animal thumbnail'
                            data-index={index}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
