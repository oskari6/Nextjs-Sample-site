"use client";

import "./styles/home.css";
import "./styles/content.css";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const videoList = useMemo(
    () => ["/video.mp4", "/video2.mp4", "/video3.mp4"],
    []
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("video-1") as HTMLVideoElement;

    const handleVideoEnded = () => {
      const nextIndex = (currentVideoIndex + 1) % videoList.length;
      setCurrentVideoIndex(nextIndex);
      videoElement.src = videoList[nextIndex];
      videoElement.load();

      videoElement.oncanplay = () => {
        videoElement.play();
      };
    };

    videoElement.addEventListener("ended", handleVideoEnded);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, [currentVideoIndex, videoList]);
  return (
    <>
      <div id="commerce-header-wrapper">
        <div id="gen-nav-commerce-header">
          <nav>
            <a href="#skip-to-content" className="skip-to-main-content"></a>
            <div className="wrapper">
              <div className="topbar-1">
                <div className="topbar-2">
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
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
                              fill="#000000"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="topbar-3">
                  <nav>
                    <ul>
                      <li>
                        <a>
                          <p>Find a store</p>
                        </a>
                        <div></div>
                      </li>
                      <li>
                        <a>
                          <p>Help</p>
                        </a>
                        <div></div>
                      </li>
                      <li>
                        <a>
                          <p>Join Us</p>
                        </a>
                        <div></div>
                      </li>
                      <li>
                        <a>
                          <p>Sign In</p>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <header className="header-style">
              <div className="header-1">
                <div className="header-2">
                  <div className="header-3">
                    <a>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 20 L7.54223 16.3383 C5.93278 15.0162 5 13.04287 5 10.96005 C5 7.11612 8.15607 4 12 4 C15.8439 4 19 7.11612 19 10.96005 C19 13.04287 18.0672 15.0162 16.4578 16.3383 L12 20 Z M7 10 H9 C10.10457 10 11 10.89543 11 12 V13 L7 11.5 V10 Z M15 10 C13.89543 10 13 10.89543 13 12 V13 L17 11.5 V10 H15 Z
"
                          fill="#000000"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="header-4">
                    <nav>
                      <ul>
                        <li>
                          <div>
                            <a>New & Featured</a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a>Men</a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a>Women</a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a>Kids</a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a>Offers</a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-5">
                    <div className="header-6">
                      <search></search>
                      <button>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          width="24px"
                          height="24px"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                          ></path>
                        </svg>
                      </button>
                      <a>
                        <div>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                            role="img"
                            width="24px"
                            height="24px"
                            fill="none"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="1.5"
                              d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="scrim"></div>
          </nav>
          <div id="skip-to-content"></div>
        </div>
      </div>
      <div id="experience-wrapper">
        <div id="__next" data-reactroot>
          <div id="content-wrapper">
            <div>
              <script
                type="application/ld+json"
                data-qa="WebPageScript"
              ></script>
            </div>
            <div role="main">
              <div className="banner">
                <div>
                  <div className="banner-2">
                    <span>Shop All New Arrivals</span>
                    <div>
                      <p>
                        <a>Shop</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-wrapper">
                <div className="media-wrapper-2">
                  <div className="media-wrapper-3">
                    <div className="media-wrapper-4">
                      <div className="media-wrapper-5">
                        <div className="media-wrapper-6">
                          <div className="rvp-video-root">
                            <div className="video-container">
                              <video
                                playsInline
                                id="video-1"
                                role="application"
                                preload="auto"
                                muted
                                autoPlay
                                src={videoList[currentVideoIndex]}
                              ></video>
                              <div className="video-bg-image"></div>
                              <div className="video-element">
                                <div className="video-element-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="media-wrapper-7">
                          <div className="card-overlay">
                            <div className="card-overlay-content">
                              <h1>
                                GO
                                <br />
                                BACK
                                <br />
                                BETTER
                              </h1>
                              <p>Get set for school</p>
                              <div className="cta-container">
                                <a>
                                  Shop Kids<span className="ripple"></span>
                                </a>
                                <a>
                                  Shop All<span className="ripple"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <a href=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-3">
            <div className="banner-3-child">
              <div className="banner-3-child-2">
                <div className="banner-3-child-3">
                  <h3>DON´T WASTE YOUR ENERGY</h3>
                  <div className="banner-3-child-4">
                    <p>[template txt]</p>
                    <br></br>
                    <p>[template txt 2]</p>
                  </div>
                  <div className="banner-3-child-5">
                    <a>
                      Shop
                      <span className="ripple"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-4">
            <div className="banner-4-child">
              <div className="banner-4-child-2">
                <div className="banner-4-child-3">
                  <section>
                    <div className="banner-4-child-4">
                      <div className="banner-4-child-5">
                        <div className="banner-4-child-6">
                          <h2>Latest and Greatest</h2>
                        </div>
                      </div>
                      <div className="carousel-buttons">
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M15.525 18.966L8.558 12l6.967-6.967"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M8.474 18.966L15.44 12 8.474 5.033"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <figure>
                          <div className="banner-4-child-7">
                            <div className="banner-4-child-8">
                              <img src="1.jpg" />
                            </div>
                          </div>
                          <div className="banner-4-child-9">
                            <div className="banner-4-child-10">
                              <h3>[overlay content]</h3>
                            </div>
                          </div>
                          <a className="banner-4-a"></a>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-4-child-7">
                            <div className="banner-4-child-8">
                              <img src="2.jpg" />
                            </div>
                          </div>
                          <div className="banner-4-child-9">
                            <div className="banner-4-child-10">
                              <h3>[overlay content]</h3>
                            </div>
                          </div>
                          <a className="banner-4-a"></a>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-4-child-7">
                            <div className="banner-4-child-8">
                              <img src="3.jpg" />
                            </div>
                          </div>
                          <div className="banner-4-child-9">
                            <div className="banner-4-child-10">
                              <h3>[overlay content]</h3>
                            </div>
                          </div>
                          <a className="banner-4-a"></a>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-4-child-7">
                            <div className="banner-4-child-8">
                              <img src="4.jpg" />
                            </div>
                          </div>
                          <div className="banner-4-child-9">
                            <div className="banner-4-child-10">
                              <h3>[overlay content]</h3>
                            </div>
                          </div>
                          <a className="banner-4-a"></a>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-4-child-7">
                            <div className="banner-4-child-8">
                              <img src="5.jpg" />
                            </div>
                          </div>
                          <div className="banner-4-child-9">
                            <div className="banner-4-child-10">
                              <h3>[overlay content]</h3>
                            </div>
                          </div>
                          <a className="banner-4-a"></a>
                        </figure>
                      </li>
                      <li className="buffer"></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-4">
            <div className="banner-4-child">
              <div className="banner-4-child-2">
                <div className="banner-4-child-3">
                  <section>
                    <div className="banner-4-child-4">
                      <div className="banner-4-child-5">
                        <div className="banner-4-child-6">
                          <h2>[title]</h2>
                        </div>
                      </div>
                      <div className="carousel-buttons">
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M15.525 18.966L8.558 12l6.967-6.967"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M8.474 18.966L15.44 12 8.474 5.033"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="6.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="7.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="8.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="9.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="10.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="11.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="12.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img src="13.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>

                      <li className="buffer"></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-4">
            <div className="banner-4-child">
              <div className="banner-4-child-2">
                <div className="banner-4-child-3">
                  <section>
                    <div className="banner-4-child-4">
                      <div className="banner-4-child-5">
                        <div className="banner-4-child-6">
                          <h2>[title]</h2>
                        </div>
                      </div>
                      <div className="carousel-buttons">
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M15.525 18.966L8.558 12l6.967-6.967"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M8.474 18.966L15.44 12 8.474 5.033"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="14.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="15.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="16.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="17.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="18.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="19.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="20.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="banner-5-child-7">
                            <div className="banner-4-child-8">
                              <img id="gray-scale" src="21.jpg" />
                            </div>
                          </div>
                          <div className="banner-5-child-10">
                            <a>[img title]</a>
                          </div>
                        </figure>
                      </li>

                      <li className="buffer"></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-4">
            <div className="banner-4-child">
              <div className="banner-4-child-2">
                <section>
                  <div className="banner-4-child-4">
                    <div className="banner-4-child-5">
                      <div className="banner-4-child-6">
                        <h2>[title]</h2>
                      </div>
                    </div>
                    <div className="carousel-buttons">
                      <a>[side title]</a>
                      <button>
                        <div className="carousel-button-icon">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                            role="img"
                            width="24px"
                            height="24px"
                            fill="none"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="1.5"
                              d="M15.525 18.966L8.558 12l6.967-6.967"
                            ></path>
                          </svg>
                        </div>
                      </button>
                      <button>
                        <div className="carousel-button-icon">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                            role="img"
                            width="24px"
                            height="24px"
                            fill="none"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="1.5"
                              d="M8.474 18.966L15.44 12 8.474 5.033"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="22.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="23.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="24.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="25.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="26.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="27.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="28.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="29.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="30.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="banner-7-child-2">
                        <a>
                          <figure>
                            <div className="image-container">
                              <img src="31.jpg" />
                            </div>
                            <div className="image-text">
                              <h4>[title]</h4>
                              <h5>[category]</h5>
                            </div>
                            <div className="image-text-2">
                              <h3>[price]</h3>
                            </div>
                          </figure>
                        </a>
                      </div>
                    </li>

                    <li className="buffer"></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="banner-4">
            <div className="banner-4-child">
              <div className="banner-4-child-2">
                <div className="banner-4-child-3">
                  <section>
                    <div className="banner-4-child-4">
                      <div className="banner-4-child-5">
                        <div className="banner-4-child-6">
                          <h2>[title]</h2>
                        </div>
                      </div>
                      <div className="carousel-buttons">
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M15.525 18.966L8.558 12l6.967-6.967"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M8.474 18.966L15.44 12 8.474 5.033"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <figure>
                          <div className="image-container-2">
                            <img src="32.jpg" />
                          </div>
                          <div className="banner-5-child-10">
                            <a id="image-header">[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="image-container-2">
                            <img src="33.jpg" />
                          </div>
                          <div className="banner-5-child-10">
                            <a id="image-header">[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="image-container-2">
                            <img src="34.jpg" />
                          </div>
                          <div className="banner-5-child-10">
                            <a id="image-header">[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <div className="image-container-2">
                            <img src="35.jpg" />
                          </div>
                          <div className="banner-5-child-10">
                            <a id="image-header">[img title]</a>
                          </div>
                        </figure>
                      </li>
                      <li className="buffer"></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-4">
            <div className="banner-4-child">
              <div className="banner-4-child-2">
                <div className="banner-4-child-3">
                  <section>
                    <div className="banner-4-child-4">
                      <div className="carousel-buttons">
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M15.525 18.966L8.558 12l6.967-6.967"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="carousel-button-icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M8.474 18.966L15.44 12 8.474 5.033"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <a>
                          <figure id="figure-image">
                            <div className="image-container-3">
                              <img src="22.jpg" />
                            </div>
                            <div className="image-text-3">
                              <p>[desc]</p>
                              <h3>[title]</h3>
                              <div>
                                <a>[shop]</a>
                              </div>
                            </div>
                            <a></a>
                          </figure>
                        </a>
                      </li>
                      <li>
                        <a>
                          <figure id="figure-image">
                            <div className="image-container-3">
                              <img src="23.jpg" />
                            </div>
                            <div className="image-text-3">
                              <p>[desc]</p>
                              <h3>[title]</h3>
                              <div>
                                <a>[shop]</a>
                              </div>
                            </div>
                            <a></a>
                          </figure>
                        </a>
                      </li>
                      <li>
                        <a>
                          <figure id="figure-image">
                            <div className="image-container-3">
                              <img src="24.jpg" />
                            </div>
                            <div className="image-text-3">
                              <p>[desc]</p>
                              <h3>[title]</h3>
                              <div>
                                <a>[shop]</a>
                              </div>
                            </div>
                            <a></a>
                          </figure>
                        </a>
                      </li>
                      <li>
                        <a>
                          <figure id="figure-image">
                            <div className="image-container-3">
                              <img src="25.jpg" />
                            </div>
                            <div className="image-text-3">
                              <p>[desc]</p>
                              <h3>[title]</h3>
                              <div>
                                <a>[shop]</a>
                              </div>
                            </div>
                            <a></a>
                          </figure>
                        </a>
                      </li>
                      <li className="buffer"></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-10">
            <div className="banner-10-child">
              <div className="banner-10-child-2">
                <div className="banner-10-child-3">
                  <div className="banner-10-child-4">
                    <h4 id="grid-one-one">
                      <label>[title]</label>
                    </h4>
                    <div id="grid-one-two" className="banner-10-child-5">
                      <ul>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4 id="grid-three-one">
                      <label>[title]</label>
                    </h4>
                    <div id="grid-three-two" className="banner-10-child-5">
                      <ul>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4 id="grid-five-one">
                      <label>[title]</label>
                    </h4>
                    <div id="grid-five-two" className="banner-10-child-5">
                      <ul>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4 id="grid-seven-one">
                      <label>[title]</label>
                    </h4>
                    <div id="grid-seven-two" className="banner-10-child-5">
                      <ul>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>[product]</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-root">
            <div className="shop-root-child">
              <div className="shop-root-child-2">
                <div className="shop-cart-error"></div>
              </div>
              <div className="shop-root-child-3">
                <div className="shop-cart-error-2"></div>
              </div>
              <div className="shop-root-child-4">
                <div className="shop-cart-dialog"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-wrapper">
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
            <div className="container-8-wrapper">
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
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
                      ></path>
                    </svg>
                  </span>
                  Finland
                </button>
              </div>
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
      </div>
    </>
  );
}
