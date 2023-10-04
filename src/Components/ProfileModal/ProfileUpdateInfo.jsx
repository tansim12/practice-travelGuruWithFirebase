import toast, { Toaster } from "react-hot-toast";
import useAuthContext from "../../useAuthContext";

const ProfileUpdateInfo = () => {
  const { profileUpdate } = useAuthContext();
  const handleProfileInfo = (e) => {
    e.preventDefault();

    const img = e.target.img.value;
    const firstName = e.target.firstName.value;
    profileUpdate(firstName, img)
      .then(() => {
        toast.success("Profile updated successfully");
        e.target.reset();
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div class="bg-white dark:bg-gray-900 max-w-md mx-auto p-6 rounded-lg shadow-lg">
        <form onSubmit={handleProfileInfo}>
          <div class="mb-6">
            <input
              type="url"
              name="img"
              id="img"
              class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
              placeholder=" Photo URL"
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              name="education"
              id="education"
              class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
              placeholder="Education"
              
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              name="presentAddress"
              id="presentAddress"
              class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
              placeholder="Present Address"
              
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="mb-6">
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
                placeholder="First name"
                required
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
                placeholder="Last name"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="mb-6">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
                placeholder="Phone (+88)"
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                class="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none"
                placeholder="Company "
              />
            </div>
          </div>
          <button
            type="submit"
            class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm w-full px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default ProfileUpdateInfo;
