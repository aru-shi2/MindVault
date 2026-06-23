import mongoose, {Schema, Document} from 'mongoose'

interface Iuser extends Document {
    username: string,
    password: string
}

interface Icontent extends Document {
    link: string,
    type: string,
    title: string,
    tags?: mongoose.Types.ObjectId[],
    userId?: mongoose.Types.ObjectId,
    createdAt?: Date,
    updatedAt?: Date
}

interface Itags extends Document {
    title: string
}

interface Ilinkk extends Document {
    hash: string,
    userId: mongoose.Types.ObjectId
}

const userSchema= new Schema <Iuser>({
    username: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

const contentSchema=new Schema <Icontent>(
{
    link: String,
    type: String,
    title: String,
    tags: [{
    type:Schema.Types.ObjectId,
    ref:"Tags"
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
},
{
    timestamps: true,
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