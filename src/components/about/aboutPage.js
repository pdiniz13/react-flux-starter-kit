"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if (!confirm('Are you sure you read a page?')){
                transition.abort();
            }
            else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            if (!confirm('Are you sure you leave a page?')){
                transition.abort();
            }
        }
    },
    render: function(){
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application users the following technologies
                    <ul>
                        <li>react</li>
                        <li>other</li>
                        <li>react2</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;