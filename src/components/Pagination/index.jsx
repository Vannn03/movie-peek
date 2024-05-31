import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'

const Pagination = ({ currentPage, setCurrentPage, lastPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }

    const handleNextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage((prev) => prev + 1)
            scrollTop()
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
            scrollTop()
        }
    }

    const handleSecondNextPage = () => {
        setCurrentPage((prev) => prev + 2)
        scrollTop
    }

    const handleLastPage = () => {
        setCurrentPage(lastPage)
        scrollTop()
    }

    const handleFirstPage = () => {
        setCurrentPage(1)
        scrollTop()
    }

    return (
        <div className="mt-8 flex items-center justify-center px-6">
            <div
                onClick={handleFirstPage}
                className="cursor-pointer rounded-full p-3 hover:bg-color-secondary sm:p-4"
            >
                <HiOutlineChevronDoubleLeft />
            </div>
            <div
                onClick={handlePrevPage}
                className="cursor-pointer rounded-full p-3 hover:bg-color-secondary sm:p-4"
            >
                <FaChevronLeft />
            </div>
            <div className="mx-4 flex items-center gap-1">
                <p className="cursor-default bg-color-light-accent px-3 py-2 sm:px-4  sm:text-lg">
                    {currentPage}
                </p>
                {currentPage !== lastPage && (
                    <>
                        <p
                            className="cursor-pointer px-3 py-2 hover:bg-color-secondary sm:px-4 sm:text-lg"
                            onClick={handleNextPage}
                        >
                            {currentPage + 1}
                        </p>
                        {currentPage !== lastPage - 1 && (
                            <p
                                className="cursor-pointer px-3 py-2 hover:bg-color-secondary sm:px-4 sm:text-lg"
                                onClick={handleSecondNextPage}
                            >
                                {currentPage + 2}
                            </p>
                        )}
                    </>
                )}
                <p className="cursor-default px-3 py-2 sm:px-4">...</p>
                <p
                    className="cursor-pointer px-3 py-2 hover:bg-color-secondary sm:px-4 sm:text-lg"
                    onClick={handleLastPage}
                >
                    {lastPage}
                </p>
            </div>
            <div
                onClick={handleNextPage}
                className="cursor-pointer rounded-full p-3 hover:bg-color-secondary sm:p-4"
            >
                <FaChevronRight />
            </div>
        </div>
    )
}

export default Pagination
