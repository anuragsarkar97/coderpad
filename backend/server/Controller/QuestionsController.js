Questions=require('../Model/QuestionsHandler');
const UsernameGenerator=require('username-generator');
/*
GET Questions
 */
exports.quesdata=function (req,res) {
    Questions.get(function (err,question) {
            if(err){
                res.json({
                   status:"questions data fetch error",
                   message:err
                });
            }
            console.log("questions fetched",question);
            res.json({
            status:"success",
            message:"All Questions",
            data:question
        });
});
};

/*
POST Questions
 */

exports.postques=function (res,req) {
    const ques= new Questions();
    ques.document_id=UsernameGenerator.generateUsername(":");
    ques.company_name=req.body.company_name;
    ques.question_base=req.body.question_base;
    ques.question_difficulty=req.body.question_difficulty;
    ques.full_question=req.body.full_question;
    ques.question_tag=req.body.question_tag;

    ques.save(function (err) {
        if(err){
            res.json(err);
        }
     res.json({
        status:"200 Ok",
        message:"Question Posted",
        data:ques
     });
    });
};

/*
findByDifficulty
 */
exports.tag=function(req,res){
    Questions.findById(req.params.question_difficulty,function (err,ques) {
            if(err) {
                res.send(err);
            }
            res.json({
                status:"200 OK",
                message:"Question Data Loading..",
                data:ques
            });
    });
};

/*
UPDATE Questions based on document id
 */
exports.quesupdate=function (res,req) {
    Questions.findById(req.params.document_id,function (err,ques) {
       if(err) {
                res.send(err);
            }
        ques.document_id =  req.body.document_id ? req.body.document_id : ques.document_id;
         ques.company_name=req.body.company_name;
         ques.question_base=req.body.question_base;
         ques.question_difficulty=req.body.question_difficulty;
         ques.full_question=req.body.full_question;
        ques.question_tag=req.body.question_tag;
        ques.save(function (err) {
           if(err)
               res.send(err);


        res.json({
            status:"200 OK",
            message:"User Info Updated",
        });
    });
});
};
