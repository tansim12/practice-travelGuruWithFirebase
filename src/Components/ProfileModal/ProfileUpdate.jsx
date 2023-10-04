import React from "react";
import ProfileUpdateInfo from "./ProfileUpdateInfo";

const ProfileUpdate = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="text-black btn btn-ghost w-full btn-outline  drawer-button"
          >
            {" "}
            Update Profile
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 md:w-72 lg:w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
             <ProfileUpdateInfo></ProfileUpdateInfo>
          </ul>
        </div>
      </div>
      <p className=""></p>
    </div>
  );
};

export default ProfileUpdate;
