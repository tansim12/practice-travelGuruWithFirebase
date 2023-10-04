import useAuthContext from "../../useAuthContext";

const ProfileAvatarAndName = () => {
  const { user } = useAuthContext();
  return (
    <div className="flex items-center gap-5 p-2">
      <div>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={user?.photoURL ? user?.photoURL : ""}
              alt={user?.displayName}
            />
          </div>
        </div>
      </div>
      {user?.displayName ? (
        <span className="text-xl font-extrabold">{user?.displayName}</span>
      ) : (
        <span className="text-xl font-extrabold">Author</span>
      )}
    </div>
  );
};

export default ProfileAvatarAndName;
