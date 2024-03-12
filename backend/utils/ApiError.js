 class ApiError extends Error{
    constructor( statusCode,message ="something went wrong",error=[],stack=""){

        super(message);
        this.statusCode=statusCode;
        this.message=message;
        this.success=false;
        this.error=error;
       if(stack){ // To Trace The Where acutal Error occurred
        this.stack=stack;

       }
       else{
        Error.stackTraceLimit(this,this.constructor)
       }
    }
 }


 export {ApiError}