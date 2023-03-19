import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
    const phones = useLoaderData();
    const [booking, setBooking] = useState(null);
    return (
        <section>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                phones.map((phone, index) => <ProductCard key={index} phone={phone} setBooking={setBooking}></ProductCard>)
            }
        </div>
        {
            booking &&
            <BookingModal 
            booking={booking}
            setBooking={setBooking}
            ></BookingModal>
        }
        </section>
    );
};

export default Products;