import React from "react";
import "../css/admin.module.css";

function Admin() {
  return (
    <div class="styles.container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          {/* <div class="col-lg-12 login-key">
            <i class="fa fa-key" aria-hidden="true"></i>
          </div> */}
          <div class="col-lg-12 login-title">ADMIN PANEL</div>

          <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
              <form>
                <div class="form-group display-7">
                  <label class="form-control-label">NAME</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group display-7">
                  <label class="form-control-label">EMAIL</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input type="password" class="form-control" i />
                </div>

                <div class="form-group">
                  <label class="form-control-label">CONFIRM PASSWORD</label>
                  <input type="password" class="form-control" i />
                </div>
                <div class="col-lg-12 loginbttm">
                  <div class="col-lg-6 login-btm login-text">
                    {/* <!-- Error Message --> */}
                  </div>
                  <div class="col-lg-6 login-btm login-button ">
                    <button type="submit" class="btn btn-outline-primary">
                      REGISTER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
