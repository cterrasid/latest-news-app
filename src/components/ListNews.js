import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({ news }) => (
	<div className="row">
		{news.map(item => (
			<News key={item.url} news={item} />
		))}
	</div>
);

ListNews.propTypes = {
	news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListNews;
