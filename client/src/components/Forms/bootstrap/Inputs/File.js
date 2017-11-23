import React, { Component } from 'react'
import DropZone from 'react-dropzone'

class FileUploader extends Component {
    handleDrop(accepted, rejected) {
        const { input, push, config } = this.props
        accepted.map(file => push(config.name, file))
    }
    render() {
        const { handleDrop } = this
        const { input: { value } } = this.props
        return(
            <div className="form-group">
                {value ? value.map((file, key) => {
                    return(<img key={key} src={file.preview} />)
                }) : null }
                <DropZone className="shit" onDrop={handleDrop.bind(this)}>
                    Drop your pussy here
                </DropZone>
            </div>
        )
    }
}


export default FileUploader
