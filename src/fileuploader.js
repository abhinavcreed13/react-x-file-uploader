import React, {Component} from 'react';
import FileUploaderCSV from './fileuploadercsv/fileuploadercsv';

class FileUploader extends Component {
    render() {
        let fileUploaderElement = null;
        switch (this.props.type) {
            case 'CSV':
                fileUploaderElement = (
                    <div className="fileuploadercsv">
                        <FileUploaderCSV onUpload={this.props.onUpload}/>
                    </div>
                );
                break;
        }
        return (
            <div className="fileuploader">
                {fileUploaderElement}
            </div>
        )
    }
}

export default FileUploader;