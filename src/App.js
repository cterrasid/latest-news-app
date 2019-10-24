import React, { Component } from 'react';

class App extends Component {
	state = {
		news: [],
	};

	componentDidMount() {
    this.getNews();
	}

	getNews = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4f706b7dcd8b49fea356786d66d007df`;

		const response = await fetch(url);
		const news = await response.json();
    
    this.setState({ news: news.articles });
    
    
	};
  
	render() {
		return <h1>Latest News</h1>;
	}
}

export default App;
