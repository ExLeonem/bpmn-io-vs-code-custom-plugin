# Custom BPMN.io VS-Code Plugin 

See [here](https://github.com/bpmn-io/vs-code-bpmn-io) for information of base vs-code plugin.

* View and edit [BPMN files](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)
* Save changes to your local file
* Undo/redo and other keyboard shortcuts
* Create from empty `.bpmn` files
* Add properties to bpmn elements



## Development Setup

First step, clone this project to your local machine.

```sh
git clone https://github.com/bpmn-io/vs-code-bpmn-io.git
cd ./vs-code-bpmn-io
npm install
code .
```

## License

MIT

Contains parts ([bpmn-js](https://github.com/bpmn-io/bpmn-js)) released under the [bpmn.io license](http://bpmn.io/license)



## Scripts

### install the extension

```sh
code --install-extension ./vs-code-bpmn-io-[VERSION].vsix
```

### Run tests

```sh
npm run test
```

### Development

Press `F5` to load and debug the extension in a new VS Code instance.