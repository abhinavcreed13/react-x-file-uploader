## React File Uploader

[![NPM](https://nodei.co/npm/react-x-file-uploader.png)](https://nodei.co/npm/react-x-file-uploader/)

### Installation

`npm install --save react-x-file-uploader`

### How To Use

First import this component where you want to use it

`import FileUploader from 'react-x-file-uploader';`

Then just renders it

`<FileUploader type='CSV' onUpload={this.onUploadHandler}/>`

### Props

| _Prop_ |     _Description_     
| ------ | :-------------------: 
| type  | Sets type of file uploader 
| onUpload  |      Sets subscribing function to provide read data

### Supported Types

- CSV

### Example

```
import React, { Component } from 'react';
import FileUploader from 'react-x-file-uploader';

class App extends Component {
  
  onUploadHandler = (data) => {
    console.log("Parent->" + data);
  }
  
  render() {
    return (
        <div className="datasourcecontrol">
            <FileUploader type='CSV' onUpload={this.onUploadHandler}/>
        </div>
    );
  }
}

export default App;
```