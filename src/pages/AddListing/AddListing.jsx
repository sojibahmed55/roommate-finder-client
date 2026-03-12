import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    fetch("http://localhost:5000/roommate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data come soon", data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Roommate Post Is Created",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();

          // alert("added suceess");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 dark:bg-gradient-to-br dark:from-[#0f0e0c] dark:via-[#14120f] dark:to-[#1a1712] transition-colors duration-500 pb-8 pt-8">
      <div
        className="w-full max-w-3xl dark:bg-gradient-to-br dark:from-[#1a1611] dark:via-[#1f1a14] dark:to-[#262017]
dark:shadow-[0_40px_100px_rgba(0,0,0,0.75)] dark:border-[#2f291f]
 bg-[#fdfbf7] rounded-[28px] shadow-[0_28px_80px_rgba(143,120,72,0.25)] border border-[#e2d6bf] p-8"
      >
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#161616] dark:text-[#ffffff] leading-snug sm:leading-normal dark:drop-shadow-[0_0_14px_rgba(214,192,138,0.35)]">
            Add to Find Roommate
          </h2>
          <div className="mt-3 h-[1px] w-20 mx-auto bg-[#8f7848] dark:bg-gradient-to-r dark:from-transparent dark:via-[#d6c08a] dark:to-transparent" />
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-3 sm:mt-4 max-w-xs sm:max-w-md md:max-w-lg mx-auto dark:text-[#eaeaea] leading-relaxed">
            Match smart. Live better. Find your perfect roommate.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Inputs */}
          {[
            { name: "title", placeholder: "Title" },
            { name: "location", placeholder: "Location" },
            { name: "rent", placeholder: "Rent Amount", type: "number" },
            { name: "photoUrl", placeholder: "Photo URL" },
          ].map((field, i) => (
            <div key={i} className="flex flex-col gap-1">
              <label className="text-sm text-gray-500 dark:text-gray-400">
                {field.placeholder}
              </label>

              <input
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
                dark:bg-[#1c1914]
            dark:border-[#3a3226]
            dark:text-[#ffffff]
            dark:placeholder:text-gray-400
            dark:focus:border-[#d6c08a]
            dark:focus:ring-[#3a3123]
      "
              />
            </div>
          ))}

          {/* Select */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Room Type
            </label>

            <select
              name="roomType"
              required
              defaultValue=""
              className="w-full px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848] dark:bg-[#1c1914] dark:border-[#3a3226]
          dark:text-[#ffffff]
          dark:focus:border-[#d6c08a]
          transition-all duration-300"
            >
              <option value="" disabled>
                Select Room Type
              </option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Lifestyle Preference
            </label>

            <select
              name="lifestylePreferences"
              required
              defaultValue=""
              className="w-full px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848] dark:bg-[#1c1914] dark:border-[#3a3226]
    dark:text-[#ffffff]
    dark:focus:border-[#d6c08a]
    transition-all duration-300"
            >
              <option value="" disabled>
                Select Lifestyle Preference
              </option>
              <option value="Pets">Pets</option>
              <option value="Smoking">Smoking</option>
              <option value="Night Owl">Night Owl</option>
            </select>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Description
            </label>

            <textarea
              name="description"
              rows="3"
              placeholder="Description"
              required
              className="px-4 py-3.5 rounded-[18px]
              bg-white border border-[#ddd2bd]
              focus:border-[#8f7848]
              focus:ring-1 focus:ring-[#e9dec8]
              text-sm
       dark:bg-[#1c1914]
          dark:border-[#3a3226]
          dark:text-[#ffffff]
          dark:placeholder:text-gray-400
          dark:focus:border-[#d6c08a]
          dark:focus:ring-[#3a3123]"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Contact Info
            </label>

            <input
              name="contactInfo"
              placeholder="Contact Info"
              required
              className="px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848] dark:bg-[#1c1914] dark:border-[#3a3226]
          dark:text-[#e6dcc6]
          dark:placeholder:text-gray-400
          dark:focus:border-[#d6c08a]
          transition-all duration-300"
            />
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Availability
            </label>

            <select
              name="availability"
              required
              defaultValue=""
              className="px-4 py-3.5 rounded-[18px] bg-white border border-[#ddd2bd] text-sm focus:border-[#8f7848] dark:bg-[#1c1914] dark:border-[#3a3226]
    dark:text-[#ffffff]
    dark:focus:border-[#d6c08a]
    transition-all duration-300"
            >
              <option value="" disabled>
                Choose Availability
              </option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>

          {/* Read only */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              User Name
            </label>

            <input
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="px-4 py-3.5 rounded-[18px] bg-[#f1ede5] text-gray-600 text-sm dark:bg-[#15120e] dark:text-[#ffffff]"
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Email
            </label>

            <input
              name="userEmail"
              defaultValue={user?.email}
              readOnly
              className="px-4 py-3.5 rounded-[18px] bg-[#f1ede5] text-gray-600 text-sm dark:bg-[#15120e] dark:text-[#ffffff]"
            />
          </div>

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
