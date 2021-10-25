type Constructor2 = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T;

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{print: () => void }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
        jump() {
            this.setPos(0, 20);
        }
    }
}