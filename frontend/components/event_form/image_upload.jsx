import React from 'react';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        this.props.onUpload(results[0].secure_url);
        const img = `<img src=${results[0].secure_url} />`;
        document.getElementById('image-preview').innerHTML = img;
      }
    });
  }

  render() {
    return (
      <div className="upload-form">
        <div id="image-preview" onClick={this.handleClick}>
          <div>
            <i className="material-icons">camera_enhance</i>
          </div>
        </div>
      </div>
    );
  }
}
