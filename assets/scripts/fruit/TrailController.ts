import { _decorator, Component, Node, input, Input, EventMouse, Vec3, Line, game, EventKeyboard, KeyCode, BoxCollider, ICollisionEvent, director, Label, AudioSource, find, CCInteger, Prefab, instantiate, MeshCollider, Quat, RigidBody, Vec2 } from 'cc';
const { ccclass, property } = _decorator;
import { ObjMovement } from './ObjMovement';

@ccclass('TrailController')
export class TrailController extends Component {
    @property({ type: CCInteger })
    score: number = 3;

    @property(Line)
    line: Line;

    @property({ type: AudioSource })
    buttonAudioSource: AudioSource = null;

    @property({ type: AudioSource })
    bombExplodeAudioSource: AudioSource = null;

    @property({ type: AudioSource })
    cutFruitAudioSource: AudioSource = null;

    @property(Prefab)
    bombEffect: Prefab = null;

    @property(Prefab)
    redBoom: Prefab = null;

    @property(Prefab)
    yellowBoom: Prefab = null;

    @property(Prefab)
    orangeBoom: Prefab = null;

    @property(Prefab)
    greenBoom: Prefab = null;

    @property(Prefab)
    whiteBoom: Prefab = null;

    @property({ type: Label })
    scoreLabel: Label = null;

    @property({ type: Label })
    healthNum: Label = null;

    flag: number = 0;
    newPositions: Vec3[] = [];
    canvas = game.canvas;
    isCursorDisplayed: boolean = false;
    quitBtn: Node = null;
    health: Node[] = null;
    private objMovement: ObjMovement = null;
    deltaPos: Vec2;
    rotZ;

    onLoad() {
        this.canvas.style.cursor = 'none';
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    start() {
        this.quitBtn = find("Canvas/Quit");
        this.health = find("Canvas/Health").children;
        this.quitBtn.active = false;
        for (let i = 0; i < this.line.positions.length; i++) {
            this.newPositions.push(this.line.positions[i]);
        }
    }

    update(deltaTime: number) {
        
        if (this.flag == 1) {
            for (let i = 0; i < this.newPositions.length; i++) {
                this.newPositions[i] = this.node.getWorldPosition();
            }
        } else if (this.flag > 1) {
            this.newPositions.pop();
            this.newPositions.splice(0, 0, this.node.getWorldPosition());
        }
        this.line.positions = this.newPositions as never;
    }

    onDestroy() {
        input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    onMouseMove(event: EventMouse) {
        let pos = new Vec3(event.getLocation().x / 1437.5 * 138 - 69, event.getLocation().y / 866.5 * 83.2 - 41.6, -100);
        let lastPos = this.node.getWorldPosition();
        this.node.setWorldPosition(pos);
        let deltaX = pos.x - lastPos.x;
        let deltaY = pos.y - lastPos.y;
        this.deltaPos = new Vec2(deltaX, deltaY);
        if (deltaX > 0 && deltaY > 0) {
            this.rotZ = (-1)*Math.atan(deltaX / deltaY) * 180 / Math.PI;
        } else if (deltaX > 0 && deltaY < 0) {
            this.rotZ = (-1)*(Math.atan(deltaX / deltaY) * 180 / Math.PI + 180);
        } else if (deltaX < 0 && deltaY > 0) {
            this.rotZ = (-1) * Math.atan(deltaX / deltaY) * 180 / Math.PI;
        } else if (deltaX < 0 && deltaY < 0) {
            this.rotZ = 180 - Math.atan(deltaX / deltaY) * 180 / Math.PI;
        }
        this.flag++;
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ESCAPE) {
            if (this.isCursorDisplayed == false) {
                this.canvas.style.cursor = 'auto';
                this.isCursorDisplayed = true;
                this.quitBtn.active = true;
            }
            else if (this.isCursorDisplayed == true) {
                this.canvas.style.cursor = 'none';
                this.isCursorDisplayed = false;
                this.quitBtn.active = false;
            }
        }
    }

    onTriggerEnter(event: ICollisionEvent) {
        let collisionObject = event.otherCollider.node;
        if (collisionObject.name == 'bomb') {
            this.bombExplodeAudioSource.play();
            const bombEffect = instantiate(this.bombEffect);
            bombEffect.setWorldPosition(new Vec3(collisionObject.getWorldPosition().x / 10, collisionObject.getWorldPosition().y / 10, -10));
            this.node.scene.addChild(bombEffect);
            setTimeout(() => {
                bombEffect.destroy();
            }, 500);
            collisionObject.destroy();

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
        else {
            this.cutFruitAudioSource.play();
            this.scoreLabel.string = (parseInt(this.scoreLabel.string) + this.score).toString();
            if (collisionObject.name == "apple") {
                const fruitEffect = instantiate(this.whiteBoom);
                fruitEffect.setWorldPosition(new Vec3(collisionObject.getWorldPosition().x / 10, collisionObject.getWorldPosition().y / 10, -10));
                this.node.scene.addChild(fruitEffect);
                setTimeout(() => {
                    fruitEffect.destroy();
                }, 500);
            } else if (collisionObject.name == "banana" || collisionObject.name == "pineapple") {
                const fruitEffect = instantiate(this.yellowBoom);
                fruitEffect.setWorldPosition(new Vec3(collisionObject.getWorldPosition().x / 10, collisionObject.getWorldPosition().y / 10, -10));
                this.node.scene.addChild(fruitEffect);
                setTimeout(() => {
                    fruitEffect.destroy();
                }, 500);
            } else if (collisionObject.name == "durian") {
                const fruitEffect = instantiate(this.greenBoom);
                fruitEffect.setWorldPosition(new Vec3(collisionObject.getWorldPosition().x / 10, collisionObject.getWorldPosition().y / 10, -10));
                this.node.scene.addChild(fruitEffect);
                setTimeout(() => {
                    fruitEffect.destroy();
                }, 500);
            } else if (collisionObject.name == "orange") {
                const fruitEffect = instantiate(this.orangeBoom);
                fruitEffect.setWorldPosition(new Vec3(collisionObject.getWorldPosition().x / 10, collisionObject.getWorldPosition().y / 10, -10));
                this.node.scene.addChild(fruitEffect);
                setTimeout(() => {
                    fruitEffect.destroy();
                }, 500);
            } else if (collisionObject.name == "watermelon") {
                const fruitEffect = instantiate(this.redBoom);
                fruitEffect.setWorldPosition(new Vec3(collisionObject.getWorldPosition().x / 10, collisionObject.getWorldPosition().y / 10, -10));
                this.node.scene.addChild(fruitEffect);
                setTimeout(() => {
                    fruitEffect.destroy();
                }, 500);
            }
            this.objMovement = collisionObject.getComponent(ObjMovement);
            this.objMovement.movable = false;
            collisionObject.getComponent(MeshCollider).enabled = false;
            collisionObject.children[0].active = false;
            collisionObject.children[1].active = true;
            collisionObject.children[2].active = true;
            let rot = new Quat();
            rot = collisionObject.getWorldRotation();
            rot.z = Math.sin(this.rotZ / 2);
            rot.w = Math.cos(this.rotZ / 2);
            collisionObject.setWorldRotation(rot);
            console.log(this.rotZ);
            let leftRigidBody = collisionObject.children[1].getComponent(RigidBody);
            let rightRigidBody = collisionObject.children[2].getComponent(RigidBody);
            leftRigidBody.applyForce(new Vec3((-1) * this.deltaPos.y, this.deltaPos.x, 0).normalize().multiplyScalar(1000));
            rightRigidBody.applyForce(new Vec3(this.deltaPos.y, (-1) * this.deltaPos.x, 0).normalize().multiplyScalar(1000));
            setTimeout(() => {
                collisionObject.destroy();
            }, 500);
        }
    }

    onBtnQuit() {
        this.buttonAudioSource.play();
        director.loadScene('Main');
    }

}
