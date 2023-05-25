import { _decorator, Component, Node, director, Label, AudioSource, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    @property(Label)
    shootGameItems: Label = null;

    @property(Label)
    fruitGameItems: Label = null;

    @property({ type: AudioSource })
    backgroundAudioSource: AudioSource = null;

    @property({ type: AudioSource })
    buttonAudioSource: AudioSource = null;

    @property({ type: AudioSource })
    windowAudioSource: AudioSource = null;

    playShootGameBtn: Node = null;
    playFruitGameBtn: Node = null;
    documentBtn: Node = null;
    documentView: Node = null;
    soundFlag :number = 1;

    start() {
        this.backgroundAudioSource.play();
        this.playShootGameBtn = this.node.getChildByName('StartShootGame');
        this.playFruitGameBtn = this.node.getChildByName('StartFruitGame');
        this.documentBtn = this.node.getChildByName('LookScores');
        this.documentView = this.node.getChildByName('ScoresDocument');
        this.documentView.active = false;
        const jsonStringGet = localStorage.getItem('ShootScores');
        const objGet = JSON.parse(jsonStringGet);
        for (const key in objGet) {
            if (objGet.hasOwnProperty(key)) {
                this.shootGameItems.string += (key + "         " + objGet[key]+"\n");
            }
        }

        const jsonStringGet1 = localStorage.getItem('FruitScores');
        const objGet1 = JSON.parse(jsonStringGet1);
        for (const key in objGet1) {
            if (objGet1.hasOwnProperty(key)) {
                this.fruitGameItems.string += (key + "         " + objGet1[key] + "\n");
            }
        }
    }

    update(deltaTime: number) {
        
    }

    onBtnDocument() {
        this.windowAudioSource.play();
        this.playShootGameBtn.active = false;
        this.playFruitGameBtn.active = false;
        this.documentBtn.active = false;
        this.documentView.active = true;
    }
    onShootBtnPlay() {
        this.buttonAudioSource.play();
        director.loadScene('ShootProgress');
    }

    onFruitBtnPlay() {
        this.buttonAudioSource.play();
        director.loadScene('FruitProgress');
    }

    onBtnClose() {
        this.documentView.active = false;
        this.playShootGameBtn.active = true;
        this.playFruitGameBtn.active = true;
        this.documentBtn.active = true;
    }

    onBtnSound() {
        this.buttonAudioSource.play();
        if (this.soundFlag == 1) {
            this.backgroundAudioSource.stop();
            this.soundFlag = 0;
        } else if (this.soundFlag == 0) {
            this.backgroundAudioSource.play();
            this.soundFlag = 1;
        }
      
    }
}


