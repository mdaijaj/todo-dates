const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://aijaj:r6qM9ZRCTK0VHYGe@cluster0.2jomo.mongodb.net/todos?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("db connected successfully!")
}).catch((err)=>{
    console.log(err.message)
})

module.exports=mongoose;