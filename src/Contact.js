import React from "react";

function Contact() {
  return (
    <div>
      <div className="iContainer">
        <h2 className="iHelp">I Can Help!</h2>
      </div>
      <div className="iContainer1">
        <div className="box">
          <div className="iHelp1">
            I'm Currently available for full-time and freelance work. <br />
            So, if you have a team I would be fit for or a project <br /> you
            want to get started on, let's get in touch.
            <br />
            Just click on the icon of your preferred method <br />
            of contact and it will redirect you!
          </div>
          <br />
          <ul>
            <li className="contactMe">
              Email:
              <a href="mailTo:Lopez42512@gmail.com?Subject=Hello%20Ismael">
                <i
                  class="fa fa-envelope"
                  style={{
                    fontSize: "28px",
                    paddingLeft: 15,
                    paddingRight: 25,
                    color: "black"
                  }}
                ></i>
              </a>
              GitHub:{" "}
              <a href="https://github.com/lopez42512">
                <img src={require("./photos/github.png")} alt="Not Found"></img>
              </a>
            </li>

            <br />
            <li className="contactMe">
              Resume:{" "}
              <a href="https://docs.google.com/document/d/1LogCtJf-qj897HxZ31u1UQouMYNmkHllqkLsQgfLWD0/edit?usp=sharing">
                <i
                  class="fa fa-file-word-o"
                  style={{ fontSize: 24, paddingRight: 25, color: "black" }}
                ></i>
              </a>
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/ismael-lopez-924661181">
                <img
                  style={{ width: 24, height: 20 }}
                  src={require("./photos/link.png")}
                  alt="Not Found"
                ></img>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
