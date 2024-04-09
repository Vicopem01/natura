const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className="py-3 px-4 bg-emerald-900 rounded-full text-white"
    >
      {children}
    </button>
  );
};

export default Button;
