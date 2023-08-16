import './Pagination.scss';
import PaginationItem from './PaginationItem';

const Pagination = ({ length }) => {
  return (
    <div className="pagination">
      {length.map((item) => (
        <PaginationItem active={item.active} key={item.number}/>
      ))}
    </div>
  );
};

export default Pagination;
