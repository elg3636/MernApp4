/** connect to mongo database */

import mongoose from "mongoose";

/** connect function to connect to the cloud atlas database */
export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database is connected")
}
