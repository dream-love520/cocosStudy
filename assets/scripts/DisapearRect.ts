const {ccclass, property} = cc._decorator;

@ccclass
export class DisapearRect extends cc.Component {

    @property({
        type:cc.Sprite
    })
    private sp:cc.Sprite = null;

    private _time:number = 3;

    start () {

    }

    update (dt) {
        this._time -= dt;
        if(this._time < 0){
            this._time = 3;
        }
        let percent = this._time/3;
        if(percent > 1) percent = 1;
        if(percent < 0) percent = 0;
        let m = this.sp.getMaterial(0);
        m.setProperty("disapearValue", percent);
    }
}
