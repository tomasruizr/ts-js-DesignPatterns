// Alias Wrapper

interface IUser {
    Name?: string,
    lastName?: string,
    age?: number
}
interface IDatabase {
        create: (user:IUser) => boolean,
        read: (criteria: any) => Array<IUser>,
        update: (user:IUser) => IUser,
        destroy: (user:IUser) => boolean,
}

// The Adapter class, now may be consumed Directly from the client App
class SqlAdapter implements IDatabase {
    create(user:IUser) {
        return true;   
    }
    read(criteria: any) {
        return []
    }
    update(user:IUser) {
        // return {Name:'Tomas', lastName:'Ruiz', age:23}
        return {}
    }
    destroy(user:IUser) {
        return true
    }
}