const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className="py-3 px-4 bg-green rounded-lg text-white"
    >
      {children}
    </button>
  );
};

export default Button;
