import config from "../config/base-config"
export default (currentPage, total) => {
    const pageLength = config.page_length,
        totalPages = Math.ceil(total/pageLength),
        hasPrev = currentPage !== 1,
        firstPage = currentPage !== 1,
        hasNext = currentPage !== totalPages,
        lastpage = currentPage !== totalPages,
        pages = getPageNum(currentPage, totalPages);
    return {
        currentPage,
        totalPages,
        hasPrev,
        firstPage,
        hasNext,
        lastpage,
        pages
    };
}

const getPageNum = (current, total) => {
    let pages = [];
    if(current > 1)
        pages.push(current - 1);
    pages.push(current);
    if((current + 1) <= total)
        pages.push(current + 1);
    return pages;
};