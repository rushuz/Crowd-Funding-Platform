import React, { useRef } from "react";
import _ from "lodash";
import styles from "./styles/paginate.module.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const ref = useRef(null);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;

  const pages = _.range(1, pagesCount + 1);

  const handleScroll = (direction) => {
    if (!ref.current) return;

    if (direction === "left") {
      ref.current.scrollLeft -= 40;
    } else {
      ref.current.scrollLeft += 40;
    }
  };

  return (
    <>
      <div className={styles.paginateSection}>
        <nav className={styles.nav}>
          <ul className={`pagination ${styles.ul}`} ref={ref}>
            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${
                  page === currentPage ? "active" : ""
                }`}
              >
                <button
                  type="button"
                  className={`page-link ${
                    page === currentPage
                      ? styles.active
                      : styles.inactive
                  }`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {pagesCount > 6 && (
          <div className={styles.scroll}>
            <button
              type="button"
              className={`btn btn-success m-2 ${styles.active}`}
              onClick={() => handleScroll("left")}
            >
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
              type="button"
              className={`btn btn-success ${styles.active}`}
              onClick={() => handleScroll("right")}
            >
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
