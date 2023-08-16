import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userRegister } from "../redux/actions/userActions";
import Spinner from '../components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Register() {
  const dispatch = useDispatch()
  const {loading} = useSelector(state=>state.alertsReducer)
   function onFinish(values) {
       
         dispatch(userRegister(values))
        
            console.log(values)

   }
  return (
    <div className='login'>
      {loading && (<Spinner />)}
         <Row gutter={16} className='d-flex align-items-center'>
         <h1 className='login-logo'> <b>CarRental.com </b></h1>
          
          <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                         <h1>Register</h1>
                         <hr />
                         <Form.Item name='username' label='Username' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='mobileno' label='mobile No' rules={[{required: true,  pattern: new RegExp(/^[0-9]{10}$/) }]}>
                             <Input type='tel'/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='cpassword' label='Confirm Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-4 mb-1'>Register</button> 
                           <hr/>

                          <Link to='/login'> Click Here to Login </Link>
                         

                           
                       

                    </Form>
                </Col>
           

         </Row>

        
    </div>
  )
}

export default Register