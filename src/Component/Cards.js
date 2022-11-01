import React from 'react'
import './Cards.css'

function Cards(data) {
    const book = data
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h5 className="card-title text-center mb-3">Slot 1</h5>
                    <div className="card shadow-2-strong slot" >
                        <div className="card-body p-3 text-center">
                            <p>9.00 A.M to 12.00 P.M</p>
                            {book.data.slot_1 === null ?
                                <><button type="button" class="btn btn-primary">Book</button></>
                                :
                                <><p>Already Booked</p></>
                            }
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h5 className="card-title text-center mb-3">Slot 2</h5>
                    <div className="card shadow-2-strong slot" >
                        <div className="card-body p-3 text-center">
                            <p>1.00 P.M to 4.00 P.M</p>
                            {book.data.slot_2 === null ?
                                <><button type="button" class="btn btn-primary">Book</button></>
                                :
                                <><p>Already Booked</p></>
                            }
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h5 className="card-title text-center mb-3">Slot 3</h5>
                    <div className="card shadow-2-strong slot" >
                        <div className="card-body p-3 text-center">
                            <p>5.00 P.M to 8.00 P.M</p>
                            {book.data.slot_3 === null ?
                                <><button type="button" class="btn btn-primary">Book</button></>
                                :
                                <><p>Already Booked</p></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards