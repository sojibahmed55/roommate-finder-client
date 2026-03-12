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
  const [dataLoading, setDataLoading] = useState(true);

  // Fetch user's listings
  useEffect(() => {
    if (user?.email) {
      setDataLoading(true);

      fetch(`http://localhost:5000/roommate-by-email?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setListings(data);
          setDataLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setDataLoading(false);
        });
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
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setListings(listings.filter((item) => item._id !== id));
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
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setListings(
            listings.map((item) =>
              item._id === selectedItem._id
                ? { ...item, ...updatedRoommate }
                : item,
            ),
          );
          Swal.fire("Updated!", "Listing updated successfully", "success");
          setSelectedItem(null);
        }
      });
  };

  if (loading || dataLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-[#c9b27c]">My Listings</h1>
      <div className="overflow-x-auto rounded-3xl border border-[#8f7848]/30 dark:border-[#8f7848]/40  dark:from-[#14120f] dark:to-[#1b1813]shadow-[0_20px_60px_rgba(143,120,72,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500">
        <table className="w-full min-w-[750px] text-sm">
          {/* Header */}
          <thead>
            <tr
              className="text-[#8f7848] dark:text-[#d6c08a] 
                     uppercase tracking-[0.15em] text-xs 
                     border-b border-[#e8dcc4] dark:border-[#2a241c]"
            >
              <th className="py-5 px-6 text-left font-semibold">Title</th>
              <th className="py-5 px-6 text-center font-semibold">Room</th>
              <th className="py-5 px-6 text-center font-semibold">Rent</th>
              <th className="py-5 px-6 text-center font-semibold">Location</th>
              <th className="py-5 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {listings.map((item) => (
              <tr
                key={item._id}
                className="
            group
            border-b border-[#f1e7d2] dark:border-[#1f1a14]
            hover:bg-gradient-to-r
            hover:from-[#fdf9f0]
            hover:to-[#ffffff]
            dark:hover:from-[#1f1a14]
            dark:hover:to-[#2a241c]
            transition-all duration-300
          "
              >
                <td className="px-6 py-5 font-semibold text-[#1a1a1a] dark:text-gray-200">
                  {item.title}
                </td>

                <td className="px-6 py-5 text-center font-medium text-[#4a4a4a] dark:text-gray-400">
                  {item.roomType}
                </td>

                <td className="px-6 py-5 text-center font-bold text-[#8f7848] dark:text-[#d6c08a] tracking-wide">
                  $ {item.rent}
                </td>

                <td className="px-6 py-5 text-center font-medium text-[#555] dark:text-gray-400">
                  {item.location}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-4">
                    {/* Edit Button */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="
                  w-11 h-11 grid place-items-center
                  rounded-2xl
                  border border-[#8f7848]/60
                  text-[#8f7848]
                  dark:border-[#d6c08a]/60
                  dark:text-[#d6c08a]
                  bg-white dark:bg-[#1a1713]
                  hover:bg-[#8f7848]
                  hover:text-black
                  dark:hover:bg-[#d6c08a]
                  dark:hover:text-black
                  transition-all duration-300
                  shadow-md hover:shadow-xl
                  hover:scale-105
                  cursor-pointer
                "
                    >
                      <FaEdit className="text-xl" />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="
                  w-11 h-11 grid place-items-center
                  rounded-2xl
                  border border-red-500/70
                  text-red-600
                  dark:border-red-400/60
                  dark:text-red-400
                  bg-white dark:bg-[#1a1713]
                  hover:bg-red-600
                  hover:text-white
                  transition-all duration-300
                  shadow-md hover:shadow-xl
                  hover:scale-105
                  cursor-pointer
                "
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
        // <dialog
        //   open
        //   className="modal modal-bottom sm:modal-middle backdrop-blur-md bg-black/30"
        // >
        <dialog
          open
          className="modal modal-middle backdrop-blur-md bg-black/30"
        >
          <div
            className="
              modal-box max-w-3xl 
              bg-[#fdfbf7]
              dark:bg-gradient-to-br dark:from-[#14120f] dark:via-[#181510] dark:to-[#1f1a14]
              dark:text-[#e3d8c2]
              dark:border-[#2a241c]
              rounded-[28px]
              border border-[#e2d6bf]
              shadow-[0_28px_80px_rgba(143,120,72,0.25)]
              dark:shadow-[0_35px_90px_rgba(0,0,0,0.7)]
              p-8 
            "
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-[#161616] dark:text-[#ffffff] dark:drop-shadow-[0_0_12px_rgba(214,192,138,0.3)]">
                Update Your Post
              </h3>
              <div
                className="mt-3 h-[1px] w-20 mx-auto bg-gradient-to-r
                      from-transparent
                      via-[#8f7848]
                      to-transparent
                      dark:via-[#d6c08a]"
              />
              {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Refine. Adjust. Elevate.
              </p> */}
            </div>

            <form
              onSubmit={handleUpdateRoommate}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* Inputs */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Title
                </label>
                <input
                  name="title"
                  defaultValue={selectedItem.title}
                  placeholder="Title"
                  className="w-full px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
                text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                dark:focus:ring-[#3a3123]
                transition-all duration-300"
                />
              </div>

              {/* location */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </label>
                <input
                  name="location"
                  defaultValue={selectedItem.location}
                  placeholder="Location"
                  className="w-full px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
                text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                dark:focus:ring-[#3a3123]
                transition-all duration-300"
                />
              </div>
              {/* Rent */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Rent Amount
                </label>
                <input
                  name="rent"
                  type="number"
                  defaultValue={selectedItem.rent}
                  placeholder="Rent Amount"
                  className="w-full px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
                text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                dark:focus:ring-[#3a3123]
                transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Room Type
                </label>
                <select
                  name="roomType"
                  defaultValue={selectedItem.roomType}
                  className="w-full px-4 py-3.5 rounded-[18px]
  bg-white border border-[#ddd2bd]
  focus:border-[#8f7848] text-sm
  dark:bg-[#1c1914]
  dark:border-[#2f291f]
  dark:text-[#ffffff]
  dark:focus:border-[#d6c08a]
  transition-all duration-300"
                >
                  <option value="" disabled={true}>
                    Select Your Room Type
                  </option>
                  <option value="Single">Single</option>
                  <option value="Shared">Shared</option>
                </select>
              </div>

              {/* Lifestyle Preferences */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Lifestyle Preferences
                </label>
                <select
                  name="lifestylePreferences"
                  defaultValue={selectedItem.lifestylePreferences}
                  className="w-full px-4 py-3.5 rounded-[18px]
  bg-white border border-[#ddd2bd]
  focus:border-[#8f7848] text-sm
  dark:bg-[#1c1914]
  dark:border-[#2f291f]
  dark:text-[#ffffff]
  dark:focus:border-[#d6c08a]
  transition-all duration-300"
                >
                  <option value="" disabled={true}>
                    Select Your Lifestyle Preferences
                  </option>
                  <option value="Pets">Pets</option>
                  <option value="Smoking">Smoking</option>
                  <option value="Night Owl">Night Owl</option>
                </select>
              </div>

              {/* Availability */}
              <div className="flex flex-col  gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Availability
                </label>
                <select
                  name="availability"
                  defaultValue={selectedItem.availability}
                  className="w-full px-4 py-3.5 rounded-[18px]
  bg-white border border-[#ddd2bd]
  focus:border-[#8f7848] text-sm
  dark:bg-[#1c1914]
  dark:border-[#2f291f]
  dark:text-[#ffffff]
  dark:focus:border-[#d6c08a]
  transition-all duration-300"
                >
                  <option value="" disabled={true}>
                    Choose Availability
                  </option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>

              {/* Descriptions */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedItem.description}
                  rows={3}
                  placeholder="Short description..."
                  className="md:col-span-2 px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
                text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                dark:focus:ring-[#3a3123]
                transition-all duration-300"
                />
              </div>

              {/* ContactInfo */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Contact Information
                </label>
                <input
                  name="contactInfo"
                  defaultValue={selectedItem.contactInfo}
                  placeholder="Contact Information"
                  className="md:col-span-2 px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                transition-all duration-300"
                />
              </div>

              {/* Photo Url */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Photo URL
                </label>
                <input
                  name="photoUrl"
                  defaultValue={selectedItem.photoUrl}
                  placeholder="Photo URL"
                  className="md:col-span-2 px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  User Name
                </label>
                <input
                  name="userName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
                text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                dark:focus:ring-[#3a3123]
                transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 dark:text-gray-400">
                 User Email
                </label>
                <input
                  name="userEmail"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full px-4 py-3.5 rounded-[18px]
                bg-white border border-[#ddd2bd]
                focus:border-[#8f7848] focus:ring-1 focus:ring-[#e9dec8]
                text-sm
                dark:bg-[#1c1914]
                dark:border-[#2f291f]
                dark:text-[#ffffff]
                dark:placeholder:text-gray-400
                dark:focus:border-[#d6c08a]
                dark:focus:ring-[#3a3123]
                transition-all duration-300"
                />
              </div>

              {/* Actions */}
              <div className="md:col-span-2 pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="w-1/2 py-3.5 cursor-pointer rounded-full text-sm tracking-[0.3em]
                  border border-gray-400 text-gray-600
                  hover:bg-gray-100 
                  dark:border-[#3a3328]
                  dark:text-[#b7ad98]
                  dark:hover:bg-[#1f1b15]
                  dark:hover:text-[#e6dcc6]
                  transition-all duration-300"
                >
                  CANCEL
                </button>

                <button
                  type="submit"
                  className="w-1/2 py-3.5 rounded-full cursor-pointer text-sm font-medium tracking-[0.3em]
                  text-[#161616] bg-[#e3d8c2]
                  hover:bg-[#d6c8aa]
                  hover:shadow-[0_14px_40px_rgba(143,120,72,0.4)]
                  transition-all
                  
                  dark:hover:shadow-[0_20px_60px_rgba(214,192,138,0.45)]
                  dark:hover:scale-[1.02]
                  duration-300"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyListing;
