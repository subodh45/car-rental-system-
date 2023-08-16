import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from '../redux/actions/bookingActions';
import { Row,Col } from 'antd';
import moment from "moment";
import Spinner from '../components/Spinner';

function UserBookings() {

    const dispatch = useDispatch()
    const { bookings } = useSelector((state) => state.bookingsReducer);
    const {loading} = useSelector((state) => state.alertsReducer);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() =>{
        dispatch(getAllBookings())
    },[])


  return (  
   <DefaultLayout>
    {loading && (<Spinner />)}
    <h3 className='text-center mt-2 ' >My Bookings</h3>

     <Row justify='center' gutter={16}>
      <Col lg={20} sm={24}>
        {bookings.filter(o=>o.user== user._id).map((booking) => {
         return <Row gutter={16} className='bs1 mt-3 text-left' >
            <Col lg={7} sm={24}>
              <p><b>{booking.car.name}</b></p>
              <p>Total hours : <b>{booking.totalHours}</b></p>
                    <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
                    <p>Total amount : <b>{booking.totalAmount}</b></p>
             </Col>
            <Col lg={10} sm={24}>
            
                <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
            </Col>
            <Col lg={7} sm={24}>
            <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
            </Col>
          </Row>;
        })}
      </Col>
        
     </Row>

   </DefaultLayout>
  )
}

export default UserBookings