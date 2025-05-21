import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BilgiList from '../components/BilgiList';

const Home = () => {

    const [tutorials,setTutorials] = useState([])

    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    //! Get (Read)

    const getBilgiler =async()=>{

    const res=    await axios.get(url)

    console.log(res.data)

    setTutorials(res.data)
    
    }

    useEffect(()=>{
        getBilgiler();
    },[])

    //!Delete

    const deleteBilgi = async(id)=>{

        await axios.delete(`${url}${id}/`)
        getBilgiler()

    }

  return (
    <div>
      
    <BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi}/>

    </div>
  )
}

export default Home
