import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';

class App extends Component {
	state = {
		news: [],
	};

	componentDidMount() {
		this.getNews();
	}

	getNews = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=ve&category=business&apiKey=4f706b7dcd8b49fea356786d66d007df`;

		const response = await fetch(url);
		const news = await response.json();

		this.setState({ news: news.articles });
	};

	render() {
		return (
			<Fragment>
				<Header title="Latest News" />
				<div className="container white container-news">
					<ListNews news={this.state.news} />
				</div>
			</Fragment>
		);
	}
}

export default App;
