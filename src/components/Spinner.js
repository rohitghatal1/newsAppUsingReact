import React, { Component } from 'react'
import './spinner.css';

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className='d-flex justify-content-center'>
            <div className="spinner"></div>
        </div>
      </div>
    )
  }
}
