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
        let url = "http://res.cloudinary.com/dldbslv2a/image/upload/w_720,h_360,c_crop,c_fill/";
        url += results[0].path;
        this.props.onUpload(url);
        const img = `<img src=${url} />`;
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
