import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'photosphere_image_upload';
const CLOUDINARY_UPLOAD_URL =
  'https://api.cloudinary.com/v1_1/photosphere/image/upload';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = {
      img_url: this.state.img_url,
      description: this.state.description
    };
    this.props.createPhoto(photo);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="photo-form" >
        <div>
          <Dropzone className="file-upload-box"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <div className="photo-form-input-container">
          <label>
            <input type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              className="photo-form-input"
              />
          </label>
        </div>

        <div className="uploaded-photo">
          {this.state.img_url === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.img_url} />
          </div>}
        </div>

        <button className="create-photo-button" onClick={this.handleSubmit}>Upload</button>

      </div>
    );
  }

}

export default PhotoForm;







///
