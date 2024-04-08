const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-4 bg-emerald-900 rounded-full text-white"
    >
      {children}
    </button>
  );
};

export default Button;
