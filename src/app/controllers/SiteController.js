const Course = require('../models/Course')

class SiteController {
    // GET /
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', {courses}))
            .catch(next)
    }

    // // GET /:slug
    // show(req, res, next) {
    //     Course.findOne({slug: req.params.slug}).lean()
    //         .then(course => res.render('courses/read', {course}))
    //         .catch(next)
    // }

    // GET /create
    create(req, res, next) {
        res.render('courses/create')
    }

    // POST /store
    store(req, res, next) {
        var course = new Course(req.body)

        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // GET /edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {course}))
            .catch(next)
    }

    // PUT /:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // DELETE /:id
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new SiteController()
