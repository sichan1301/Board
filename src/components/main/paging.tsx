import Pagination from "react-js-pagination";

const Paging = ({totalCount,page,postPerPage,handlePageChange}) => {

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={totalCount}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
