import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserService from "./service/user.service.js";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/register.jsx";
import io from "socket.io-client";
import Waiter from "./pages/category/waiter.jsx";
import Chef from "./pages/chef/chef.jsx";
import KitchenPage from "./pages/chef/chef.jsx";
import Waiter2 from "./pages/category/waiter2.jsx";
import DishService from "./service/dish.service.js";
import socket from "./service/socket.js";

const App = () => {
  const dispach = useDispatch();
  const createOrder = () => {
    socket.emit("create_order", {
      restaurantId: "66d99e8e297800fa51259fdf",
      tableNumber: {
        id: "66d9b7f1d4c7a891ab31162e",
        number: 1,
      },
      items: [
        {
          dish: {
            id: "66d9b79bd4c7a891ab311629",
            name: "Palaw",
          },
          quantity: 1,
        },
      ],
      totalPrice: 40000,
      status: "Pending",
      promoCode: "66d9b8ccd4c7a891ab31163f",
    });
  };

  useEffect(() => {
    DishService.getAllDish(dispach, "66d99e8e297800fa51259fdf");
    // Hodisani qabul qilish (buyurtma javobi)
    socket.on("order_response", (data) => {
      console.log("Serverdan javob:", data);
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/waiter2" element={<Waiter2 />} />
        <Route path="/create-order" element={<CreateaOrder />} />
        <Route path="/chef" element={<KitchenPage />} />
      </Routes>
    </div>
  );
};

export default App;
