var indexRouter = require('../routes/index');
var Project = require('../routes/project')
var user = require('../routes/users');


module.exports = app => {

    app.use('/', indexRouter);
    app.use('/user',user);
    app.use('/project',Project);

}
