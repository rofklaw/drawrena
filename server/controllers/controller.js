let mongoose = require('mongoose');
let User = mongoose.model('User');
let Prompt = mongoose.model('Prompt');

module.exports = {
  register: (req, res) => {
    console.log(req.body);
    var newUser = new User(req.body);
    newUser.save( (err, user) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }else{
        // req.session.user = user;
        console.log(user)
        return res.json(user);
      }
    })
  },

login: (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err){
      console.log('invalid')
      return res.sendStatus(500);
    }else{
      console.log(user);
      return res.json(user);
      }
    })
  }

  // createPrompt(req, res) => {
  //   let prompt = new Prompt(subject: req.body.subject, contest.push(req.body.contest1, req.body.contest2, req.body.contest3));
  //   prompt.save( (err, prompt) => {
  //     if(err){
  //       conosle.log(err);
  //       return res.sendStatus(500)
  //     }else{
  //       console.log(user)
  //     }
  //   })
  // }
}
