interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPages = (currentPage: number) => {
    let indexArr = [];
    if (currentPage <= 2) {
      indexArr = [1, 2, 3, -1, totalPages];
    } else if (currentPage === 3) {
      indexArr = [1, 2, 3, 4, -1, totalPages];
    } else if (currentPage + 2 === totalPages) {
      indexArr = [1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else if (currentPage + 2 >= totalPages) {
      indexArr = [1, -1, totalPages - 2, totalPages - 1, totalPages];
    } else {
      indexArr = [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
    }

    return indexArr.map((page, index) => (
      <li key={index}>
        {page < 0 ? (
          <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            ...
          </div>
        ) : (
          <div
            className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer ${
              page === currentPage
                ? "text-pink-600 border border-gray-300 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 "
                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        )}
      </li>
    ));
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <div
            className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            onClick={() => handlePageChange(currentPage === 1 ? 1 : currentPage - 1)}
          >
            Previous
          </div>
        </li>
        {totalPages > 7 && renderPages(currentPage)}
        {totalPages <= 7 &&
          [...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <div
                className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer ${
                  index + 1 === currentPage
                    ? "text-pink-600 border border-gray-300 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 "
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </div>
            </li>
          ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={() =>
              handlePageChange(currentPage === totalPages ? totalPages : currentPage + 1)
            }
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
