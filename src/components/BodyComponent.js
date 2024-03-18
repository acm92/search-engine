import React from "react";
import ImageComponent from "./ImageComponent";
import DataService from "./DataService";

export default class BodyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      isFull: false,
      orderBySize: false,
      orderByDate: false,
      easterEgg: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChooseOrder = this.handleChooseOrder.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  async handleSearch(e) {
    this.setState({ easterEgg: false });
    this.setState({ isFull: false });
    this.setState({ orderBySize: false });
    this.setState({ orderByDate: false });

    const search = e.target.elements.search.value;

    e.preventDefault();

    const result = await DataService.retrieveImages(search);

    //If the search didn't return anything, or the input is empty...
    if (result.data.results === 0) {
      this.setState({ easterEgg: false });
      this.setState({ isFull: false });
      this.setState({ orderBySize: false });
      this.setState({ orderByDate: false });
    } else if (search === "tekken3") {
      this.setState({ easterEgg: true });
    } else {
      this.setState({ easterEgg: false });
      this.setState({ images: result.data.results, isFull: true });
    }
  }

  handleChooseOrder(e) {
    e.preventDefault();

    const option = e.target.value;

    if (option === "size") {
      this.setState({ orderBySize: true });
      this.setState({ orderByDate: false });
    } else if (option === "date") {
      this.setState({ orderBySize: false });
      this.setState({ orderByDate: true });
    }
  }

  handleOrder(e) {
    e.preventDefault();

    const orientation = e.target.value;
    let aux = this.state.images;

    if (this.state.orderBySize) {
      let resolution1 = 0,
        resolution2 = 0;

      if (orientation === "ascending") {
        aux = aux.sort((a, b) => {
          resolution1 = a.height * a.width;
          resolution2 = b.height * b.width;

          if (resolution1 < resolution2) {
            return -1;
          }

          if (resolution1 > resolution2) {
            return 1;
          }

          return 0;
        });

        this.setState({ images: aux });
      } else if (orientation === "descending") {
        aux = aux.sort((a, b) => {
          resolution1 = a.height * a.width;
          resolution2 = b.height * b.width;

          if (resolution1 > resolution2) {
            return -1;
          }

          if (resolution1 < resolution2) {
            return 1;
          }

          return 0;
        });

        this.setState({ images: aux });
      }
    } else if (this.state.orderByDate) {
      if (orientation === "ascending") {
        aux = aux.sort((a, b) => {
          if (a.created_at < b.created_at) {
            return -1;
          }

          if (a.created_at > b.created_at) {
            return 1;
          }

          return 0;
        });

        this.setState({ images: aux });
      } else if (orientation === "descending") {
        aux = aux.sort((a, b) => {
          if (a.created_at < b.created_at) {
            return 1;
          }

          if (a.created_at > b.created_at) {
            return -1;
          }

          return 0;
        });

        this.setState({ images: aux });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container__subtitle">
          <form className="container__form" onSubmit={this.handleSearch}>
            Browse images:
            <input
              className="container__input"
              type="text"
              name="search"
            ></input>
            <button>Go!</button>
          </form>

          {this.state.isFull && (
            <div className="container__form">
              Order by:
              <select
                className="container__input"
                id="order"
                name="order"
                onChange={this.handleChooseOrder}
              >
                <option defaultValue>Select an option</option>
                <option value="size">Size</option>
                <option value="date">Date</option>
              </select>
            </div>
          )}

          {this.state.isFull && this.state.orderBySize && (
            <form className="container__form">
              <div className="container__form">
                Order:
                <select
                  className="container__input"
                  id="orderOrientation"
                  name="orderOrientation"
                  onChange={this.handleOrder}
                >
                  <option defaultValue>Select an option</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </form>
          )}

          {this.state.isFull && this.state.orderByDate && (
            <form className="container__form">
              <div className="container__form">
                Order:
                <select
                  className="container__input"
                  id="orderOrientation"
                  name="orderOrientation"
                  onChange={this.handleOrder}
                >
                  <option defaultValue>Select an option</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </form>
          )}
        </div>

        <div className="container__content">
          {this.state.isFull ? (
            this.state.images.map((image) => (
              <ImageComponent key={image.urls.small} imag={image} />
            ))
          ) : this.state.easterEgg ? (
            <div>
              <h1>Crap! You found an easter egg</h1>
              <h2>Don't tell anybody</h2>
              <iframe
                src="https://www.retrogames.cc/embed/40238-tekken-3.html"
                width="800"
                height="600"
                frameBorder="no"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                scrolling="no"
              ></iframe>
            </div>
          ) : (
            <h1 className="container__placeholder">Start the search!</h1>
          )}
        </div>
      </div>
    );
  }
}
