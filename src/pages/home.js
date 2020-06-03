import React, { Component, Fragment } from "react";
import "./css/home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/images/logo1.png";
import { Link } from "react-router-dom";
export default class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row text-center">
						<h3>Scroll down to see QR COde use cases</h3>
					</div>

					<div className="row">
						<div className="card">

						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
