import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import NotificationSong from "../../../public/notification.wav";
import socket from "../../service/socket";

const Waiter = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Ulanish hodisasi
    socket.on("connect", () => {
      console.log("Serverga ulandik:", socket.id);

      // Ofitsiant ulanayotganda o'zining ID sini yuboradi
      const waiterId = "specific_waiter_id"; // Bu yerda haqiqiy ID ni o'rnating
      socket.emit("waiter_connected", "66d9b2f2ccfa11f1d4b3581d");
    });

    // Tayyor bo'lgan taom haqida bildirishnoma olish
    socket.on("get_notification", (notification) => {
      console.log("Yangi bildirishnoma:", notification);
      setNotifications(notification);
      Notification.requestPermission().then((perm) => {
        if (perm == "granted") {
          new Notification("Yangi buyurtma", {
            body: `${notification.table.number} - Stol`,
            data: `${notification.meals.map((item) => item.name).toString()}`,
          });
          new Audio(NotificationSong).play();
        }
      });
    });

    return () => {
      socket.off("get_notification");
    };
  }, [socket]);

  return (
    <div>
      <h1>Ofitsiant uchun Bildirishnomalar</h1>
      <ul></ul>
    </div>
  );
};

export default Waiter;
