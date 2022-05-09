const {ccclass, property} = cc._decorator;

@ccclass
export class AsyncTest extends cc.Component {
    @property({type:cc.Label})
    private txt:cc.Label = null!;

    onLoad(){
        this.fun();
        console.log("cccc");
    }

    private async fun(){
        await this._loadBundle("a").then((input:any)=>{
            console.log(input);
        }).catch((err:any)=>{
            console.log(err);
        });
        console.log("bbbbb");
    }

    private _loadBundle(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("aaaaa");
                reject("未知错误");
            }, 2000);
        });
    }
}
