import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from './EditBilgi';
import { useState } from 'react';

const BilgiList = ({tutorials,deleteBilgi,putBilgiler}) => {

//    const deleteBilgi = async (id) => {
//      await axios.delete(`${url}${id}/`);
//    };
  const[edit,setEdit]=useState("")  

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({ id, title, description }) => {
            return (
              <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center ">
                  <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteBilgi(id)}
                  />

                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    size={20}
                    type="button"
                    className="me-2 text-warning cursor-pointer"

                    onClick={()=>setEdit({id:id,title:title,description:description})}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    <EditBilgi edit={edit} setEdit={setEdit} putBilgiler={putBilgiler}/> 
    </div>
  );
}

export default BilgiList