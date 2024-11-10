const Lines = ({ height }) => {
  return (
    <div className={`flex ${height ? `h-[${height}px]` : "h-full"}`}>
      <div className="bg-green-light w-20 h-full"></div>
      <div className="bg-green w-20 h-full"></div>
      <div className="bg-green-dark w-20 h-full"></div>
    </div>
  );
};

export default Lines;
