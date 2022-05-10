const { ccclass, property } = cc._decorator;

@ccclass
export class ShaderTest extends cc.Component {

    @property({ type: cc.Sprite })
    private plane: cc.Sprite = null!;

    private isEffect: boolean = false;
    private dissolveThreshold: number = 0;

    onLoad() {
        cc.dynamicAtlasManager.enabled = false;
    }

    onBtnShader() {
        this.isEffect = true;
        this.dissolveThreshold = 0;
        let mt = this.plane.getMaterial(0);
        mt.setProperty("dissolveThreshold", this.dissolveThreshold);
    }

    update(dt: number) {
        if (this.isEffect) {
            this.dissolveThreshold += dt / 2;
            if (this.dissolveThreshold >= 1) this.dissolveThreshold = 1;
            let mt = this.plane.getMaterial(0);
            mt.setProperty("dissolveThreshold", this.dissolveThreshold);
            if (this.dissolveThreshold >= 1) {
                this.isEffect = false;
            }
        }
    }
}
