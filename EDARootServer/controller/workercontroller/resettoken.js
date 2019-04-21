const util = require('./index').util;
const netCode = require('./index').netCode;
const db = require('./index').db;
const resultOfCheckUserLevelISManager = require('./index').resultOfCheckUserLevelISManager;

module.exports = async function (ctx, next) {
    let data = util.getPostData(ctx);
    try {
        let serverName = data.servername;
        let result = await resultOfCheckUserLevelISManager(ctx);
        if (result == true) {
            let dbObj = await db.SubServer.findOne({
                where: {
                    name: serverName
                }
            })
            if (dbObj == null) {
                ctx.body = {
                    code: netCode.SUBSERVERNOTEXIST
                }
            } else {
                let token = util.createToken(15);
                dbObj.token = token;
                await dbObj.save();
                ctx.body = {
                    code: netCode.SUCCESS,
                    token: token
                }
            }
        } else {
            ctx.body = result;
        }
    } catch (error) {
        console.log(error);
        ctx.body = {
            code: netCode.UNEXPECTEDERR
        }
    }
}