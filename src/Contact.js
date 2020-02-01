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
          <br />
          <ul>
            <li className="contactMe">
              Email: Lopez42512@gmail.com
              <a href="mailTo:Lopez42512@gmail.com?Subject=Hello%20Ismael">
                <i class="fa fa-envelope" style={{ fontSize: "28px", paddingLeft: 15 }}></i>
              </a>
            </li>
            <br />
            <li className="contactMe">
                GitHub: <a href="https://github.com/lopez42512">https://github.com/lopez42512</a>
            </li>
            <br />
            <li className="contactMe">
                Resume: <a href="https://docs.google.com/document/d/1LogCtJf-qj897HxZ31u1UQouMYNmkHllqkLsQgfLWD0/edit?usp=sharing">
                <i class="fa fa-file-word-o" style={{fontSize:24, paddingRight:25}}></i>
                </a>
                Linkedin: <a href="https://www.linkedin.com/in/ismael-lopez-924661181">
                <i class="fa fa-address-card-o" style={{fontSize:24}}></i> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
