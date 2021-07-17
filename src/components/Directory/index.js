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
      <table className="table table-striped pl-2">
        <thead>
          <tr>
            <th scope="col" className="column px-3" name="Payee" onClick={sortName}>
              Vendor
            </th>
            <th scope="col" className="column" onClick={sortDate}>
              Submitted
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
              key={payee.Payee.Name}
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
