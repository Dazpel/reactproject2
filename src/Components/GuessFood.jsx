import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Clarifai = require('clarifai');
const API_KEY = '162638f1f65c49bcab90111f996d495c';
const MODEL_ID = 'bd367be194cf45149e75f01d59f77ba7';

const app = new Clarifai.App({
  apiKey: API_KEY,
});

export default class GuessFood extends Component {
  state = {
    productArr: {},
  };

  getImgData = () => {
    return app.models
      .predict(MODEL_ID, 'https://samples.clarifai.com/food.jpg')
      .then((data) =>
        this.setState({ productArr: data.outputs[0].data.concepts })
      )
      .catch((err) => console.log(err));
  };

  displayElements = () => {
    if (this.state.productArr.length > 0) {
      return this.state.productArr.map((el, index) => (
        <TableRow key={el.id}>
          <TableCell>{el.name}</TableCell>
          <TableCell>{el.value}</TableCell>
        </TableRow>
      ));
    }
  };

  render() {
    return (
      <div>
        Based on our Model, the image have the following ingrients:
        <div>
          <button onClick={this.getImgData}>Click to get data</button>
          <TableContainer className="table" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="table-top">
                  <TableCell>Product Name</TableCell>
                  <TableCell> Probability %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.displayElements()}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}
