import React from "react";
import "./SecretSanta.css";
import { StartPage } from "./StartPage/StartPage";
import { EditPage } from "./EditPage/EditPage";
import { ResultPage } from "./ResultPage/ResultPage";
import { Header } from "./Common/Header";
import { Footer } from "./Common/Footer";
import { PAGE } from "./constants";

export class SecretSanta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: PAGE.START,
      santas: [],
      giftable: [],
    };

    this.updateGenerator = this.updateGenerator.bind(this);
    this.toPage = this.toPage.bind(this);
  }

  updateGenerator(santas, giftable) {
    let newState = this.state;
    newState.santas = santas;
    newState.giftable = giftable;
    this.setState(newState);
  }

  toPage(page) {
    let new_state = this.state;
    new_state.page = page;
    if (page === PAGE.START) {
      // Reset state if new page is START page
      new_state.santas = [];
      new_state.giftable = [];
    }
    this.setState(new_state);
  }

  loadPage() {
    switch (this.state.page) {
      case PAGE.START:
        return (
          <StartPage
            onStart={() => {
              this.toPage(PAGE.EDIT);
            }}
          />
        );
      case PAGE.EDIT:
        return (
          <EditPage
            santas={this.state.santas}
            giftable={this.state.giftable}
            updateGenerator={this.updateGenerator}
            toPage={this.toPage}
          />
        );
      case PAGE.RESULT:
        return (
          <ResultPage
            santas={this.state.santas}
            giftable={this.state.giftable}
            toPage={this.toPage}
          />
        );
      default:
        return <p>Error! Page not found!</p>;
    }
  }

  render() {
    return (
      <div className="SecretSanta">
        {this.state.page !== PAGE.START && <Header />}
        {this.loadPage()}
        <Footer />
      </div>
    );
  }
}
