import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddItem = () => {
    // const [data,setData] = useState({})
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => 
  fetch("http://localhost:5000/addItem",{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
});

  return (
    <div>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content w-4/6">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Recipe name <span className="font-extrabold">*</span>
                  </span>
                </label>
                <input
                  {...register("recipeName", { required: true })}
                  type="text"
                  placeholder="Recipe name"
                  className="input input-bordered"
                />
              </div>
              <div className="w-full flex gap-5">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">
                      Category <span>*</span>
                    </span>
                  </label>
                  <select  {...register("category", { required: true })} className="input input-bordered">
                    <option value="">Select an option</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Popular">Popular</option>
                    <option value="Soup">Soup</option>
                  </select>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">
                      Price <span>*</span>
                    </span>
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Recipe Details <span>*</span>
                  </span>
                </label>
                <textarea
                  {...register("recipe Details", { required: true })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
