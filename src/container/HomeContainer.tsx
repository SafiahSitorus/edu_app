"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUserProfile } from "@/features/user/userThunks";
import { logoutUser } from "@/features/user/userSlice";

export default function HomeContainer() {
  const dispatch = useDispatch<AppDispatch>();

  const { profile, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Dashboard User
      </h1>

      {loading && <p className="text-gray-600">Loading profile...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {profile ? (
        <div className="bg-white shadow-md rounded-xl p-6 text-center w-80">
          <p className="text-xl font-semibold">{profile.name}</p>
          <p className="text-gray-500">{profile.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        !loading && <p className="text-gray-600">No user data found.</p>
      )}
    </div>
  );
}
