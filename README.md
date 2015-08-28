# Solidity Contract Viewer

This module simplifies the process of showing a Solidity Contract in a webpage
beautified with syntax highlight and code indentation. Dynamic changes on the
underline contract properties are reflected imediatly in the contract code shown
on the webpage.

It uses a modified version of [highlight-js](https://github.com/isagalaev/highlight.js) 
adapted to handle solidity code.

As in the highlight-js library, different styles can be applied by simple adding
the desired style in the main html file. Styles can be downloaded from 
[here](https://github.com/isagalaev/highlight.js/tree/master/src/styles).

# IMPORTANT WARNING

Because of a limitation in React, the react version used in this library (0.12.2) should
matches the version used in your project! Otherwise, you will get the message below
when running your code:

```
EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely 
trying to load more than one copy of React.
```

As the message says, if you run two distinct version for your code and for this library,
the React library will be loaded twice in your app and you will get the message above.

# Install

To install this module globally, just type `sudo npm install contract-viewer -g`.

# Usage example

This module works using contract templates. You basically have define a contract 
template as a js module, as in:

```javascript
var mycontracttemplate = '\n\
contract ui_contract_name {\n\
    bytes32 ui_string1_name = "ui_string1_value";\n\
    function ui_function1_name(bytes32 value) {\n\
        ui_string1_name = value;\n\
    }\n\
}';
module.exports = mycontracttemplate;
```

After defining your contract template, you `require` it in the react component
where you are using the contractviewer. You will notice that there are some placeholders
in the contract template. In our case, all words starting with `ui_` is a placeholder.
these are the dynamic parts of the contract. When you use the contractviewer, you 
link these placeholders using `state` variables of the react component so that whenever
the state change, the contract is automatically updated in the webpage. See example
below:

```javascript
var MyTemplate     = require('../data/MyContractTemplate.sol.js');
var ContractViewer = require('contract-viewer');

var myapp = react.createclass({
    getinitialstate: function() {
        return {
            contractName : 'MyContract',
            string1Name  : 'customerName',
            string1Value : 'Satoshi Nakamoto',
            function1Name: 'setCustomerName'
        };
    },
    onChangeCode: function(contractCode) {
        // Result contract code is stored on param 'contractCode'
    },
    render: function() {
        return 
            <ContractViewer
                contract          = {MyTemplate}
                onChange          = {this.onChangeCode}
                ui_contract_name  = {this.state.contractName}
                ui_string1_name   = {this.state.string1Name}
                ui_string1_value  = {this.state.string1Value}
                ui_function1_name = {this.state.function1Name}
            />;
    }
});
```

To show the resulting contract code, you need to add the desired style in the 
html file where the code is shown. For instance, if you want to use the `railscasts` 
style, you should download it from 
[this place](https://github.com/isagalaev/highlight.js/tree/master/src/styles)
and add it to the header section of your page, as in:

```html
<head>
  <link href='/css/railscasts.css' rel='stylesheet'>
  ...
</head>
```

The code above using the railscasts style will look like this:

![](https://github.com/consensys/contract-viewer/blob/master/img/Contract-example.png)

So, any changes in the state variables of the React component will be reflected imediatly in 
the contract being shown.

