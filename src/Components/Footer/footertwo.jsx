import React from "react";
import CafeName from "../../Asserts/CafeName.png";
function Footertwo(props) {
  return (
    <div>
      <footer class="border-0 dark">
        <div id="copyrights" class="center pt-0 bg-footer   footer-size">
          <div class="container clearfix">
            <div class="row">
              <div class="col-lg-12 center">
                <div class="heading-block clearfix bottommargin-sm">
                  <a href="index.html">
                    <img
                      src={CafeName}
                      alt="Canvas Logo"
                      className="footer-Logo"
                    />
                  </a>
                </div>
                Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footertwo;
