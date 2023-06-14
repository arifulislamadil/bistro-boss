import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

const handleMakeAdmin=(user)=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: "PATCH",
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        refetch();
        if(data.modifiedCount){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin now`,
            showConfirmButton: false,
            timer: 1500
          })
        }
    })
}


const handleDelete =(id)=>{
fetch(`http://localhost:5000/users/${id}`,{
    method: 'DELETE',
}).then(res=>res.json())
.then(data=>{
    Swal.fire({
        title: `${id.name} is an admin now!`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        refetch();
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
})
}


  return (
    <div>
      <Helmet>
        <title>Bistro Boss || All Users</title>
      </Helmet>
      <h3 className="text-3xl my-2 font-bold bg-orange-100 w-3/12">Total Users: {users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user , index) => (
              <>
                {/* row 1 */}
                <tr key={users._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-2xl">
                    
                    {user.role === 'admin' ? "admin":<button onClick={()=>handleMakeAdmin(user)} className="btn text-white bg-orange-600 text-xl"><FaUserShield /></button>} 
                    
                  </td>
                  <td className="text-2xl">
                    <button className="btn text-white bg-red-600 text-xl" onClick={()=>handleDelete(user._id)}><AiFillDelete></AiFillDelete></button>
                     </td>
                  
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
