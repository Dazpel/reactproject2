import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/GuessFood'><Button>From Image to ingridients!</Button></Link>
        <Link to='/FridgeRecipe'><Button>From Fridge to recipe</Button></Link>
      </div>
    )
  }
}
