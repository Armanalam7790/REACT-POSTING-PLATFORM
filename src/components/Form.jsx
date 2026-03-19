import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Form = ({ setform }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

//   const submitHandler = (data) => {
//   setform((prev) => [...prev, data]);

//   reset();
// };
const submitHandler = (data) => {
  setform((prev) => [
    ...prev,
    { id: Date.now(), ...data }
  ]);

  toast.success('Post is Create')
  reset();
};
 

  return (
    <div className="w-full flex justify-center">
      <form
        className="flex items-start mt-10 gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex flex-col">
          <input
            type="text"
            {...register("name", {
              required: "Post is required",
            })}
            placeholder="Write your post..."
            className="p-3 border rounded w-64 focus:outline-none text-white  focus:ring-blue-400"
          />

       
          <p className="text-red-500 text-sm h-5">
            {errors.name ? errors.name.message : ""}
          </p>
        </div>

         <div className="flex flex-col">
          <input
            type="url"
            {...register("img", {
              required: "Image is required",
            })}
            placeholder="Image Url.."
            className="p-3 border rounded w-64 focus:outline-none text-white  focus:ring-blue-400"
          />

       
          <p className="text-red-500 text-sm h-5">
            {errors.img ? errors.img.message : ""}
          </p>
        </div>

        <button
          type="submit"
          className="p-3 bg-red-500 text-white rounded active:scale-95 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Form;









// import React from "react";
// import { useForm } from "react-hook-form";

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const sabmitHandler = (e) => {
//     console.log(e);
//   };
//   return (
//     <div
//       className="
        
//       "
//     >
//       <form
//         className="flex
//         mt-10
//         gap-5"
//         onSubmit={handleSubmit(sabmitHandler)}
//       >
//       <div>       
//          <input
//           type="text"
//           {...register("name", { required: "Name is Required" })}
//           placeholder="Name"
//           className="
//           p-3
//           border
//           rounded
//         "
//         />
//        {errors.name && <p>{errors.name.message}</p>}</div>
//         <button
//           className="
//           p-3
//           text-red-700
//           border border-red-700
//           rounded 
          
//         "
//         >
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
