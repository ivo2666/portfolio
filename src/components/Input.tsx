interface InputProps {
  value?: string;
  label: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ value, setValue, label, required }) => {
  return (
    <div className="relative  z-0 w-full mt-5 mb-6 group border-primary odd:border-secondary text-primary odd:text-secondary">
      <input
        required={required || false}
        type="text"
        name={label}
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-300 appearance-none focus:outline-none focus:ring-0 focus:border-inherit peer"
      />
      <label
        htmlFor={label}
        className="peer-focus:font-medium absolute text-sm text-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-inherit peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
      >
        {label}
      </label>
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please type something.
      </p>
    </div>
  );
};

export default Input;
