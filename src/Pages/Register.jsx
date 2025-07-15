export default function Register() {
  return (
    <div className="bg-cream py-20 px-4 flex justify-center">
      <form className="bg-white p-8 shadow-card rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-heading uppercase text-brand font-bold mb-6 text-center">Create Account</h2>
        <input type="text" placeholder="Name" className="w-full mb-4 p-3 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded" />
        <input type="password" placeholder="Password" className="w-full mb-6 p-3 border border-gray-300 rounded" />
        <button className="w-full bg-brand text-white uppercase px-6 py-3 rounded font-bold hover:bg-red-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
}
