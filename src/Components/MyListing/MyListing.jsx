// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from '../../contexts/AuthContext/AuthContext';
// import { Link } from "react-router";

// const MyListing = () => {
//   const { user } = useContext(AuthContext);
//   const [listings, setListings] = useState([]);

//   // Fetch user's added data
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:5000/roommate-by-email?email=${user.email}`)
//         .then(res => res.json())
//         .then(data => setListings(data));
//     }
//   }, [user]);

//   const handleDelete = (id) => {
    
//     fetch(`http://localhost:5000/roommate/${id}`, {
//       method: "DELETE",
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.deletedCount > 0) {
//           setListings(listings.filter(item => item._id !== id));
//         }
//       });
//   };

//   return (
//     <div className="max-w-5xl mx-auto my-10">
//       <h1 className="text-3xl font-bold mb-6">My Listings</h1>

//       <table className="table w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th>Name</th>
//             <th>Room Type</th>
//             <th>Rent</th>
//             <th>Location</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {listings.map(item => (
//             <tr key={item._id} className="border">
//               <td>{item.title}</td>
//               <td>{item.roomType}</td>
//               <td>{item.rent}</td>
//               <td>{item.location}</td>
//               <td className="flex gap-2">
//                 <Link to={`/roommate-update/${item._id}`} className="btn btn-warning btn-sm">
//                   Update
//                 </Link>

//                 <button 
//                   onClick={() => handleDelete(item._id)} 
//                   className="btn btn-error btn-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>
//     </div>
//   );
// };

// export default MyListing;


// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from '../../contexts/AuthContext/AuthContext';
// import { Link } from "react-router";
// import Swal from 'sweetalert2';
// import Spinner from "../Spinner/Spinner";
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";


// const MyListing = () => {
//   const { user, loading } = useContext(AuthContext);
//   const [listings, setListings] = useState([]);

//   // Fetch user's added data
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:5000/roommate-by-email?email=${user.email}`)
//         .then(res => res.json())
//         .then(data => setListings(data));
//     }
//   }, [user]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/roommate/${id}`, {
//           method: "DELETE",
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.deletedCount > 0) {
//               setListings(listings.filter(item => item._id !== id));
//               Swal.fire(
//                 "Deleted!",
//                 "Your listing has been deleted.",
//                 "success"
//               );
//             }
//           });
//       }
//     });
//   };
//   if (loading) {
//     return <Spinner/>
//   }

//   return (
//     <div className="max-w-6xl mx-auto my-12 px-4 md:px-0 ">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#c9b27c] tracking-wide">
//         My Listings
//       </h1>

//       {/* ONLY RESPONSIVE WRAPPER */}
//       <div className="relative overflow-x-auto rounded-3xl border border-[#8f7848] bg-gradient-to-br shadow-[0_20px_60px_rgba(201,178,124,0.15)]">

//         {/* subtle top glow */}
//         <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#c9b27c] to-transparent" />

//         <table className="w-full min-w-[700px] text-sm">
//           <thead>
//             <tr className="text-[#c9b27c] uppercase tracking-widest border-b border-[#2a2a2a]">
//               <th className="py-5 px-6 text-left">Name</th>
//               <th className="py-5 px-6 text-left">Room Type</th>
//               <th className="py-5 px-6 text-left">Rent</th>
//               <th className="py-5 px-6 text-left">Location</th>
//               {/* <th className="py-5 px-6 text-center">Actions</th> */}
//             </tr>
//           </thead>

//           <tbody className="bg-[#fdfbf7]">
//             {listings.map(item => (
//               <tr
//                 key={item._id}
//                 className="
//                   group
//                   border-b border-[#e8dcc6]
//                   hover:bg-gradient-to-r hover:from-[#f8f3e8] hover:to-[#fff]
//                   transition-all duration-300
//                 "
//               >
//                 <td className="px-6 py-5 font-semibold text-[#1a1a1a]">
//                   {item.title}
//                 </td>

//                 <td className="px-6 py-5 text-[#4b4b4b]">
//                   {item.roomType}
//                 </td>

//                 <td className="px-6 py-5 font-bold text-[#8f7848]">
//                   $ {item.rent}
//                 </td>

//                 <td className="px-6 py-5 text-[#4b4b4b]">
//                   {item.location}
//                 </td>

//                 <td className="px-6 py-5">
//                   <div className="flex justify-center gap-3">
//                     <Link
//                       to={`/roommate-update/${item._id}`}
//                       className="
//                         w-10 h-10 grid place-items-center rounded-xl
//                         border border-[#8f7848]
//                         text-[#8f7848]
//                         hover:bg-[#8f7848] hover:text-[#0b0b0b]
//                         shadow-sm hover:shadow-md
//                         transition
//                       "
//                     >
//                       <FaEdit className="text-xl" />
//                     </Link>

//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="
//                         w-10 h-10 grid place-items-center rounded-xl
//                         border border-[#7a1f1f]
//                         text-[#7a1f1f]
//                         hover:bg-[#7a1f1f] hover:text-white
//                         shadow-sm hover:shadow-md
//                         transition cursor-pointer
//                       "
//                     >
//                       <MdDeleteForever className="text-xl" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>

   

//   );
// };

// export default MyListing;

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../Spinner/Spinner";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const MyListing = () => {
  const { user, loading } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch user's listings
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/roommate-by-email?email=${user.email}`)
        .then(res => res.json())
        .then(data => setListings(data));
    }
  }, [user]);

  // DELETE
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This listing will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8f7848",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/roommate/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setListings(listings.filter(item => item._id !== id));
              Swal.fire("Deleted!", "Listing has been deleted.", "success");
            }
          });
      }
    });
  };

  // UPDATE
  const handleUpdateRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedRoommate = Object.fromEntries(new FormData(form).entries());

    fetch(`http://localhost:5000/roommate/${selectedItem._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedRoommate),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setListings(listings.map(item =>
            item._id === selectedItem._id
              ? { ...item, ...updatedRoommate }
              : item
          ));
          Swal.fire("Updated!", "Listing updated successfully", "success");
          setSelectedItem(null);
        }
      });
  };

  if (loading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-[#c9b27c]">
        My Listings
      </h1>

      <div className="overflow-x-auto rounded-3xl border border-[#8f7848] bg-white shadow-xl">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="text-[#8f7848] uppercase tracking-wider border-b">
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6">Room</th>
              <th className="py-4 px-6">Rent</th>
              <th className="py-4 px-6">Location</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {listings.map(item => (
              <tr key={item._id} className="hover:bg-[#fdf9f0] transition">
                <td className="px-6 py-4 font-semibold">{item.title}</td>
                <td className="px-6 py-4 font-medium">{item.roomType}</td>
                <td className="px-6 py-4 font-bold text-[#8f7848]">$ {item.rent}</td>
                <td className="px-6 py-4 font-medium">{item.location}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-10 h-10 grid place-items-center rounded-xl border border-[#8f7848] text-[#8f7848] hover:bg-[#8f7848] hover:text-black transition"
                    >
                      <FaEdit className="text-xl" />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="w-10 h-10 grid place-items-center rounded-xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                    >
                      <MdDeleteForever className="text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UPDATE MODAL */}
      {selectedItem && (
        <dialog open className="modal modal-bottom sm:modal-middle backdrop-blur-md bg-black/30">
  <div
    className="
      modal-box max-w-3xl
      bg-[#fdfbf7]
      rounded-[28px]
      border border-[#e2d6bf]
      shadow-[0_28px_80px_rgba(143,120,72,0.25)]
      p-8
    "
  >
    {/* Header */}
    <div className="text-center mb-8">
      <h3 className="text-3xl font-semibold tracking-[0.18em] text-[#161616]">
        UPDATE LISTING
      </h3>
      <div className="mt-3 h-[1px] w-20 mx-auto bg-[#8f7848]" />
      <p className="text-sm text-gray-500 mt-3">
        Refine. Adjust. Elevate.
      </p>
    </div>

    <form
      onSubmit={handleUpdateRoommate}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Inputs */}
      <input
        name="title"
        defaultValue={selectedItem.title}
        placeholder="Listing Title"
        className="w-full px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
        text-sm"
      />

      <input
        name="location"
        defaultValue={selectedItem.location}
        placeholder="Location"
        className="w-full px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
        text-sm"
      />

      <input
        name="rent"
        type="number"
        defaultValue={selectedItem.rent}
        placeholder="Rent Amount"
        className="w-full px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
        text-sm"
      />

      <select
        name="roomType"
        defaultValue={selectedItem.roomType}
        className="w-full px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] text-sm"
      >
        <option>Single</option>
        <option>Shared</option>
      </select>

      <select
        name="lifestylePreferences"
        defaultValue={selectedItem.lifestylePreferences}
        className="w-full px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] text-sm"
      >
        <option>Pets</option>
        <option>Smoking</option>
        <option>Night Owl</option>
      </select>

      <select
        name="availability"
        defaultValue={selectedItem.availability}
        className="w-full px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] text-sm"
      >
        <option>Available</option>
        <option>Not Available</option>
      </select>

      <textarea
        name="description"
        defaultValue={selectedItem.description}
        rows={3}
        placeholder="Short description..."
        className="md:col-span-2 px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
        text-sm"
      />

      <input
        name="contactInfo"
        defaultValue={selectedItem.contactInfo}
        placeholder="Contact Information"
        className="md:col-span-2 px-4 py-3.5 rounded-[18px]
        bg-white border border-[#ddd2bd]
        focus:border-[#8f7848] text-sm"
      />

      {/* Actions */}
      <div className="md:col-span-2 pt-4 flex gap-4">
        <button
          type="button"
          onClick={() => setSelectedItem(null)}
          className="w-1/2 py-3.5 cursor-pointer rounded-full text-sm tracking-[0.3em]
          border border-gray-400 text-gray-600
          hover:bg-gray-100 transition"
        >
          CANCEL
        </button>

        <button
          type="submit"
          className="w-1/2 py-3.5 rounded-full cursor-pointer text-sm font-medium tracking-[0.3em]
          text-[#161616] bg-[#e3d8c2]
          hover:bg-[#d6c8aa]
          hover:shadow-[0_14px_40px_rgba(143,120,72,0.4)]
          transition-all"
        >
          UPDATE
        </button>
      </div>
    </form>
  </div>
</dialog>

        // <dialog open className="modal modal-bottom sm:modal-middle">
        //   <div className="modal-box max-w-3xl">
        //     <h3 className="text-3xl font-bold text-center mb-6 text-[#8f7848]">
        //       Update Listing
        //     </h3>

        //     <form onSubmit={handleUpdateRoommate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //       <input name="title" defaultValue={selectedItem.title} className="input input-bordered w-full" />
        //       <input name="location" defaultValue={selectedItem.location} className="input input-bordered w-full" />
        //       <input name="rent" type="number" defaultValue={selectedItem.rent} className="input input-bordered w-full" />

        //       <select name="roomType" defaultValue={selectedItem.roomType} className="select select-bordered w-full">
        //         <option>Single</option>
        //         <option>Shared</option>
        //       </select>

        //       <select name="lifestylePreferences" defaultValue={selectedItem.lifestylePreferences} className="select select-bordered w-full">
        //         <option>Pets</option>
        //         <option>Smoking</option>
        //         <option>Night Owl</option>
        //       </select>

        //       <select name="availability" defaultValue={selectedItem.availability} className="select select-bordered w-full">
        //         <option>Available</option>
        //         <option>Not Available</option>
        //       </select>

        //       <textarea
        //         name="description"
        //         defaultValue={selectedItem.description}
        //         className="textarea textarea-bordered col-span-full"
        //         rows={4}
        //       />

        //       <input
        //         name="contactInfo"
        //         defaultValue={selectedItem.contactInfo}
        //         className="input input-bordered col-span-full"
        //       />

        //       <div className="modal-action col-span-full">
        //         <button className="btn btn-outline" type="button" onClick={() => setSelectedItem(null)}>
        //           Cancel
        //         </button>
        //         <button className="btn bg-[#8f7848] text-black">
        //           Update
        //         </button>
        //       </div>
        //     </form>
        //   </div>
        // </dialog>
      )}
    </div>
  );
};

export default MyListing;
