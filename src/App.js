import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import Donut from './components/Donut'
import BubbleChart from './components/Bubble'
import ScatterChart from './components/ScatterChart'
import BarChart from './components/BarChart'
class App extends React.Component {
  render()
  {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LineChart} />
          <Route exact path='/pie' component={PieChart} />
          <Route exact path='/donut' component={Donut} />
          <Route exact path='/bubble' component={BubbleChart} />
          <Route exact path='/scatter' component={ScatterChart} />
          <Route exact path='/bar' component={BarChart} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
