import React, {Component} from "react";
import "./Recipe.css";

class Recipe extends Component{

	constructor(props){
		super(props);

	}

	delete(e){
		let key = e.target.parentNode.getAttribute("data-key");
		this.props.delete(key)
	
	}

	render(){

		let ingredients = this.props.ingredients.map((ing, index) => (

			<li key={index}>{ing}</li>

		));

		return (
		<div className="recipe" data-key={this.props.data}>
		<hr/>
		<h1>{this.props.title}</h1>
		<p><b>Ingredients:</b></p>
		<ul>
		{ingredients}
		</ul>
		<p><b>Instructions:</b><br/>{this.props.instructions}</p>
		<img src={this.props.img}></img>
		<button onClick={this.delete.bind(this)}>Delete</button>
		</div>
		)
	}

}

export default Recipe;