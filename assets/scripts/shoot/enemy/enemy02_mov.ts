import { director, _decorator, Component, Vec3, Node, AudioSource, SkeletalAnimation, find } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('enemy02_mov')
export class enemy02_mov extends Component {

    private scene: Node = director.getScene();
    private player: Node = null;
    private speed: number = 0.2;
    private _curPos: Vec3 = new Vec3();
    private _newPos: Vec3 = new Vec3();
    private _targetPos: Vec3 = new Vec3();

    // @property({ type: SkeletalAnimation })
    // anim: SkeletalAnimation = null;

    start() {
        this.player = find("Player");
    }

    update(deltaTime: number) {
        if (this.player) {
            this._targetPos = this.player.worldPosition;
            this._curPos = this.node.worldPosition;
            let dX = this._targetPos.x - this._curPos.x;
            let dZ = this._targetPos.z - this._curPos.z;

            //攻击玩家
            // if (dX * dX + dZ * dZ < 40) {
            //     this.anim.play('attack');
            // }
            Vec3.add(this._newPos, this._curPos, new Vec3(this.speed * dX / Math.sqrt(dX * dX + dZ * dZ), 0, this.speed * dZ / Math.sqrt(dX * dX + dZ * dZ)));
            this.node.setWorldPosition(this._newPos); // 将位移设置给角色

            this.node.parent.lookAt(this.player.worldPosition);
        }
    }
}
