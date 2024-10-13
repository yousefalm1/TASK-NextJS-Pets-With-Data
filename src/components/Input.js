function Input({ title, onChange, name }) {
  return (
    <div className="flex justify-center ">
      <h1 className="w-[25%]">{title}</h1>
      <input
        name={name}
        onChange={onChange}
        className="w-[70%] border pl-2 border-black rounded-md"
        placeholder={title}
      />
    </div>
  );
};

export default Input;