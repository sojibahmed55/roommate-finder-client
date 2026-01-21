import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    fetch('http://localhost:5000/roommate', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data => {
        console.log("data come soon", data);
        if (data.insertedId) {
          alert('added suceess')
        }
      })
  }




  return (
    // <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
    //   <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
    //     Add  Listing
    //   </h2>
    //   <form onSubmit={handleSubmit} className="space-y-4">
    //     <input
    //       name="title"
    //       type="text"
    //       placeholder="Title"
    //       className="input input-bordered w-full"
    //       required
    //     />
    //     <input
    //       name="location"
    //       type="text"
    //       placeholder="Location"
    //       className="input input-bordered w-full"
    //       required
    //     />
    //     <input
    //       name="rent"
    //       type="number"
    //       placeholder="Rent Amount"
    //       className="input input-bordered w-full"
    //       required
    //     />
    //     <input
    //       name="photoUrl"
    //       type="text"
    //       placeholder="Photo URL"
    //       className="input input-bordered w-full"
    //       required
    //     />
    //     <select
    //       name="roomType"
    //       className="select select-bordered w-full"
    //       required
    //     >
    //       <option disabled value="">
    //         Room Type
    //       </option>
    //       <option value="Single">Single</option>
    //       <option value="Shared">Shared</option>
    //     </select>
    //     <select
    //       name="lifestylePreferences"
    //       className="select select-bordered w-full"
    //       required
    //     >
    //       <option disabled value="">
    //         Lifestyle Preferences
    //       </option>
    //       <option value="Pets">Pets</option>
    //       <option value="Smoking">Smoking</option>
    //       <option value="Night Owl">Night Owl</option>
    //     </select>
    //     <textarea
    //       name="description"
    //       placeholder="Description"
    //       className="textarea textarea-bordered w-full"
    //       rows={5}
    //       required
    //     />
    //     <input
    //       name="contactInfo"
    //       type="text"
    //       placeholder="Contact Info"
    //       className="input input-bordered w-full"
    //       required
    //     />
    //     <select
    //       name="availability"
    //       className="select select-bordered w-full"
    //       required
    //     >
    //       <option disabled value="">
    //         Availability
    //       </option>
    //       <option value="Available">Available</option>
    //       <option value="Not Available">Not Available</option>
    //     </select>
    //     <input
    //       name="userEmail"
    //       type="email"
    //       defaultValue={user?.email}
    //       readOnly
    //       className="input input-bordered w-full bg-gray-100 text-gray-600"
    //     />
    //     <input
    //       name="userName"
    //       type="text"
    //       defaultValue={user?.displayName}
    //       readOnly
    //       className="input input-bordered w-full bg-gray-100 text-gray-600"
    //     />
    //     <button
    //       type="submit"
    //       className="btn btn-primary w-full uppercase tracking-wide"
    //     >
    //       Add
    //     </button>
    //   </form>
    // </div>

    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-3xl bg-[#fdfbf7] rounded-[28px] shadow-[0_28px_80px_rgba(143,120,72,0.25)] border border-[#e2d6bf] p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold tracking-[0.18em] text-[#161616]">
            ADD LISTING
          </h2>
          <div className="mt-3 h-[1px] w-20 mx-auto bg-[#8f7848]" />
          <p className="text-sm text-gray-500 mt-3">
            Understated. Premium. Intentional.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Inputs */}
          {[
            { name: "title", placeholder: "Title" },
            { name: "location", placeholder: "Location" },
            { name: "rent", placeholder: "Rent Amount", type: "number" },
            { name: "photoUrl", placeholder: "Photo URL" },
          ].map((field, i) => (
            <input
              key={i}
              name={field.name}
              type={field.type || "text"}
              placeholder={field.placeholder}
              required
              className="
                w-full px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848]
                focus:ring-1 focus:ring-[#e9dec8]
                transition-all duration-200
                placeholder:text-gray-400 text-sm
              "
            />
          ))}

          {/* Select */}
          <select
            name="roomType"
            required
            className="w-full px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848]"
          >
            <option disabled selected>Room Type</option>
            <option>Single</option>
            <option>Shared</option>
          </select>

          <select
            name="lifestylePreferences"
            required
            className="w-full px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848]"
          >
            <option disabled selected>Lifestyle Preference</option>
            <option>Pets</option>
            <option>Smoking</option>
            <option>Night Owl</option>
          </select>

          {/* Textarea */}
          <textarea
            name="description"
            rows="3"
            placeholder="Description"
            required
            className="
              md:col-span-2 px-4 py-3.5 rounded-[18px]
              bg-white border border-[#ddd2bd]
              focus:border-[#8f7848]
              focus:ring-1 focus:ring-[#e9dec8]
              text-sm
            "
          />

          <input
            name="contactInfo"
            placeholder="Contact Info"
            required
            className="md:col-span-2 px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848]"
          />

          <select
            name="availability"
            required
            className="md:col-span-2 px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848]"
          >
            <option disabled selected>Availability</option>
            <option>Available</option>
            <option>Not Available</option>
          </select>

          {/* Read only */}
          <input
            name="userEmail"
            defaultValue={user?.email}
            readOnly
            className="px-4 py-3.5 rounded-[18px] bg-[#f1ede5] text-gray-600 text-sm"
          />

          <input
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="px-4 py-3.5 rounded-[18px] bg-[#f1ede5] text-gray-600 text-sm"
          />

          {/* Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="cursor-pointer
                w-full py-3.5 rounded-full text-sm font-medium tracking-[0.3em]
                text-[#161616]
                bg-[#e3d8c2]
                hover:bg-[#d6c8aa]
                hover:shadow-[0_14px_40px_rgba(143,120,72,0.4)]
                transition-all
              "
            >
              Add Listing
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default AddListing;
