import { _decorator, Component, Game, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EndProject')
export class EndProject extends Component {

    onLoad() {
        game.on(Game.EVENT_HIDE, this.onGameEnd, this);
    }

    start() {

    }

    onGameEnd() {
        localStorage.removeItem('ShootScores');
        localStorage.removeItem('FruitScores');
        game.off(Game.EVENT_HIDE, this.onGameEnd, this);
    }
}

