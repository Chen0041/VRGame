import { _decorator, Component, Prefab, Node, resources, error, Vec3 } from "cc";
import { poolManager } from "./../poolManager";
const { ccclass, property } = _decorator;

@ccclass('ObjLoaded')
export class ObjLoaded extends Component {

    public static loadRes(url: string, type: any, cb: Function = () => { }) {
        resources.load(url, (err: any, res: any) => {
            if (err) {
                error(err.message || err);
                cb(err, res);
                return;
            }

            cb && cb(null, res);
        })
    }

    public static loadModelRes() {
        let k = Math.random();
        if (k <= 0.8) {
            if (k <= 0.2) {
                return new Promise((resolve, reject) => {
                    this.loadRes(`fruit/apple`, Prefab, (err: any, prefab: Prefab) => {
                        if (err) {
                            console.error("model load failed");
                            reject && reject();
                            return;
                        }
                        resolve && resolve(prefab);
                    })
                })
            }else if (k <= 0.4) {
                return new Promise((resolve, reject) => {
                    this.loadRes(`fruit/orange`, Prefab, (err: any, prefab: Prefab) => {
                        if (err) {
                            console.error("model load failed");
                            reject && reject();
                            return;
                        }
                        resolve && resolve(prefab);
                    })
                })
            }else if (k <= 0.5) {
                return new Promise((resolve, reject) => {
                    this.loadRes(`fruit/banana`, Prefab, (err: any, prefab: Prefab) => {
                        if (err) {
                            console.error("model load failed");
                            reject && reject();
                            return;
                        }
                        resolve && resolve(prefab);
                    })
                })
            }else if (k <= 0.6) {
                return new Promise((resolve, reject) => {
                    this.loadRes(`fruit/durian`, Prefab, (err: any, prefab: Prefab) => {
                        if (err) {
                            console.error("model load failed");
                            reject && reject();
                            return;
                        }
                        resolve && resolve(prefab);
                    })
                })
            }else if (k <= 0.7) {
                return new Promise((resolve, reject) => {
                    this.loadRes(`fruit/pineapple`, Prefab, (err: any, prefab: Prefab) => {
                        if (err) {
                            console.error("model load failed");
                            reject && reject();
                            return;
                        }
                        resolve && resolve(prefab);
                    })
                })
            }else if (k <= 0.8) {
                return new Promise((resolve, reject) => {
                    this.loadRes(`fruit/watermelon`, Prefab, (err: any, prefab: Prefab) => {
                        if (err) {
                            console.error("model load failed");
                            reject && reject();
                            return;
                        }
                        resolve && resolve(prefab);
                    })
                })
            }
        } else {
            return new Promise((resolve, reject) => {
                this.loadRes(`fruit/bomb`, Prefab, (err: any, prefab: Prefab) => {
                    if (err) {
                        console.error("model load failed");
                        reject && reject();
                        return;
                    }
                    resolve && resolve(prefab);
                })
            })
        }
        
    }

    start() {
        //Ëæ»úÉú³É
        this.schedule(function () {
            let player = ObjLoaded.loadModelRes().then((prefab: any) => {
                let parentName = 'Group';
                let ndParent = this.node.getChildByName(parentName);
                if (!ndParent) {
                    ndParent = new Node(parentName);
                    ndParent.parent = this.node;
                }
                let ndChild = poolManager.instance.getNode(prefab, ndParent) as Node;
                let x = (Math.random() - 0.5) * 4;
                let z = (Math.random() - 0.5) * 4;
                ndChild.setPosition(new Vec3(x, 0, z));
            });
        }, 1 + Math.random());
    }
}


