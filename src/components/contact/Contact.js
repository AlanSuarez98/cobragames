import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact">
        <div className="boxRedes"></div>
        <div className="boxForm">
          <div className="card">
            <p className="heading">Form</p>

            <div className="input-div">
              <input type="text" className="input" placeholder="Email" />
            </div>
            <div className="input-div">
              <input className="input" type="text" placeholder="Phone" />
            </div>
            <div className="input-div">
              <input className="input" type="text" placeholder="Message" />
            </div>
            <div className="button-div">
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
