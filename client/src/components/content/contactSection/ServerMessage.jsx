import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import "./ServerMessage.scss";

const ServerMessage = () => {
  let dataMsgServer = useSelector((store) => store.serverMsgData);
  const { errorServerMsg, successServerMsg } = dataMsgServer;

  return (
    <Fragment>
      {errorServerMsg ||
        (successServerMsg && (
          <p
            className={
              Boolean(errorServerMsg)
                ? "message-server"
                : "message-server message-server--success"
            }
          >
            {errorServerMsg || successServerMsg}
          </p>
        ))}
    </Fragment>
  );
};

export default ServerMessage;
