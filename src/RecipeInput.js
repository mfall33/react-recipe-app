import React, {Component} from "react";
import "./RecipeInput.css";

class RecipeInput extends Component{

	constructor(props){
		super(props);

		this.state = {
			title: '',
			instructions:'',
			ingredients:[''],
			img:'',
		}
	}

	handleSave(e){
		e.preventDefault();
		this.props.handleSave(this.state);
		this.setState({
			title:'',
			ingredients:[''],
			instructions: '',
			img:''
		});
	}

	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	handleChangeIng(e){
		var key = e.target.getAttribute("data-key");
		var value = e.target.value;
		var ingredients = this.state.ingredients;
		ingredients[key] = value;
		this.setState({
			ingredients:ingredients
		});
	}

	addIngredient(e){
		let ingredients = this.state.ingredients;
		ingredients.push('');
		this.setState({
			ingredients: ingredients
		});
	}

	removeIngredient(e){
		let ingredients = this.state.ingredients;
		ingredients.pop();
		this.setState({
			ingredients:ingredients
		});
	}

	render(){
	
     		let ingredients = this.state.ingredients.map((ing, i) => (
					<div key={i} >				 		
				 		<input type="text"
						   placeholder="ingredients..."
						   value={this.state.ingredients[i]}
						   data-key={i}
						   key={i}
						   onChange={this.handleChangeIng.bind(this)}
						   className="recipe-input block-input"
					/>
					
					</div>
			));


		return(
			<div className="inputHolder">

			<h3>Make A Recipe!</h3>
			<blockquote>Show us <b>YOUR</b> masterpiece!</blockquote>

			<input type="text"
				   placeholder="recipe..."
				   value={this.state.title}
				   onChange={this.handleChange.bind(this)}
				   name="title"
				   className="block-input"
			/>

			{ingredients}
			<button className="btn" onClick={this.addIngredient.bind(this)}>
					+
					</button>	
			<button className="btn" onClick={this.removeIngredient.bind(this)}>
					-
					</button>
			<input type="textarea"
				   onChange={this.handleChange.bind(this)}
				   name="instructions"
				   value={this.state.instructions}
				   placeholder="instructions"
				   className="block-input"/>
			<input type="text"
			       onChange={this.handleChange.bind(this)}
			       name="img"
			       value={this.state.img}
			       className="block-input"
			       placeholder="image-src"/>
			       <button onClick={this.handleSave.bind(this)}
			       	       className="block-input">			
			       	       Submit
			       </button>
			</div>
		);
	}

}

export default RecipeInput;