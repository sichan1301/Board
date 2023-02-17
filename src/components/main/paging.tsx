import Pagination from "react-js-pagination";

type PagingProps = {
  totalCount:number,
  page:number,
  postPerPage:number,
  handlePageChange(value:number):void
}

const Paging = ({totalCount,page,postPerPage,handlePageChange}:PagingProps) => {

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
