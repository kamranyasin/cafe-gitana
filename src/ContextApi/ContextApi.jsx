import React from "react";
import { notification } from "antd";
import { Redirect } from "react-router-dom";

export const ContextApi = React.createContext();
class ContextApiProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Form1: {},
      Cart: [],
      size: {},
      id: null,
      counter: 0,
      storeItems: [],
      chartTotal: null,
      submittedOrderData: null,
      subTotal: 0.0,
      qst: 0.0,
      gst: 0.0,
    };
  }
  changeMethod = (e) => {
    this.setState({
      propAddres: e.target.value,
    });
  };
  handlesize = (event, item, radioItems) => {
    // if(value)
    // {

    //   let obj = value.items.find((f) => f._id == item._id);
    //   radioItems.push({ ...obj, selectedPrice: event.target.value });
    //   setRadioItems(radioItems);
    // }

    this.setState({ size: event.target.value });
    console.log("size flag clicked", event.target.value);
  };
  handleChange = (event, flag) => {
    const { name, value } = event.target;
    // this.setState({ [event.target.name]: event.target.value });
    // console.log("Context Api handle Change", event.target.value);

    this.setState((prevState) => {
      console.log(prevState);
      return {
        [flag]: {
          ...prevState[flag],
          [name]: value,
        },
      };
    });
    console.log(this.state);
  };
  countUpdation = (index) => {
    let newSubTotal = 0;
    let wqt = 0;
    let qst = this.state.qst;
    let gst = 0.0;
    // console.log("context api", index);
    // let storeItems = this.state.storeItems;
    let item = this.state.storeItems[index].count + 1;
    // console.log(item);

    let storeItems = [...this.state.storeItems];
    storeItems[index] = { ...storeItems[index], count: item };
    this.setState({ storeItems });
    newSubTotal = this.state.subTotal;
    wqt = (storeItems[index].qst / 100) * storeItems[index].price;
    console.log(wqt, "price", storeItems[index].price);
    qst = qst + wqt;
    gst = (storeItems[index].gst / 100) * storeItems[index].price;
    newSubTotal = newSubTotal + parseFloat(storeItems[index].calculategst);

    this.setState({
      subTotal: newSubTotal,
      qst,
      gst: this.state.gst + gst,
    });
  };
  decrementUpdation = (index) => {
    let newSubTotal = 0;
    let wqt = 0;
    let qst = this.state.qst;
    let gst = 0;
    let ngst = this.state.gst;
    if (this.state.storeItems[index].count > 0) {
      let item = this.state.storeItems[index].count - 1;
      // console.log(item);

      let storeItems = [...this.state.storeItems];
      storeItems[index] = { ...storeItems[index], count: item };
      this.setState({ storeItems });
      newSubTotal = this.state.subTotal;
      wqt = (storeItems[index].qst / 100) * storeItems[index].price;
      console.log(wqt, "price", storeItems[index].price);
      gst = (storeItems[index].gst / 100) * storeItems[index].price;
      ngst = ngst - gst;
      ngst = Math.abs(ngst);
      qst = qst - wqt;
      qst = Math.abs(qst);
      // console.log(storeItems[index].calculategst)
      newSubTotal = newSubTotal - parseFloat(storeItems[index].calculategst);
      newSubTotal = Math.abs(newSubTotal);
      this.setState({
        subTotal: newSubTotal,
        qst,
        gst: ngst,
      });
    }
  };
  // handleClick = (item, radioItems, type) => {
  //   const addtocart = radioItems.find((f) => f._id == item._id);
  //   if (addtocart) {
  //     this.state.storeItems.push(addtocart);
  //     this.state.Cart.push(addtocart);
  //     // this.setState({ counter: this.state.counter + 1 });
  //     this.setState({
  //       ...this.state,
  //       storeItems: this.state.storeItems,
  //       Cart: this.state.Cart,
  //     });
  //     notification[type]({
  //       message: "Item Added to Cart",
  //     });
  //   } else {
  //     notification["error"]({
  //       message: "Please select the size of the item",
  //     });
  //   }
  // };
  handleClick = (item, radioItems, type) => {
    let addtocart = this.state.storeItems?.filter((f) => f._id !== item._id);

    // console.log(addtocart);
    item = { ...item, count: 1 };
    addtocart.push(item);
    // addtocart = { ...addtocart, count: 1 };
    this.state.Cart.push(item);
    // this.setState({ counter: this.state.counter + 1 });
    this.setState({
      ...this.state,
      storeItems: addtocart,
      Cart: this.state.Cart,
    });
    notification[type]({
      message: "Item Added to Cart",
      duration: 0.9,
      onClick: () => {
        console.log(this.props.history);
        // this.props.history.push("/cart");
      },
    });
    // console.log("itemssss", addtocart);
    let total = 0;
    let newQst = 0.0;
    let newgst = 0.0;
    for (let key in addtocart) {
      total = parseFloat(addtocart[key].calculategst) + total;
      let wQst = (item.qst / 100) * item.price;
      let wgst = (item.gst / 100) * item.price;
      newgst = this.state.gst + wgst;
      newQst = this.state.qst + wQst;
    }
    // total = this.state.subTotal + total;
    // console.log(total);
    this.setState({
      subTotal: +total,
      qst: newQst,
      gst: newgst,
    });
  };
  componentDidMount() {
    let qstn = 0.0;
    console.log("in cotext api    ");
    // let total = 0;
    // for (let key in this.state.storeItems) {
    //   total = parseFloat(this.state.storeItems[key].calculategst) + total;
    // }
    // console.log(total);
    // this.setState({
    //   subTotal: total,
    // });
  }
  render() {
    console.log("state", this.state);
    console.log("storeItems", this.state.storeItems);
    return (
      <ContextApi.Provider
        value={{
          ...this.state,
          changeMethod: this.changeMethod,
          handleChange: this.handleChange,
          handlesize: this.handlesize,
          handleClick: this.handleClick,
          countUpdation: this.countUpdation,
          decrementUpdation: this.decrementUpdation,
        }}
      >
        {this.props.children}
      </ContextApi.Provider>
    );
  }
}
export default ContextApiProvider;
