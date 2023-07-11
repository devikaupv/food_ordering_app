import React from 'react';
import styles from './signup_style.module.css'; // Import CSS module

const Register = () => {
  const show = () => {
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas");

    // ========== Checking type of password ===========
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <>
      {/* <!-- Login Page --> */}

      <div className={styles["login-page"]}> {/* Use CSS module class */}
        <div className={styles["form"]}> {/* Use CSS module class */}
          <form>
            <lottie-player
              src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json"
              background="transparent"
              speed="1"
              style={{ justifyContent: 'center' }}
              loop
              autoplay
            ></lottie-player>
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="email address" />
            <input type="text" placeholder="pick a username" />
            <input type="password" id="password" placeholder="set a password" />
            <i className={`fas fa-eye ${styles["eye-icon"]}`} onClick={show}></i> {/* Use CSS module class */}
            <br />
            <br />
          </form>

          <form className={styles["login-form"]}> {/* Use CSS module class */}
            <button type="button" onClick={() => window.location.href='login.html'}>
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
