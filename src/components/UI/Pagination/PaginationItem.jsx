const PaginationItem = ({ active }) => {
  return (
    <div
      className={`pagination__item ${
        active ? 'pagination__item_active' : ''
      }`}></div>
  );
};

export default PaginationItem;
