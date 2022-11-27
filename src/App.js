import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './Components/Header/Header';
import Commander from './Components/Commander/Commander';

function App() {

  // State
  const [minions, setMinions] = useState(0);

  // Fonctions
  const createMinionClickedHandler = () => {
    setMinions(minions + 1);
  }

  const destroyMinionClickedHandler = () => {
    setMinions(minions - 1);
  }

  const createTeamClickedHandler = () => {
    setMinions(minions + 5);
  }

  const destroyTeamClickedHandler = () => {
    setMinions(minions - 5);
  }

  return (
    <div className={classes.App}>
      <Header />

      <div className="container">
        <div className={classes.content}>
          <h1>À la conquête du monde</h1>
          <div className={classes.minions}>
            <span>{minions}</span>
            minions infiltrés
          </div>
        </div>

        <Commander
          createMinion={createMinionClickedHandler}
          destroyMinion={destroyMinionClickedHandler}
          createTeam={createTeamClickedHandler}
          destroyTeam={destroyTeamClickedHandler} />
      </div>
    </div>
  );
}

export default App;
