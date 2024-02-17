import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, // one who is subscribing
        ref:"User",
    },
    channel:{
        type:Schema.Types.ObjectId, //one whom to subscribing
        ref:"User",
    }
},{timestamps:true})

export const subscription = mongoose.model("subscription",subscriptionSchema)