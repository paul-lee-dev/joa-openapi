interface IProps {
  title: string;
  onClick?: () => void;
}

export default function CommonLabel({ title, onClick }: IProps) {
  return (
    <div className="relative w-20 h-8 bg-gray-300 rounded-xl flex justify-center items-center">
      <h1 className="mr-3 text-center w-14 overflow-clip overflow-ellipsis break-words line-clamp-1 text-sm font-semibold">
        {title}
      </h1>
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 flex justify-center items-center text-xs cursor-pointer text-gray-400 hover:text-gray-500"
      >
        X
      </button>
    </div>
  );
}
