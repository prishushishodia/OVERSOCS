import { Link } from "react-router-dom";
import bg from "../assets/d.jpg";

export default function Login() {
  return (
    <main className="grid min-h-screen bg-canvas lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <h2 className="text-display text-6xl leading-[0.9] text-cream">
            Welcome
            <br />
            back, <span className="text-ember">bold one.</span>
          </h2>
          <p className="mt-4 max-w-sm font-archivo text-cream/60">
            Sign in to track orders, save your favourites and get first dibs on every drop.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center px-6 py-28">
        <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">Account</p>
          <h1 className="text-display mb-8 text-5xl text-ink">Log in</h1>

          <label className="mb-4 block">
            <span className="mb-1.5 block font-grotesk text-xs uppercase tracking-wide text-ink-soft">Email</span>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-ink/20 bg-transparent px-4 py-3 font-grotesk text-sm text-ink placeholder-ink-soft/50 focus:border-ink focus:outline-none"
            />
          </label>
          <label className="mb-2 block">
            <span className="mb-1.5 block font-grotesk text-xs uppercase tracking-wide text-ink-soft">Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-ink/20 bg-transparent px-4 py-3 font-grotesk text-sm text-ink placeholder-ink-soft/50 focus:border-ink focus:outline-none"
            />
          </label>
          <div className="mb-6 text-right">
            <a href="#" className="font-grotesk text-xs uppercase tracking-wide text-ink-soft hover:text-ember">Forgot password?</a>
          </div>

          <button className="btn btn-solid w-full">Log in</button>

          <p className="mt-6 text-center font-grotesk text-sm text-ink-soft">
            New here?{" "}
            <Link to="/register" className="text-ink link-underline">Create an account</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
