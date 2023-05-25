import {_decorator, Component, Node, Vec3, Label, find, AudioSource, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ObjMovement')
export class ObjMovement extends Component {
    launchFruitAudioSource: AudioSource = null;
    fruitDropAudioSource: AudioSource = null;
    bombFlyAudioSource: AudioSource = null;

    health: Node[] = null;
    healthNum: Label = null;
    scoreLabel: Label = null;
    movable: boolean = true;
    speed: number = 0.02;
    curPos: Vec3 = new Vec3();
    curRot;
    v0y = 1.5 + Math.random() * 0.2;
    v0x = Math.random() * 2 - 1;
    rotZ;
    movement;

    start() {
        this.health = find("Canvas/Health").children;
        this.healthNum = find("Canvas/HealthNum").getComponent(Label);
        this.scoreLabel = find("Canvas/Score").getComponent(Label);
        this.launchFruitAudioSource = find("AudioSource/LaunchFruit").getComponent(AudioSource);
        this.fruitDropAudioSource = find("AudioSource/FruitDrop").getComponent(AudioSource);
        this.bombFlyAudioSource = find("AudioSource/BombFly").getComponent(AudioSource);
        this.launchFruitAudioSource.play();
        if (this.node.name == "bomb") {
            this.bombFlyAudioSource.play();
        }
        else {
            this.launchFruitAudioSource.play();
        }
        if (this.v0x > 0) {
            this.rotZ = -0.006;
        } else {
            this.rotZ = 0.006;
        }
        this.movement = function () {
            this.curPos = this.node.getPosition();
            this.curRot = this.node.getWorldRotation();
            // 当前速度
            this.v0y -= this.speed;
            //设置位置
            var newPos: Vec3 = new Vec3(this.curPos.x + this.v0x, this.curPos.y + this.v0y, this.curPos.z);
            this.curRot.z += this.rotZ;
            this.node.setPosition(newPos);
            this.node.setWorldRotation(this.curRot);

            //漏水果，扣血
            if (newPos.y > 95 || newPos.y < -5 || newPos.x > 75 || newPos.x < -75) {
                if (this.node.name != "bomb") {
                    this.fruitDropAudioSource.play();
                    this.healthNum.string = (parseInt(this.healthNum.string) - 1).toString();
                    this.health[parseInt(this.healthNum.string)].active = false;
                    if (parseInt(this.healthNum.string) == 0) {
                        const jsonStringGet = localStorage.getItem('FruitScores');
                        let scoreMap = new Map<string, number>();
                        const now = new Date();
                        let currentTime = now.getFullYear() + "-" + ((now.getMonth() + 1) < 10 ? ("0" + (now.getMonth() + 1)) : (now.getMonth() + 1)) +
                            "-" + (now.getDate() < 10 ? ("0" + now.getDate()) : now.getDate()) + " " + (now.getHours() < 10 ? ("0" + now.getHours()) : now.getHours()) +
                            ":" + (now.getMinutes() < 10 ? ("0" + now.getMinutes()) : now.getMinutes()) + ":" + (now.getSeconds() < 10 ? ("0" + now.getSeconds()) : now.getSeconds());
                        if (jsonStringGet) {
                            const objGet = JSON.parse(jsonStringGet);
                            for (const key in objGet) {
                                if (objGet.hasOwnProperty(key)) {
                                    scoreMap.set(key, objGet[key]);
                                }
                            }
                            scoreMap.set(currentTime, parseInt(this.scoreLabel.string));
                        } else {
                            scoreMap.set(currentTime, parseInt(this.scoreLabel.string));
                        }
                        let objSet: { [key: string]: number } = {};
                        scoreMap.forEach((value, key) => {
                            objSet[key] = value;
                        });
                        const jsonStringSet = JSON.stringify(objSet);
                        localStorage.setItem('FruitScores', jsonStringSet);
                        director.loadScene('GameOver');
                    }
                }
                this.node.destroy();
            }
        };
        this.schedule(this.movement, 0.001);
    }

    update() {
        if (this.movable == false) {
            this.unschedule(this.movement);
        }
    }

}

