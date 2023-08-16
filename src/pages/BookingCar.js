import React, { useState, useEffect } from 'react'
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import Spinner from '../components/Spinner';
import { Button ,Row ,Col ,Divider, DatePicker, Checkbox ,Modal } from 'antd';
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import {Link} from 'react-router-dom'


 
const {RangePicker} = DatePicker
function BookingCar({ match }) {
  const {cars} =useSelector(state=>state.carsReducer)
  const {loading} = useSelector(state=>state.alertsReducer)
  const [car, setcar] = useState({});
  const dispatch = useDispatch()
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

      
        useEffect(() => {
          if (cars.length == 0) {
            dispatch(getAllCars());
          } else {
            setcar(cars.find((o) => o._id == match.params.carid));
          }
        }, [cars]);

        useEffect(() => {
          setTotalAmount(totalHours * car.rentPerHour);
          if (driver) {
            setTotalAmount(totalAmount + 50 * totalHours);
          }
        },
         [driver, totalHours])
      
          
        function selectTimeSlots(values){
          setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
        }

        function bookNow(){

          const reqObj = {
            
            user : JSON.parse(localStorage.getItem('user'))._id ,
            car: car._id,
            totalHours,
            totalAmount,
            driverRequired: driver,
            bookedTimeSlots: {
              from,
              to,
            }
          }
          dispatch(bookCar(reqObj));
        }
        
        
        

  return ( <div className='bookingcar1'>
    <DefaultLayout>
     {loading && <Spinner />}
      <Row
       justify="center"
       className="d-flex align-items-center"
       style={{ minHeight: "90vh" }}
      >
           <Col lg={10} sm={24} xs={24} className='p-3'>
          <img src={car.image} className="carimg2 bs1 w-100" />
        </Col>
        <Col lg={10} sm={24} xs={24} className="text-right" >
          <Divider type="horizontal" dashed> <b>Car Info</b></Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour /-</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
          </div>

          <Divider type="horizontal" dashed>
           <b> Select Time Slots</b>
          </Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          />
          <br/>
           <Button className='btn1 mt-2' onClick={()=>{setShowModal(true)}} > See booked Slots</Button>
          
           { from && to && (
            <div> 
            <p>
                 Total Hours : <b>{totalHours}</b>
               </p>
               <p>
                 Rent Per Hour : <b>{car.rentPerHour}</b>
               </p>
               
               
               <Checkbox
                 onChange={(e) => {
                   if (e.target.checked) {
                     setdriver(true);
                   } else {
                     setdriver(false);
                   }
                 }}
               >
                 Driver Required
               </Checkbox> <br/>
               <h6><u> <Link to='/terms' style={{color:'black'}}>read all T&C</Link> </u> </h6>
               <h3>Total Amount : {totalAmount}</h3>
 
               <button className="btn1" onClick={bookNow}>
                 Book Now
               </button>
 
            </div>
           )}
          </Col>
          {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}

        </Row>
    </DefaultLayout>
 </div>
  )
              }

export default BookingCar 