/**
 * Button — thin wrapper over the .btn design-system classes so JSX can
 * pick a variant by name. Use a plain <Link className="btn btn-solid">
 * for navigation; this is for actual <button> actions.
 */
export default function Button({ children, variant = "solid", className = "", ...props }) {
  const variants = {
    solid: "btn btn-solid",
    outline: "btn btn-outline",
  };
  return (
    <button className={`${variants[variant] ?? variants.solid} ${className}`} {...props}>
      {children}
    </button>
  );
}
