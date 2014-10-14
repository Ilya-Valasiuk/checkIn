/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new': function(req, res) {
		console.log('here');
		res.view();
	},

	'create': function(req, res, next) {
		var newEvent = req.params.all();
		newEvent.eventName = newEvent.eventName.trim();
		Events.create(newEvent, function (err, event) {
			if(err) {
				return res.redirect('/events/new');
			}
			res.redirect('events/show/' + event.eventName);
		});
	},

	'events': function(req, res, next) {
		Events.find(function(err, events) {
			if(err) return next(err);
			res.view({
				events: events
			})
		})
	},

	'show': function(req, res, next) {
		Events.findOne({where: {eventName: req.param('id')}}, function(err, event) {
			console.log(event);
			if(err) return next(err);
			if(!event) return next();

			res.view({
				event: event
			});
		})
	}
};

