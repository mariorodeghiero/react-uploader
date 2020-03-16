import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import * as S from "./styles";

export default class Upload extends Component {
  render() {
    return (
      <>
         <S.Input
            type="file"
            id="file-upload"
            onChange={this.props.fileSelectedHandler}
          />
          <S.FooterContent>
            <ProgressBar
              now={Math.round(this.props.loaded, 2)}
              label={`${Math.round(this.props.loaded, 2)}%`}
            />
            <S.Button onClick={this.props.fileUploadHandler} disabled={this.props.selectedFile}>Submit</S.Button>
          </S.FooterContent>
      </>
    );
  }
}
