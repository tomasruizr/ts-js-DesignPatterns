interface IComponent {
    components: Array<IComponent>,
    someAction: ()=>void
}
class Component implements IComponent {
    components: IComponent[];
    someAction(){};
}