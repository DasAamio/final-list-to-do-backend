const Project = require('../Controller/projectController')

var router = require('express-promise-router')();

router.route('/addproject')
    .post(Project.addProject)
router.route('/updateproject')
    .post(Project.updateProject)
router.route('/deleteproject')
    .post(Project.deleteProject)
router.route('/allproject')
    .get(Project.allProject)
router.route('/proectbystatus/:status')
    .get(Project.projectBystatus)
router.route('/singleproject/:id')
    .get(Project.singleProject)

module.exports = router