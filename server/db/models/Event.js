// Event model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var eventSchema = new Schema({
  keyword: {
    type: String,
    required: false
  },
  // headline, a string, must be entered
  title: {
    type: String,
    required: true,
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true,
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true,
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema
var Event = mongoose.model("Event", eventSchema);

// Export the Headline model
module.exports = Event;