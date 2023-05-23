import { _decorator, Component, input, Input, EventMouse, Vec3, Line, game, EventKeyboard, KeyCode, BoxCollider, ICollisionEvent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TrailController')
export class TrailController extends Component {

    @property(Line)
    line: Line;

    flag: number = 0;
    newPositions: Vec3[] = [];
    canvas = game.canvas;
    isCursorDisplayed: boolean = false;

    onLoad() {
        this.canvas.style.cursor = 'none';
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    start() {
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
        this.node.setWorldPosition(pos);
        this.flag++;
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ESCAPE) {
            if (this.isCursorDisplayed == false) {
                this.canvas.style.cursor = 'auto';
                this.isCursorDisplayed = true;
            }
            else if (this.isCursorDisplayed == true) {
                this.canvas.style.cursor = 'none';
                this.isCursorDisplayed = false;
            }
        }
    }

    onTriggerEnter(event: ICollisionEvent) {
        //判断是水果还是炸弹，如果是水果则根据水果类型加分
        //炸弹爆炸or水果裂开特效
    }

}
