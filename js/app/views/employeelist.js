define(function (require) {

    "use strict";

    var $                       = require('jquery'),
        _                       = require('underscore'),
        Backbone                = require('backbone'),
        EmployeeListItemView    = require('app/views/EmployeeListItem');

    return Backbone.View.extend({

        initialize: function () {
            this.collection.on("reset", this.render, this);
            this.collection.on("add", this.render, this);
        },

        render: function () {
            this.$el.empty();
            _.each(this.collection.models, function (employee) {
                this.$el.append(new EmployeeListItemView({model: employee}).render().el);
            }, this);
            return this;
        }
    });

});

