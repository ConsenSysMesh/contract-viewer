/** @jsx React.DOM */

var React     = require('react');
var Beautify  = require('js-beautify').js_beautify;
var Highlight = require('./Highlight');

var ContractViewer = React.createClass({

    doReplace: function(contractCode) {
        var result = contractCode;
        for (var property in this.props) {
            if (this.props.hasOwnProperty(property)) {
                if (property != 'contract' && property != 'onChange') {
                    var reg = new RegExp(property, 'g');
                    result = result.replace(reg, this.props[property]);
                }
            }
        }
        return result;
    },

    render: function() {
        var originContract = this.props.contract;
        var replacedContract = this.doReplace(originContract);
        var beautified = Beautify(replacedContract);
        if (typeof this.props.onChange != 'undefined') {
            this.props.onChange(beautified);
        }
        return <Highlight key='hl673fd4s32' className="solidity">{beautified}</Highlight>;
    }

});

module.exports = ContractViewer;
