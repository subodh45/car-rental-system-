import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
//import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { deleteCar } from "../redux/actions/carsActions";
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import { Popconfirm, message } from "antd";
import moment from 'moment'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function AdminHome() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars , setTotalcars] = useState([])
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)
        
    }, [cars])


    

    return (  <div  className='homepage'>
       <div className="header bs1">
          <Row gutter={16} justify='center'>
            <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
            <h1 ><b><Link to='/admin' style={{color:'goldenrod'}}>CarRental.com</Link></b></h1>

          </div>
            </Col>
          </Row>
 
        </div>
       <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            
            <button className="btn1">
              <a href="/addcar" style={{color:'goldenrod'}}>ADD CAR</a>
            </button>
          </div>
        </Col>
      </Row>
             
              {loading == true && (<Spinner/>)}


              
              <Row justify='center' gutter={16}>

                   {totalCars.map(car=>{
                       return <Col lg={5} sm={24} xs={24}>
                            <div className="car p-2 bs1">
                               <img src={car.image} className="carimg"/>

                               <div className="car-content d-flex align-items-center justify-content-between">

                                    <div className='text-left pl-2'>
                                        <p>{car.name}</p>
                                        <p> Rent Per Hour {car.rentPerHour} /-</p>
                                    </div>

                                    <div>
                                    <Link to={`/editcar/${car._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </Link>

                    <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>

                     
                                    </div>

                               </div>
                            </div>
                       </Col>
                   })}

              </Row>

        
        </div>
    )
}

export default AdminHome
 
 