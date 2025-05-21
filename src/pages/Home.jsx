import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //!GET (READ)

  const getBilgiler = async () => {
    const res = await axios.get(url);

    console.log(res.data);

    setTutorials(res.data);
  };

  useEffect(() => {
    getBilgiler();
  }, []);

  //! DELETE

  const deleteBilgi = async (id) => {
    await axios.delete(`${url}${id}/`);

// database de delete işlemi yapıldı ama browser da görmek için tamirci çalışmalı, bu yüzdendatabase den veri çekip tamirciyle diziye veri atan fonk getBilgiler i tekrar çağırdık

getBilgiler()

  };

//! POST (CREATE)
const postBilgi=async(yeniVeri)=>{

await axios.post(url,yeniVeri)

getBilgiler()

}


//! PUT (UPDATE)

const putBilgiler=async(edit)=>{


    await axios.put(`${url}${edit.id}/`,edit)

    getBilgiler()
}


  return (
    <div>

<AddBilgi  postBilgi={postBilgi}/>

      <BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi} putBilgiler={putBilgiler}/>


    </div>
  );
};

export default Home;