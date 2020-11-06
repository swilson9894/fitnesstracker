
const db = require('../routes')
module.exports = (app) => {

    app.get("/api/fitnesstracker", (req, res) => {
        db.Workout.find({}, (err, fitnesstracker) => {
            if(err){
                console.log(err);
            } else {
                res.json(fitnesstracker)
            }
        });
    });
 
    app.put("/api/fitnesstracker/:fitnesstracker", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
                                    {$push: {excercises:body }},
                                    { upsert: true, useFindandModify:false},
                                    updatedWorkout => {
                                        res.json(updatedWorkout);
                                    })
    });
 
    app.post('/api/fitnesstracker', (req,res) => {
        db.fitnesstracker.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

}