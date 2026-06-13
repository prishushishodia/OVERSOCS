import { Link } from "react-router-dom";
import bg from "../assets/a.jpg";

export default function Register() {
  return (
    <main className="grid min-h-screen bg-canvas lg:grid-cols-2">
      {/* Form */}
      <div className="flex items-center justify-center px-6 py-28">
        <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">Join the club</p>
          <h1 className="text-display mb-8 text-5xl text-ink">Create account</h1>

          {[
            { label: "Name", type: "text", ph: "Your name" },
            { label: "Email", type: "email", ph: "you@email.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map((field) => (
            <label key={field.label} className="mb-4 block">
              <span className="mb-1.5 block font-grotesk text-xs uppercase tracking-wide text-ink-soft">{field.label}</span>
              <input
                type={field.type}
                placeholder={field.ph}
                className="w-full border border-ink/20 bg-transparent px-4 py-3 font-grotesk text-sm text-ink placeholder-ink-soft/50 focus:border-ink focus:outline-none"
              />
            </label>
          ))}

          <button className="btn btn-solid mt-2 w-full">Sign up</button>

          <p className="mt-6 text-center font-grotesk text-sm text-ink-soft">
            Already a member?{" "}
            <Link to="/login" className="text-ink link-underline">Log in</Link>
          </p>
        </form>
      </div>

      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <h2 className="text-display text-6xl leading-[0.9] text-cream">
            Step into
            <br />
            the <span className="text-ember">bold</span> club.
          </h2>
          <p className="mt-4 max-w-sm font-archivo text-cream/60">
            Members get early access to limited runs, restock alerts and exclusive colourways.
          </p>
        </div>
      </div>
    </main>
  );
}
