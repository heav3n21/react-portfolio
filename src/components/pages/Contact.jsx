import React from "react";

import "../styles/contact.css"
import "bootstrap/dist/css/bootstrap.min.css";


export default function Contact() {
    return (
      <section className="Contact">
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-light btn-lg">Submit</button>
        </div>
      </form>
        
      </section>)
}