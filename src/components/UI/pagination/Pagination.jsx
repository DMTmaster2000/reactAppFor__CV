import React from 'react';

import MyButton from '../button/MyButton';
import { getPagesArray } from '../../utils/pages';


const Pagination = ({ totalPages, changePage }) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<div style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between' }}>
			{pagesArray.map(p =>
				<MyButton onClick={() => changePage(p)} key={p} >{p}</MyButton>
			)}
		</div>
	);
};

export default Pagination;
