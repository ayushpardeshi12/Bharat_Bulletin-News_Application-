import React from "react";
import Nav from "./Nav";

function Contact() {
  return (
    <>
      <Nav />
      <div className="container2">
        <div className="contact-container">
          <h2 className="text-center py-2">Contact Us</h2>
          <form>
            <div className="form1">
              <input
                type="text"
                placeholder="Your Name Please"
                id="name"
                className="inputCls"
              />
              <br />

              <input
                type="email"
                placeholder="Your Email Please"
                id="email"
                className="inputCls"
              />

              <br />

              <input
                type="number"
                placeholder="Your Contact No Please"
                id="contact"
                className="inputCls"
              />
              <br />

              <textarea
                rows={5}
                cols={50}
                className="inputCls"
                placeholder="Your Message For Us..."
              ></textarea>
              <br />
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
