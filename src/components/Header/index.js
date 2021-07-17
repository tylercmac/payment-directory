import React from 'react';
import './style.css';

export default function Header() {
  return (
    <div className="jumbotron jumbotron-fluid p-4 mb-0 bg-dark">
      <div className="container text-center">
        <h1 className="display-3 title text-light">Vendor Directory</h1>
        <h4 className="lead mt-4 text-light">Search for a vendor. Organize by name and submission date. Choose a vendor to view invoices.</h4>
      </div>
    </div>
  )
}
