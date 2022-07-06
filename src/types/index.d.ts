export {}
declare global {
    interface Window {
        api : any;
    }
}


export global {
    interface User {
        id:number,
        name:string,
    }
}

export global  {
    interface UsersArray  {
        users : User[]
    }
}