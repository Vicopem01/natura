const FormInput = ({ type, id, placeholder, onChange, label, value }) => {
  return (
    <div className="relative bg-inherit w-full max-w-96 mx-auto">
      <input
        type={type || "text"}
        id={id}
        className="peer w-full bg-transparent h-10 border-emerald-900 placeholder-transparent rounded-lg ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <label
        htmlFor={id}
        className="absolute cursor-text left-0 -top-6 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
