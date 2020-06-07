import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notifications, user } = props;
  const userNotifications =
    notifications && notifications.filter((item) => item.userId === user);

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>

          <ul className="notifications">
            {}
            {userNotifications && userNotifications.length !== 0 ? (
              userNotifications.map((item) => {
                return (
                  <li style={{ marginBottom: 10 }} key={item.id}>
                    <div>{item.content}</div>
                    <span style={{ fontSize: 12 }} className="pink-text">
                      {item.user}{" "}
                    </span>
                    <span
                      style={{ fontSize: 12 }}
                      className="grey-text note-date"
                    >
                      {moment(item.time.toDate()).fromNow()}
                    </span>
                  </li>
                );
              })
            ) : (
              <li className="grey-text">Don't have any Notifications</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
