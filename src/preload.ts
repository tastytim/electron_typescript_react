import { ipcRenderer, contextBridge } from "electron";



console.log('👋 This message is being logged by "preloaded.ts", included via webpack');



contextBridge.exposeInMainWorld('api',{




    async getUsers():Promise<any>{
        const users  = await ipcRenderer.invoke('get-users')
        return users;
    },
    async getUserById(id:number):Promise<User>{
        const user = await ipcRenderer.invoke(`get-user-${id}`)
        return user;
    },
    async addUser(user:User):Promise<void>{
        await ipcRenderer.invoke(`add-user-${user}`)
    },
    async deleteUserById(id:number){
        await ipcRenderer.invoke(`delete-user-${id}`)
    }

})

