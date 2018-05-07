interface IMain {
    action:()=>string
}
class MainClass implements IMain{
    action(){
        return 'this is the main class action'
    }
}
class someClassDecorator implements IMain{
    main: MainClass
    constructor(main:MainClass) {
        this.main = main
    }
    action(){
        return this.main.action() + ' and this is the Decorator action'
    }
}