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

  return (
    <div>
      
    <BilgiList tutorials={tutorials}/>

    </div>
  )
}

export default Home
