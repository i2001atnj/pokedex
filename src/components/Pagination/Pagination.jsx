import React from "react";
import { LeftVector, RightVector } from '../../assets/Assets'
import './Pagination.css'

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="pagination pagination-container">
      <button onClick={ onLeftClick }><img src={ LeftVector } alt="" id="left"/></button>
      <div className="pagination-info">{ page } / { totalPages }</div>
      <button onClick={ onRightClick }><img src={ RightVector } alt="" id="right"/></button>
    </div>
  )
};

export default Pagination;
