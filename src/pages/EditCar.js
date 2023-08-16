/*import { Col , Row , Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addCar } from '../redux/actions/carsActions'
function EditCar() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    

    function onFinish(values){

         values.bookedTimeSlots=[]

         dispatch(addCar(values))
         console.log(values)
    }

    return (
        <DefaultLayout>
               {loading && (<Spinner />)}
               <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                           <h3>Edit Car</h3>
                           <hr />
                           <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerHour' label='Rent per hour' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='fuelType' label='Fuel Type' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>

                           <div className='text-right'>
                           <button className='btn1'>Edit CAR</button>
                           </div>

                       </Form>
                   </Col>
               </Row>

        </DefaultLayout>
    )
}

export default EditCar */

import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import {Link} from 'react-router-dom'
import { addCar, editCar, getAllCars } from "../redux/actions/carsActions";
function EditCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState();
  const [totalcars, settotalcars] = useState([]);
  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      settotalcars(cars);
      setcar(cars.find((o) => o._id == match.params.carid));
      console.log(car);
    }
  }, [cars]);

  function onFinish(values) {
    values._id = car._id;

    dispatch(editCar(values));
    console.log(values);
  }

  return (
    <div className='addcar'>
       <div className="header bs1">
          <Row gutter={16} justify='center'>
            <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
            <h1 ><b><Link to='/admin' style={{color:'goldenrod'}}>CarRental.com</Link></b></h1>

          </div>
            </Col>
          </Row>
 
        </div>
      
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {totalcars.length > 0 && (
            <Form
              initialValues={car}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Car</h3>

              <hr />
              <Form.Item
                name="name"
                label="Car name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fuelType"
                label="Fuel Type"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1 mr-3">Edit CAR</button>
                <button className="btn1 ">
              <a href="/admin" style={{color:'goldenrod'}} > GO BACK</a>
            </button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default EditCar;
