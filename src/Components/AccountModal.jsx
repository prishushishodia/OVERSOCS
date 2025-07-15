import { useNavigate } from "react-router-dom";

export default function AccountModal() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[90%] md:w-[600px] p-6 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ×
        </button>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Login/Signup</h2>
          <p className="text-sm text-gray-500">Enter your mobile number</p>
        </div>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-4"
        />
        <p className="text-xs mt-4 text-gray-500">
          By logging in, you're agreeing to our{" "}
          <a href="/privacy" className="underline">Privacy Policy</a> &{" "}
          <a href="/terms" className="underline">Terms of Service</a>
        </p>
      </div>
    </div>
  );
}
