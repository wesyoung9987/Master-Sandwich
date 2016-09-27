import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AdventureDetail from './AdventureDetails';

class AdventureList extends Component {
  state = { adventures: [
    {
      id: 1,
      title: 'Awesome Adventure',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 2,
      title: 'Golden Gate Bridge',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 3,
      title: 'Adventure Title Here',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 4,
      title: 'Adventure 4',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 5,
      title: 'Adventure 5',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 6,
      title: 'Adventure 6',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 7,
      title: 'Adventure 7',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 8,
      title: 'Adventure 8',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    },
    {
      id: 9,
      title: 'Adventure 9',
      creator: 5,
      adventure: [],
      date: Date.now(),
      completedAll: false,
      startingLocation: 'Some Location'
    }
  ] };

  // componentWillMount() {
  //   axios.get('https://treasure-trek.herokuapp.com/api/fetchCreated')
  //     .then(response => this.setState({ adventures: response.data }));
  // }

  renderAdventures(){
    return this.state.adventures.map(singleAdventure =>
      // would be better to put item id as key instead of title if singleAdventure had id
      <AdventureDetail key={singleAdventure.id} singleAdventure={singleAdventure} />
    );
  }

  render() {
    console.log(this.state);
    const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
  ];

    return (
      <ScrollView>
        {this.renderAdventures()}
      </ScrollView>
      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =>
        <TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>
      }
      style={{padding: 100}}
    />
    );
  }
}

export default AdventureList;