var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

function completeLogin(request, response, user) {
    console.log('complete login');

    request.session.user = user.toObject();
    delete request.session.user.password;

    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);
    console.log('now', Date.now());
    console.log('later', Date.now() + 86400 * 1000);

    response.json(user);
}

function toTitleCase(string) {
    return string.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
        return match.toUpperCase();
    });
}

module.exports = {
    show: (request, response) => {
        User.find({})
            .then( (users) => {
                response.json(users);
            })
            .catch(error => console.log(error))
    },
    create: (request, response) => {
        let new_user = request.body;
        //Formating Data
        new_user.password_hash = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(9));
        new_user.first_name = toTitleCase(new_user.first_name);
        new_user.last_name = toTitleCase(new_user.last_name);
        new_user.email = new_user.email.toLowerCase();
        console.log('new user', new_user);
        //Creating User
        User.create(new_user)
            .then( user => {
                return completeLogin(request, response, user);
                console.log('new user!', user);
            })
            .catch(error => {
                response.status(400).send({error: error})
                console.log(error)
            })
    },
    destroy: (request, response) => {
        User.findByIdAndRemove(request.params.id)
            .then(() => console.log("deleted"))
            .catch(error => console.log(error))
    },
    update: (request, response) => {
        User.findById(request.params.id)
            .then((user)=>{
                user.title = request.body.title;
                user.first_name = request.body.first_name;
                user.last_name = request.body.last_name;
                user.email = request.body.email;
                user.password = request.body.password;
                return user.save()
                    .then(()=>console.log(saved))
            })
            .catch(error => console.log(error))
    },
    login: (request, response) => {
        console.log(request.body);
        console.log('complete login', completeLogin)
        User.findOne({ email: request.body.email })
        .then( (user) => {
            if(user === null){ throw new Error(); }

            console.log('request.body', request.body.password);
            console.log('user.password_hash', user.password_hash);
            if(bcrypt.compareSync(request.body.password, user.password_hash)){
                console.log('password good');
                return completeLogin(request, response, user);
            } else {
                throw new Error();
            }
        })
        .catch(() => {
            response.send(400,{error: 'Login Failed'})
        })
    },
    getById: (request, response) => {
        console.log('getbyid', request.body);
        User.findById(request.body).populate('bikes').exec()
        .then( (user) => {
            response.json(user);
        })
        .catch(error => console.log(error))
    },
    check_pw: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    },
    hash_pw: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
    },
    logout: (request, response) => {
        console.log('logging out');

        request.session.destroy();

        response.clearCookie('userID');
        response.clearCookie('expiration');

        response.json(true);
    }
}
