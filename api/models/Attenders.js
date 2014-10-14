/**
* Attenders.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	attenderName: {
  		type: 'string',
  		required: true
  	},
  	eventName: {
  		type: 'string',
  		required: true	
  	}
  }
};

