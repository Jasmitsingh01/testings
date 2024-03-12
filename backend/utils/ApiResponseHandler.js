
const ApiResponseHandler=(fnc)=>{
    (req,res,next)=>{
     Promise
     .resolve( fnc(req,res,next))
     .catch((err)=>{
            next(err)
     })
    }
}

export {ApiResponseHandler}