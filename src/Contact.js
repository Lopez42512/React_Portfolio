import React from "react";

function Contact() {
  return (
    <div>
      <div className="iContainer">
        <h2 className="iHelp">I can Help</h2>
      </div>
      <div className="iContainer1">
        <div className="box">
          <div className="iHelp1">
            I'm Currently available for full-time and freelance work. <br />
            So, if you have a team I would be fit for or a project <br /> you
            want to get started on, let's get in touch.
          </div>
          <ul>
            <li>
              Email: Lopez42512@gmail.com
              <a href="mailTo:Lopez42512@gmail.com?Subject=Hello%20Ismael">
                <i class="fa fa-envelope" style={{ fontSize: "28px" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
