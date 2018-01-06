import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'photosphere_image_upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/photosphere/image/upload';
