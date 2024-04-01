interface ButtonProps {
  id: string;
  name: string;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button({ id, name, onClick, type }: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      className="text-white h-10 bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
