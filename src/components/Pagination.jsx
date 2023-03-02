import React from "react";
import LeftVector from '../assets/LeftVector.svg'
import RightVector from '../assets/RightVector.svg'

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}><img src={ LeftVector } alt=""/></button>
      <div className="pagination-info">{page} / {totalPages}</div>
      <button className="pagination-btn" onClick={onRightClick}><img src={ RightVector } alt=""/></button>
    </div>
  );
};

export default Pagination;
