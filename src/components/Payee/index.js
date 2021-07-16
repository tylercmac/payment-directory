import React, {useState} from 'react'
import Moment from "moment";
import Popup from '../Popup'

export default function Employee(props) {
  // const [remittance, setRemittance] = useState([]);
  const [show, setShow] = useState(false);



  return (
    <>
    <Popup
      show={show}
      setShow={setShow}
      name={props.name}
      {...props}
      />
    <tr onClick={() => setShow(true)}>
      <th scope="row">{props.name}</th>
      <td>{Moment(props.subDate).format('M-DD-YYYY')}</td>
      <td>{props.phone}</td>
      <td className="desktop-view">{props.fax}</td>
      <td className="wide-view">{props.Payee.Attention}</td>
      <td className="desktop-view">{`${props.city}, ${props.state}`}</td>
    </tr>
    </>
  )
}