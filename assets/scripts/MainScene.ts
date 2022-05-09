const {ccclass, property} = cc._decorator;

@ccclass
export class MainScene extends cc.Component {
    @property({type:cc.Prefab})
    private testPrefab:cc.Prefab = null!;

    onLoad(){
        if(this.testPrefab){
            cc.instantiate(this.testPrefab).parent = this.node;
        }else{
            console.log("prefab is null");
        }
    }
}
