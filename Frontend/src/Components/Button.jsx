export default function Button({ children, variant = "primary", ...props }) {
  const base = "uppercase font-bold rounded transition duration-200";
  const styles = {
    primary: "bg-brand text-white px-6 py-3 hover:bg-red-700",
    outline: "border border-brand text-brand px-6 py-3 hover:bg-brand hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`} {...props}>{children}</button>;
}
