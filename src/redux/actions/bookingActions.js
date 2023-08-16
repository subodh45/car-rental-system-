import axios from 'axios';
import { message } from "antd";
export const bookCar=(reqobj)=>async dispatch=>{

    dispatch({type: 'LOADING', payload:true})

    try {
        await axios.post('/api/bookings/bookcar', reqobj)

       
        dispatch({type: 'LOADING', payload:false});
        message.success('Your car booked successfully');
        setTimeout(() => {
            window.location.href='/userbookings'
        }, 1000);

        window.location.href='/userbookings'
        
    } catch (error){
        console.log(error)
        dispatch({type: 'LOADING', payload:false})
        message.error('Something went wrong, please try again later')

    }
} ;

export const getAllBookings=()=>async dispatch=>{

    dispatch({type: 'LOADING', payload:true})

    try {
        const response = await axios.get('/api/bookings/getallbookings')
        dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
        dispatch({type: 'LOADING', payload:false})
    } catch (error){
        console.log(error)
        dispatch({type: 'LOADING', payload:false})

    }
}
