import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import userCart from "../../hooks/useCart";

const FoodCard = ({item }) => {
    const {name,recipe,image,category,price, _id} = item;
    const {user}= useContext(AuthContext);
const [,refetch]= userCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item)=>{
      if(user && user.email){
        const cartItem = {menuItemId: _id,name,image,price, email:user?.email}
        fetch("http://localhost:5000/carts",{
          method: "POST",
          headers:{
            "content-type": "application/json",
          },
          body: JSON.stringify(cartItem)
          
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'food added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login for order the food',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'login now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state: {from:location}})
          }
        })
      }
    }
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-5 top-5 bg-slate-900 text-white px-3 py-2">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-200 border-orange-400">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
