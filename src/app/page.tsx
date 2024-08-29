import "./styles/home.css";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="topbar-1">
            <nav>
              <ul>
                <li>
                  <a
                    aria-label="adidas"
                    className="brand-link"
                    data-testid="link"
                    href="https://www.adidas.fi/"
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.662 23.75L0.914 22.455L6.327 19.33L8.879 23.75H1.662Z"
                        fill="#000000"
                      />
                      <path
                        d="M18.982 23.75H11.764L7.242 15.915L12.655 12.79L18.982 23.75Z"
                        fill="#000000"
                      />
                      <path
                        d="M29.086 23.75H21.868L13.57 9.375L18.982 6.25L29.086 23.75Z"
                        fill="#000000"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container-2">
          <ul className="navbar-1">
            <li>[nav1]</li>
            <li>[nav2]</li>
            <li>[nav3]</li>
            <li>[nav4]</li>
            <li>[nav5]</li>
          </ul>
        </div>
      </header>
      <div className="container-14"></div>
      <div className="container-3"></div>
      <div className="container-4">
        <div className="container-5">[img]</div>
        <div className="container-5">[img]</div>
        <div className="container-5">[img]</div>
      </div>
      <div className="container-11">
        <div className="container-13">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-12">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-12">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-13">
          <div className="container-5">[img]</div>
        </div>
      </div>
      <div className="container-15">
        <div className="container-17">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-17">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-16">
          <div className="container-5">[img]</div>
        </div>
      </div>
      <div className="container-15">
        <div className="container-17">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-17">
          <div className="container-5">[img]</div>
        </div>
        <div className="container-18">
          <div className="container-5">[img]</div>
        </div>
      </div>
      <footer className="container-footer">
        <div className="container-20"></div>
        <div className="container-6">
          <div className="container-7">
            <a>
              <p className="footer-header">PRODUCTS</p>
            </a>
            <p className="style-1">Shoes</p>
            <p className="style-1">Clothing</p>
            <p className="style-1">Accessories</p>
            <p className="style-1">New Arrivals</p>
            <p className="style-1">Release Dates</p>
            <p className="style-1">Outlet</p>
          </div>
          <div className="container-7">
            <a>
              <p className="footer-header">SPORTS</p>
            </a>
            <p className="style-1">Football</p>
            <p className="style-1">Basketball</p>
            <p className="style-1">Golf</p>
            <p className="style-1">Gym & Training</p>
            <p className="style-1">Outdoor</p>
            <p className="style-1">Rugby</p>
            <p className="style-1">Running</p>
            <p className="style-1">Tennis</p>
          </div>
          <div className="container-7">
            <a>
              <p className="footer-header">COLLECTIONS</p>
            </a>
            <p className="style-1">Originals</p>
            <p className="style-1">Spezial</p>
            <p className="style-1">SL72</p>
            <p className="style-1">Campus</p>
            <p className="style-1">Adizero</p>
            <p className="style-1">Samba</p>
            <p className="style-1">Gazelle</p>
            <p className="style-1">adicolor</p>
          </div>
          <div className="container-8">
            <button>
              <span>
                <svg
                  aria-hidden="true"
                  className="css-npy3on"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
                  ></path>
                </svg>
              </span>
              Finland
            </button>
          </div>
        </div>
        <div className="footer-spacer"></div>
        <div className="container-19">
          <ul className="footer-list">
            <p>Cookie Settings</p>
            <p>Data Settings</p>
            <p>Cookies</p>
            <p>Privace Notice</p>
            <p>Terms and Conditions</p>
            <span>
              Discount coupons can be used on a wide range of your favorite
              adidas items; certain exclusions and sales restrictions apply.
              Visit https://www.adidas.fi/selected_items | adidas.fi for
              eligible items.
            </span>
          </ul>
        </div>
      </footer>
    </>
  );
}
