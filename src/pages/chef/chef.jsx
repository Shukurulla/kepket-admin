import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import socket from "../../service/socket";

const KitchenPage = () => {
  const [orders, setOrders] = useState("");

  useEffect(() => {
    socket.emit(`all_orders`, "66d99e8e297800fa51259fdf");
    socket.on("get_orders", (data) => {
      setOrders(data);
      console.log(data);
    });
  }, []);

  const handleOrderReady = (item) => {
    // Bu yerda orderDetails va waiterId haqiqiy ma'lumotlar bilan to'ldirilishi kerak
    const notificationData = {
      table: {
        id: item.tableNumber.id,
        number: item.tableNumber.number,
      },
      waiter: {
        id: "66dabb8e1fcc2baa48026f20",
        name: "Shukurulla",
      },
      meals: item.items.map((item) => {
        return { id: item.dish.id, name: item };
      }),
      restaurantId: item.restaurantId,
    };

    // Tayyor bo'lgan taom haqida bildirishnoma yuborish
    socket.emit("create_notification", notificationData);
  };

  return (
    <div>
      <h1>Oshxona Sahifasi</h1>
      <div className="row container">
        {orders.length > 0
          ? orders?.map((item) => (
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                      <h4 className="my-0 fw-normal">
                        {item.tableNumber.number}
                      </h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        {item.totalPrice}som
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        {item.items.map((item) => (
                          <li>{item.dish.name}</li>
                        ))}
                      </ul>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => handleOrderReady(item)}
                      >
                        Buyurtmani tayyor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default KitchenPage;
