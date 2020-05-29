import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HpBar from './HpBar'

class EnemyGundam extends Component {


    render() {
        const {opponents, myTurn, getAttacked, opponentHealth, opponentTotalHealth, currentUser, selectedLevel} = this.props
        console.log('enemy gundam props :>> ', this.props);
        console.log('current user :>> ', currentUser);
        let currentOpponent = opponents[selectedLevel-1]

        if (opponentHealth > 0) {
            if (!myTurn) {setTimeout(() => getAttacked(currentOpponent.attack), 3500)} }

        return (
            <div className="split right">
                <HpBar userHealth={opponentHealth} userTotalHealth={opponentTotalHealth} />
                <h1 className="battlefieldtext">{currentOpponent.name}</h1>
                <img className="image600" src={currentOpponent.img_url} alt="nothing to see here"/>
            </div>
        );
    }
}

export default EnemyGundam;
