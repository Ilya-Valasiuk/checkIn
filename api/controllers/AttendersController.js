/**
 * AttendersController
 *
 * @description :: Server-side logic for managing attenders
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'show': function(req, res, next) {
		Attenders.find({where: {eventName: req.param('id')}}, function(err, attenders) {
			if(err) return next(err);
			res.view({
				attenders: attenders
			})
		})
	},

	'create': function(req, res, next) {
		var attender = {
			attenderName: req.param('attenderName'),
			eventName: req.param('eventName')
		}
		console.log(attender);
		Attenders.create(attender, function (err, attender) {
			console.log(err);
			if(err) {
				return res.redirect('/event/show/' + req.param('id'));
			}
			res.redirect('/static/thanks');
		});
	}
};

