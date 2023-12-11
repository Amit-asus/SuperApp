import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../assets/page1_bg.png";
import styles from "./Home.module.css"; // Updated import for CSS Modules

export default function Home() {
  const [formValues, setFormValues] = useState({
    check: false,
    name: "",
    username: "",
    mail: "",
    mobile: "",
  });

  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!(formValues.username.trim().length > 0)) {
      setUserNameError(true);
      valid = false;
    } else {
      setUserNameError(false);
    }

    if (!(formValues.mail.trim().length > 0)) {
      setMailError(true);
      valid = false;
    } else {
      setMailError(false);
    }

    if (!(formValues.mobile.trim().length > 0)) {
      setMobileError(true);
      valid = false;
    } else {
      setMobileError(false);
    }

    if (!formValues.check) {
      setSignUpError(true);
      valid = false;
    } else {
      setSignUpError(false);
    }

    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      navigate("/Genre");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftHalf}>
        <div className={styles.pageContainer}>
          <img
            className={styles.leftImage}
            src={styles.BackgroundImage}
            alt="1stpageimg"
          />
        </div>
        <div className={styles.imageText}>
          <p>Discover new things on Superapp</p>
        </div>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.textArea}>
          <form onSubmit={handleSubmit}>
            <h3 className={styles.superHeading}>super app</h3>
            <p className={styles.create}>create your new account</p>

            <div>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                placeholder="Name"
                className={styles.inputBox}
              ></input>
              {nameError ? (
                <p className={styles.error}>Please fill correctly</p>
              ) : (
                <></>
              )}
            </div>
            <div>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="username"
                className={styles.inputBox}
                placeholder="UserName"
              ></input>
              {userNameError ? (
                <p className={styles.error}>Please fill correctly</p>
              ) : (
                <></>
              )}
            </div>
            <div>
              <input
                onChange={(e) => handleChange(e)}
                type="email"
                name="mail"
                placeholder="Email"
                className={styles.inputBox}
              ></input>
              {mailError ? (
                <p className={styles.error}>Please fill correctly</p>
              ) : (
                <></>
              )}
            </div>
            <div>
              <input
                onChange={(e) => handleChange(e)}
                type="tel"
                name="mobile"
                placeholder="Mobile"
                className={styles.inputBox}
              ></input>
              {mobileError ? (
                <p className={styles.error}>Please fill correctly</p>
              ) : (
                <></>
              )}
            </div>
            <div>
              <label>
                <input
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.checked,
                    })
                  }
                  type="checkbox"
                  name="check"
                />
                Share my registration data with Superapp
              </label>
              {signUpError ? (
                <p className={styles.error}>Please tick this</p>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
            <footer className={styles.footer}>
              <p>
                By clicking on Sign up. you agree to Superapp{" "}
                <span className={styles.greenSpan}>
                  Terms and Conditions of Use
                </span>
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares, and
                <br /> protects your personal data, please read Superapp{" "}
                <span className={styles.greenSpan}>Privacy Policy</span>
              </p>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}
