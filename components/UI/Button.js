import Link from "next/link";

const Button = ({ children, onClick, type, href }) => {
  return type === "link" ? (
    <Link
      onClick={onClick}
      href={href}
      className="py-3 px-4 bg-green rounded-lg text-white"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="py-3 px-4 bg-green rounded-lg text-white"
    >
      {children}
    </button>
  );
};

export default Button;
