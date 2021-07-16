import React, { useState, useEffect } from "react";
import Search from "../Search";
import Payee from "../Payee";
import API from "../../utils/payees.json";
import Moment from "moment";
import "./style.css";

export default function Directory() {
  const [search, setSearch] = useState("");
  const [payees, setPayees] = useState([]);
  const [filteredPayees, setFilteredPayees] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    setPayees(API);
    // const results = API.map((payee) =>
    //   Moment(payee.Payee.SubmissionDate).format("MM/DD/YYYY")
    // );
    // console.log(results);
    setFilteredPayees(API);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value.toUpperCase();

    const results = payees.filter((payee) =>
      payee.Payee.Name.startsWith(value)
    );

    setSearch(value);
    setFilteredPayees(results);
  };

  const sortName = () => {
    // const name = event.target.getAttribute('name');
    // if (name === 'first') {
    if (!isFiltered) {
      setFilteredPayees(() => {
        return filteredPayees.sort((a, b) => {
          if (a.Payee.Name < b.Payee.Name) {
            return -1;
          }
          if (a.Payee.Name > b.Payee.Name) {
            return 1;
          }
          return 0;
        });
      });
      setIsFiltered(true);
    } else {
      setFilteredPayees(() => {
        return filteredPayees.sort((a, b) => {
          if (a.Payee.Name < b.Payee.Name) {
            return 1;
          }
          if (a.Payee.Name > b.Payee.Name) {
            return -1;
          }
          return 0;
        });
      });
      setIsFiltered(false);
    }
  };

  const sortDate = () => {
    if (!isFiltered) {
      setFilteredPayees(() => {
        return filteredPayees.sort((a, b) => {
          if (Moment(a.Payee.SubmissionDate).isBefore(b.Payee.SubmissionDate)) {
            return -1;
          }
          if (Moment(a.Payee.SubmissionDate).isAfter(b.Payee.SubmissionDate)) {
            return 1;
          }
          return 0;
        });
      });
      setIsFiltered(true);
    } else {
      setFilteredPayees(() => {
        return filteredPayees.sort((a, b) => {
          if (Moment(a.Payee.SubmissionDate).isBefore(b.Payee.SubmissionDate)) {
            return 1;
          }
          if (Moment(a.Payee.SubmissionDate).isAfter(b.Payee.SubmissionDate)) {
            return -1;
          }
          return 0;
        });
      });
      setIsFiltered(false);
    }
  };

  return (
    <div>
      <Search value={search} handleInputChange={handleInputChange} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="column" name="Payee" onClick={sortName}>
              Payee
            </th>
            <th scope="col" className="column" onClick={sortDate}>
              Subm. Date
            </th>
            <th scope="col">Phone</th>
            <th className="desktop-view" scope="col">Fax</th>
            <th className="wide-view" scope="col">Attention</th>
            <th className="desktop-view" scope="col">Location</th>
          </tr>
        </thead>

        <tbody>
          {filteredPayees.map((payee) => (
            <Payee
              name={payee.Payee.Name}
              phone={payee.Payee.Phone}
              fax={payee.Payee.Fax}
              state={payee.Payee.Address.StateOrProvince}
              city={payee.Payee.Address.City}
              subDate={payee.Payee.SubmissionDate}
              {...payee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
