import React, {Component} from 'react';
import csv from 'csv';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import './fileuploadercsv.css';

class FileUploaderCSV extends Component {
    state = {
        uploadStatus: false,
        datacsv: null
    };

    onDrop = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            csv.parse(reader.result, (err, data) => {
                console.log(data);
                this.setState({uploadStatus: true, datacsv: data});
                this.props.onUpload(data);
            });
        };

        reader.readAsBinaryString(e[0]);
    };

    getTableStructure = () => {
        let csvdata = this.state.datacsv;
        let mdbTableHeader = [];
        let mdbTableData = [];
        csvdata.map((val, i) => {
            if (i === 0) {
                val.map((dval) => {
                        mdbTableHeader.push(<th>{dval}</th>);
                    }
                )
            } else {
                mdbTableData[i - 1] = [];
                val.map((dval2) => {
                        mdbTableData[i - 1].push(<td>{dval2}</td>);
                    }
                )
            }
        });
        return (
            <MDBTable scrollY small striped
                      bordered autoWidth={false}>
                <MDBTableHead>
                    <tr>
                        {mdbTableHeader.map((ele) => {
                            return ele
                        })}
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        mdbTableData.map((arr) => {
                            return (
                                <tr>
                                    {
                                        arr.map((ele) => {
                                            return ele
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </MDBTableBody>
            </MDBTable>
        )
    };

    render() {
        const baseStyle = {
            width: '100%',
            height: 50,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5,
            textAlign:'center'
        };
        const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee'
        };
        // const rejectStyle = {
        //     borderStyle: 'solid',
        //     borderColor: '#c66',
        //     backgroundColor: '#eee'
        // };

        return (
            <div className="container">
                <div className="row">
                    <div className="fileuploadcontainer">
                        <div className="fileuploadheader">Data Source</div>
                        <div className="fileuploadbody">
                            {!this.state.uploadStatus ?
                                <Dropzone onDrop={this.onDrop} accept='text/csv'>
                                    {({getRootProps, getInputProps, isDragActive}) => {
                                        let styles = {...baseStyle};
                                        styles = isDragActive ? {...styles, ...activeStyle} : styles;
                                        return (
                                            <div
                                                style={styles}
                                                {...getRootProps()}
                                                className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                                            >
                                                <input {...getInputProps()} />
                                                {
                                                    isDragActive ?
                                                        <p style={{paddingTop:10}}>Drop CSV file here...</p> :
                                                        <p style={{paddingTop:10}}>Try dropping CSV file here, or click to select CSV file for processing</p>
                                                }
                                            </div>
                                        )
                                    }}
                                </Dropzone>
                                :
                                <div style={{width: '100%'}}>
                                    {this.getTableStructure()}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileUploaderCSV;