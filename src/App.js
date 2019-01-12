import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery'

import './App.css';
import LoadDataService from './services/LoadDataService';
import * as actions from './actions/actions';
import { loadData } from './actions/actions';
import TextItem from './components/TextItem';

let loadDataServices = new LoadDataService();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        nodes: null,
        states: []
    }
}

componentDidMount() {

  loadDataServices.getAllData(
      ['data/4,5,6,7,8,11,12,15,16,17.json', '/data/44,45,46.json', 'data/sections.json', '/data/states.json']
    ).then( (data) => {

      let [ qa, qa2, sections, states ] = data;

      // console.log("data is ", data);

      this.setState({
        states: loadDataServices.getStates(states),
        nodes : loadDataServices.getNodes(sections, [...qa, ...qa2])
      });

      $('.liclass').click(function() {
        $(this).toggleClass('selected');
      });

    });  
  }

  render() {
    const { nodes, states } = this.state;
    
    return (
      <div className="App">
        { nodes && <TextItem {...this.state} /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jsonData: state.jsonData
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
