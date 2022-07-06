import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "gedip.sqlite",
    // synchronize: false,
    logging: true,
    logger:'advanced-console',
    entities: [User],
    // subscribers: [],
    // migrations: []
})




AppDataSource.initialize().then(async ()=>{
    console.log("DB INITIALISED")
})
.catch((error)=>console.log(error));