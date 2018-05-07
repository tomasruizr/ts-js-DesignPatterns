interface ICommand{
    execute:(target:ITarget)=>void
    undo:()=>void
    redo:()=>void
}
interface ITarget{}
class consumer{
    executeSomeCommand(command:ICommand){}
}
class SomeCommand implements ICommand {
    undo: () => void;
    redo: () => void;
    execute(target:ITarget):void{
        console.log('this is the command execution')
    }
}
class SomeTarget implements ITarget{}

class SomeClient{
    commands:Array<ICommand>
    undo:()=>void
    redo:()=>void
    doSomething(){
        // commmands.push(command)
        new SomeCommand().execute(new SomeTarget())
    }
}
// let x = new SomeClient();
// x.doSomething()