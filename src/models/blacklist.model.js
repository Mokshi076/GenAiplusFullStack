const mongoose = require("mongoose")

const blacklistTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        required : [true, "tokon is required to be added in balcklist"]
    } 
}, {
        timestamps : true
})

const tokenBlackListModel = mongoose.model("blacklistToken" , blacklistTokenSchema)

module.exports = tokenBlackListModel