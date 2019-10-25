import React from 'react';
import News from './News';

const ListNews = ({ news }) => (
	<div className="row">
		{news.map(item => (
			<News key={item.url} news={item} />
		))}
	</div>
);

export default ListNews;
