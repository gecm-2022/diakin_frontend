import React, { useState } from "react";
import { useAuth } from "../context/contextapi"; // Assuming the context file is in the "context" folder
import { toast } from "react-toastify"; // Ensure you import toast for error handling

const ChangePassword = () => {
  const { changePassword } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return toast.error("New passwords do not match");
    }

    await changePassword(oldPassword, newPassword);
  };

  return (
    <div className="flex w-full m-auto items-center justify-center h-screen bg-gray-100">
      <div className=" max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
