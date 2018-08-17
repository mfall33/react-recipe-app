import React, {Component} from "react";
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component{

	constructor(props){
		super(props);

	}

	render(){

		let recipes = this.props.recipes.map((recipe, index) => (
			<Recipe delete={this.props.deleteRecipe} key={index} data={index} {...recipe}/>
		));

		return(

			<div className="recipeHolder">
			{ recipes }
			</div>
		);
		
	}

}

export default RecipeList;