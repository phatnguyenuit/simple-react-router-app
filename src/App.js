import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

const Home = () => (
	<div>
		<h2> Home </h2>
	</div>
);

const Airport = () => (
	<div>
		<h2>Airports</h2>
		<ul>
			<li>Jomo Kenyatta</li>
			<li>Tambo</li>
			<li>Murtala Mohammed</li>
		</ul>
	</div>
);

const City = () => (
	<div>
		<h2>Cities</h2>
		<ul>
			<li>San Francisco</li>
			<li>Istanbul</li>
			<li>Tokyo</li>
		</ul>
	</div>
);

const Courses = ({ match }) => {
	return (
		<div>
			<h2>Courses</h2>
			<ul>
				<li><Link to={`${match.url}/technology`}>Technology</Link></li>
				<li><Link to={`${match.url}/business`}>Business</Link></li>
				<li><Link to={`${match.url}/economics`}>Economics</Link></li>
			</ul>

			<Route exact path={`${match.path}/:course`} render={({ match }) => (<div> This is {match.params.course} </div>)} />
		</div>
	);

}
class App extends Component {
	render() {
		return (
			<div>
				{/* Your navigation should include component `Link` */}
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/airports">Airports</Link></li>
					<li><Link to="/courses">Courses</Link></li>
					<li><Link to="/cities">Cities</Link></li>
				</ul>

				{/* Step 2 - Include `Route` component to whatever you want to render. Use component or render props to render */}
				<Route path="/" component={Home} exact />
				<Route path="/airports" component={Airport} exact />
				<Route path="/courses" component={Courses} />
				<Route path="/cities" component={City} exact />
			</div>
		);
	}
}

export default App;
