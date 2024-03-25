interface ButtonProps {
  id: string;
  name: string;
  onClick: () => void;
}

export default function Button({ id, name, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      type="submit"
      className="text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
