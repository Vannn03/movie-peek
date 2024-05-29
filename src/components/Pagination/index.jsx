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
        <div className="mt-8 flex items-center justify-center">
            <div
                onClick={handleFirstPage}
                className="cursor-pointer rounded-full p-4 hover:bg-color-secondary"
            >
                <HiOutlineChevronDoubleLeft />
            </div>
            <div
                onClick={handlePrevPage}
                className="cursor-pointer rounded-full p-4 hover:bg-color-secondary"
            >
                <FaChevronLeft />
            </div>
            <div className="mx-4 flex items-center gap-2">
                <p className="cursor-default bg-color-light-accent px-4 py-2 text-lg">
                    {currentPage}
                </p>
                {currentPage !== lastPage && (
                    <>
                        <p
                            className="cursor-pointer px-4 py-2 text-lg hover:bg-color-secondary"
                            onClick={handleNextPage}
                        >
                            {currentPage + 1}
                        </p>
                        {currentPage !== lastPage - 1 && (
                            <p
                                className="cursor-pointer px-4 py-2 text-lg hover:bg-color-secondary"
                                onClick={handleSecondNextPage}
                            >
                                {currentPage + 2}
                            </p>
                        )}
                    </>
                )}
                <p className="cursor-default">...</p>
                <p
                    className="cursor-pointer px-4 py-2 text-lg hover:bg-color-secondary"
                    onClick={handleLastPage}
                >
                    {lastPage}
                </p>
            </div>
            <div
                onClick={handleNextPage}
                className="cursor-pointer rounded-full p-4 hover:bg-color-secondary"
            >
                <FaChevronRight />
            </div>
        </div>
    )
}

export default Pagination
