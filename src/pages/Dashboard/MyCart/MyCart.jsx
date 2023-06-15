import React from "react";
import { Helmet } from "react-helmet-async";
import userCart from "../../../hooks/useCart";
import {FaRegEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";



const MyCart = () => {
  const [cart,refetch] = userCart();
  // Reduce for get total price 
  const total = cart.reduce((acc, item) => item.price + acc, 0);

const handleDelete =(item)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`,{
            method:"DELETE",

          })
          .then(res=>res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
        }
      })
}


  console.log(cart);
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My cart</title>
      </Helmet>
      <div className="flex justify-between uppercase font-bold  h-10 items-center">
        <h3 className="text-3xl">My cart from my cart : {cart.length}</h3>

        <h3 className="text-3xl">Total Price : {total}</h3>
       
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className="table bg-base-300">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>item image</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="w-full mx-auto bg-orange-100">
              {cart.map((item,index) => (
                <>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td className="">$ {item.price}</td>
                    <td>
                      <button className="btn btn-ghost  text-xl bg-orange-400"><FaRegEdit/></button>
                    </td>
                    <td>
                      <button onClick={()=>handleDelete(item)} className="btn btn-ghost  text-xl bg-red-600 text-gray-200"><FaTrash></FaTrash></button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;



