/** @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');
var hljs = require('./highlight.js');

var Highlight = React.createClass({

    getDefaultProps: function () {
        return {
            className: ""
        };
    },

    componentDidMount: function () {
        this.highlightCode();
    },

    componentDidUpdate: function () {
        this.highlightCode();
    },

    highlightCode: function () {
        var domNode = ReactDOM.findDOMNode(this);
        var nodes = domNode.querySelectorAll('pre code');
        if (nodes.length > 0) {
            for (var i = 0; i < nodes.length; i=i+1) {
                hljs.highlightBlock(nodes[i]);
            }
        }
    },

    render: function () {
        return <pre key='598dhwpx5'><code key='d4mz31tt' className={this.props.className}>{this.props.children}</code></pre>;
    }
});

module.exports = Highlight;
