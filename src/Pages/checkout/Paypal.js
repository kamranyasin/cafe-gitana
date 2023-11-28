import React, { useEffect, useRef, useContext } from "react";
import { ContextApi } from "../../ContextApi/ContextApi";
import axiosInstance from "../../axios-Instance";

export default function Paypal() {
  const paypal = useRef();
  const contextType = useContext(ContextApi);
  console.log(contextType.chartTotal);
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "Capture",
            purchase_units: [
              {
                desription: "coffie cappiciano",
                amount: {
                  currency_code: "USD",
                  value: contextType.chartTotal,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          let submittedOrderData = {};
          submittedOrderData.purchasedItems = contextType.storeItems;
          submittedOrderData.payerDetails = order?.payer;
          submittedOrderData.purchasedDetails = order?.purchase_units[0];
          submittedOrderData.payingMethod = "Paypal";
          axiosInstance
            .post("submittedOrders/add", submittedOrderData)
            .then((res) => {
              console.log(res.data.message);
              console.log(res.data.order);
            })
            .catch((err) => {
              console.log(err);
            });
          contextType.submittedOrderData = submittedOrderData;
          console.log("Order-Details", submittedOrderData);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
