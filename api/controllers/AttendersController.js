/**
 * AttendersController
 *
 * @description :: Server-side logic for managing attenders
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'show': function(req, res, next) {
		Attenders.find({where: {eventId: req.param('id')}}, function(err, attenders) {
			if(err) return next(err);
			res.view({
				attenders: attenders
			})
		})
	},

	'create': function(req, res, next) {
		Attenders.create(req.params.all(), function (err, attender) {
			if(err) {
				return res.redirect('/event/show/' + req.param('id'));
			}
			res.redirect('/static/thanks');
		});
	}
};

