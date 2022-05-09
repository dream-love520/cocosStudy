const {ccclass, property, executeInEditMode} = cc._decorator;
@ccclass
@executeInEditMode
export class PropertyTest extends cc.Component {
    @property({type:cc.Label})
    private testLabel:cc.Label = null!;

    onLoad(){
        cc.log("aaa");
    }

    start(){
        cc.log("bbb");
        this.testLabel.string = "你看看";
    }
}
