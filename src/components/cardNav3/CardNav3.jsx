import React from 'react';
import ReactStars from 'react-stars';

export default function CardNav3() {
    
    const reviews = [
        { id: 1, name: "John Doe", hotel: "Hotel A", rating: 4, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id laoreet magna." },
        { id: 2, name: "Jane Smith", hotel: "Hotel B", rating: 5, review: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
        { id: 3, name: "Alice Johnson", hotel: "Hotel C", rating: 3, review: "Integer ut nisi vel eros euismod vestibulum sed sed justo." }
    ];

    return (
        <div className=' container ms-0 mt-5'>
            <div className='p-2 border rounded bg-white'>
                <h4 className="mt-2 ms-1">All Reviews (<span style={{ color: 'blue' }}>{reviews.length}</span>)</h4>
                <hr />
                
                {reviews.map(review => (
                    <div key={review.id} className="review d-flex align-items-start">
                        <div className="person-photo me-3">
                            
                            <img src={`https://via.placeholder.com/50`} alt="Person" />
                        </div>
                        <div className="review-details">
                            <h4 style={{ marginBottom: '0.5rem' }}>{review.name}</h4>
                            <p style={{ marginBottom: '0.25rem' }}> {review.hotel}</p>
                            <p className='d-flex align-items-center gap-2 mb-1'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={review.rating}
                                    edit={false}
                                    color2={'#ffd700'}
                                />
                                {review.rating}
                            </p>
                            <p style={{ marginTop: '0' }}>{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
