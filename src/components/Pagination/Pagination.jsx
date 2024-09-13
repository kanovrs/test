import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/slices/offersSlice'; // Обновите путь

import Icon from '../Icon';
import './Pagination.scss';

export default function Pagination({ totalPages }) {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.offers.currentPage); // Получаем текущую страницу из Redux
    const [visiblePages, setVisiblePages] = useState([]);
    const [maxVisiblePages, setMaxVisiblePages] = useState(2);

    const handlePageChange = (pageNumber) => {
        const maxPage = Math.ceil(totalPages);
        dispatch(setCurrentPage(Math.min(maxPage, Math.max(1, pageNumber))));
    };

    useEffect(() => {
        const updateVisiblePages = () => {
            const halfVisiblePages = Math.floor(maxVisiblePages / 2);

            let startPage = currentPage;
            let endPage = Math.min(totalPages, currentPage + halfVisiblePages);

            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
                endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            }

            const pages = [];

            if (startPage > 1) {
                pages.push('start');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages - 1) {
                pages.push('...');
            }
            if (endPage < totalPages) {
                pages.push(totalPages);
            }
            if (endPage < totalPages) {
                pages.push('end');
            }

            setVisiblePages(pages);
        };

        updateVisiblePages();
    }, [currentPage, totalPages, maxVisiblePages]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setMaxVisiblePages(3);
            } else {
                setMaxVisiblePages(2);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="pagination">
            {visiblePages.map((page, index) => {
                if (page === 'start') {
                    return (
                        <button
                            key={index}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="pagination__arrow pagination__button"
                        >
                            <Icon name="arow-l" className='icon'/>
                        </button>
                    );
                } else if (page === 'end') {
                    return (
                        <button
                            key={index}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="pagination__arrow pagination__button"
                        >
                            <Icon name="arow-l" className='icon'/>
                        </button>
                    );
                } else if (page === '...') {
                    return (
                        <span key={index} className="pagination__ellipsis pagination__button">
                            ...
                        </span>
                    );
                } else {
                    return (
                        <button
                            key={index}
                            onClick={() => handlePageChange(page)}
                            className={`pagination__button ${page === currentPage ? 'active' : ''}`}
                        >
                            {page}
                        </button>
                    );
                }
            })}
        </div>
    );
}
