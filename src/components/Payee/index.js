import React, { useState } from "react";
import Moment from "moment";
import Popup from "../Popup";
import "./style.css"

export default function Employee(props) {
  // const [remittance, setRemittance] = useState([]);
  const [show, setShow] = useState(false);

  const formatName =
  props.name.charAt(0) +
  props.name.substr(1, props.name.length - 1).toLowerCase();

  return (
    <>
      <Popup show={show} setShow={setShow} name={formatName} {...props} />
      <tr className="vendor-row" onClick={() => setShow(true)}>
        <th scope="" className="text-success px-3">{formatName}</th>
        <td className="text-primary">{Moment(props.subDate).format("M-DD-YYYY")}</td>
        <td>{props.phone}</td>
        <td className="desktop-view">{props.fax}</td>
        <td className="wide-view">{props.Payee.Attention}</td>
        <td className="desktop-view">{`${props.city}, ${props.state}`}</td>
      </tr>
    </>
  );
}
