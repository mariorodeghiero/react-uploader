import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./styles/global";
import * as S from "./styles";
import Upload from "./components/Upload";
import axios from "axios";
import sha256 from "crypto-js/sha256";

class App extends React.Component {
  state = {
    selectedFile: null,
    loaded: 0
  };

  fileSelectedHandler = event => {
    if (event.target.files[0] !== undefined) {
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0
      });
      this.generateHash(event.target.files[0]);
    }
  };

  generateHash = file => {
    let reader = new FileReader();
    reader.onload = event => {
      let data = event.target.result;
      let hash = sha256(data);
      this.setState({ hash: hash });
    };
    reader.readAsBinaryString(file);
  };

  fileUploadHandler = event => {
    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);
    data.append("hash", this.state.hash);

    let config = {
      headers: {
        Authorization: "Bearer Y2xpZW50OnNlY3JldA==",
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        this.setState({
          loaded: (progressEvent.loaded / progressEvent.total) * 100
        });
      }
    };

    axios
      .put("http://localhost:3001/upload-csv", data, config)
      .then(response => console.log(response));
  };

  render() {
    return (
      <S.Container>
        <S.Content>
          <Upload selectedFile={this.state.selectedFile === null} fileSelectedHandler={this.fileSelectedHandler} loaded={this.state.loaded} fileUploadHandler={this.fileUploadHandler}/>
        </S.Content>
        <GlobalStyle />
      </S.Container>
    );
  }
}

export default App;
