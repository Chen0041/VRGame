import { _decorator, Component, director, game, Label, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ShootGameOver')
export class ShootGameOver extends Component {
    @property(Label)
    scoreLabel: Label = null;

    @property({ type: AudioSource })
    buttonAudioSource: AudioSource = null;

    @property({ type: AudioSource })
    gameOverAudioSource: AudioSource = null;

    start() {
        this.gameOverAudioSource.play();
        game.canvas.style.cursor = 'auto';
        const jsonStringGet = localStorage.getItem('ShootScores');
        let scoreMap = new Map<string, number>();
        const objGet = JSON.parse(jsonStringGet);
        for (const key in objGet) {
            if (objGet.hasOwnProperty(key)) {
                scoreMap.set(key, objGet[key]);
            }
        }
        const array = Array.from(scoreMap.values());
        this.scoreLabel.string = array[array.length - 1].toString();
    }

    update(deltaTime: number) {
        
    }

    onBtnReplay() {
        this.buttonAudioSource.play();
        director.loadScene('ShootProgress');
    }

    onBtnQuit() {
        this.buttonAudioSource.play();
        director.loadScene('Main');
    }
}

