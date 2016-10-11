import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import ScoreLI from './ScoreLI.js'

export default class Scores extends Component {
  constructor(props){
    super(props);
  }

  renderRowCB(scores) {
    return scores.map((score, i) => {
      return <ScoreLI key={i.toString()} place={i+1} score={score} />
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderRowCB(this.props.scores)}
      </ScrollView>
    );
  }
}

var styles = {
  viewStyle: {
    // height: 80,
    //shadowColor: '#000',
    //shadowOffset: { width:0, height: 2 },
    //shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    //borderWidth: 1,
    //borderColor: 'white',
    //backgroundColor: '#24CCFD',
    //padding: 10
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12,
    width: 285,
    height: 35
  },
  statusGreen: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 10,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green'
  },
  statusRed: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 23,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red'
  },
  iconStyle: {
    height: 25,
    width: 25
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 80
  },
  listStyle : {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    padding: 5,
    flexDirection: 'row'
  },
  loc : {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'blue'
  },
  title: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    //borderColor: "#ddd",
    fontWeight: 'bold',
    elevation: 1,
    flexDirection: 'column'
  }

};
