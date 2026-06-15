import mongoose, {Schema, Document} from 'mongoose'

interface Iuser extends Document {
    username: String,
    password: String
}

interface Icontent extends Document {
    link: String,
    type: String,
    title: String,
    tags: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId
}

interface Itags extends Document {
    title: String
}

interface Ilinkk extends Document {
    hash: String,
    userId: mongoose.Types.ObjectId
}

const userSchema= new Schema <Iuser>({
    username: String,
    password: String
})

const contentSchema=new Schema <Icontent>({
    link: String,
    type: String,
    title: String,
    tags: [{
    type:Schema.Types.ObjectId,
    ref:"Tags"
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
})

const tagsSchema=new Schema <Itags>({
    title: String
})

const linkSchema=new Schema <Ilinkk>({
    hash: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
})


const userModel= mongoose.model <Iuser> ("User", userSchema)
const contentModel= mongoose.model <Icontent> ("Content", contentSchema)
const tagsModel= mongoose.model <Itags> ("Tags", tagsSchema)
const linkModel= mongoose.model <Ilinkk> ("Link", linkSchema)

export {userModel, contentModel, tagsModel, linkModel}