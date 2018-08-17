import React, { Component } from 'react';
import RecipeList from "./RecipeList";  
import RecipeInput from "./RecipeInput";
import "./App.css";

class App extends Component {

// the apps coming along nicely add a delete button and style it properly and it should be good for github

constructor(props){
  super(props);

  this.state = {
    recipes:[]
  }
}

  handleSave(r){
    
    let recipe = {};
    recipe.title = r.title;
    recipe.instructions = r.instructions;
    recipe.ingredients = r.ingredients;
    recipe.img = r.img;

    let recipes = this.state.recipes;
    recipes.push(recipe);
    this.setState({
      recipes:recipes
    });
        
  }

  handleDelete(index){
    let recipes = this.state.recipes;
    recipes.splice(index, 1)
    this.setState({
      recipes:recipes
    });
    
  }

  render() {
    return (
      <div className="App">
      <RecipeInput handleSave={this.handleSave.bind(this)}
                   ingredients={this.state.ingredients}/>            

      <RecipeList deleteRecipe={this.handleDelete.bind(this)} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
