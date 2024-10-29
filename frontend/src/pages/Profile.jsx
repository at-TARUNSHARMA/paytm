import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulated fetching user data (replace with your actual API call)
    const token = localStorage.getItem("token");
    if (token) {
      setUser({
        username: "harkirat@gmail.com", // Replace with actual username from API
        firstName: "Harkirat",
        lastName: "Singh",
        profilePicture: "https://via.placeholder.com/150", // Placeholder image
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
        {user ? (
          <>
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-indigo-500"
            />
            <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-600">{user.username}</p>
          </>
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
