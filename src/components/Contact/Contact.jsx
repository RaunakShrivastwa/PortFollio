import "./Contact.css";

// import { ThemeContext } from "../../context"

const Contact = () => {
  

  

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" className="c-icon" />
              +91 9508840645
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" />
              codecprogramming@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://cdn-icons-png.flaticon.com/128/535/535137.png" alt="" />
              Patna Bihar , India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form action="https://formspree.io/f/xaykgdbn" method="POST">
            <input  type="text" placeholder="Name" name="username" 
            required
            autoComplete="off"/>
              <input  type="text" placeholder="Subject" name="Subject" />
            <input  type="text" placeholder="Email" name="Email" />

            <textarea  rows="5" placeholder="Message" name="Message" />
            <button className="s-btn"><h className="s-text">Submit</h></button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;