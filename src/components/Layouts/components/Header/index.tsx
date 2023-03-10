import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";
import images from "~/assets/images/images";
import icons from "~/assets/icons/icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
const cx = classNames.bind(styles);
export default function Header() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>(["1, 2, 3"]);
  const handleClearInput = () => {
    setInput("");
  };
  const searchPlaceHolder = "Tìm kiếm tài khoản và video";
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <a href="#!">
          <img src={images.logo} alt="Tiktok" />
        </a>
        <div className={cx("center")}>
          <Tippy
            interactive={true}
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                <PopperWrapper>Ket Qua</PopperWrapper>
              </div>
            )}>
            <form action="/search" className={cx("form-element")}>
              <div className={cx("form-control")}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type={cx("text")}
                  placeholder={searchPlaceHolder}
                />
                <button
                  type="button"
                  className={cx("clear")}
                  onClick={handleClearInput}
                  style={{ margin: "0 12px" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                    fill="rgba(22, 24, 35, .34)"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"></path>
                  </svg>
                </button>
                <div className={cx("form-border")}></div>
              </div>
              <span className={cx("line")}></span>
              <button className={cx("form-submit")}>
                <img src={icons.search} alt="search" />
              </button>
            </form>
          </Tippy>
        </div>
        <div className={cx("right")}>
          <a href="#!" className={cx("upload")}>
            <svg
              className={cx("left")}
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"></path>
            </svg>
            <span className={cx("right")}> Tải lên</span>
          </a>
          <div className={cx("top-dm")}>
            <a href="#!">
              <img
                className={cx("top-dm-icon")}
                src={icons.notification}
                alt=""
              />
            </a>
            <div className={cx("title")}>
              <div className={cx("title-arrow")}></div>
              <div className={cx("title-inner")}>Tin nhắn</div>
            </div>
          </div>
          <div className={cx("inbox")}>
            <a href="#!">
              <img className={cx("inbox-icon")} src={icons.inbox} alt="" />
            </a>
            <div className={cx("title")}>
              <div className={cx("title-arrow")}></div>
              <div className={cx("title-inner")}>Hộp thư</div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8d495a95dea032b0c0362eb0611f1c87~c5_720x720.jpeg?x-expires=1666483200&x-signature=gy9a66FDf0U8m3%2BNTNy%2BUt%2F5WDM%3D)",
            }}
            className={cx("profile")}>
            <ul className={cx("list-link")}>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.user} alt="" />
                  <span className={cx("text")}>Xem hồ sơ</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.coin} alt="" />
                  <span className={cx("text")}>Nhận xu</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.live} alt="" />
                  <span className={cx("text")}>LIVE Studio</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.setting} alt="" />
                  <span className={cx("text")}>Cài đặt</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.language} alt="" />
                  <span className={cx("text")}>Tiếng Việt</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.support} alt="" />
                  <span className={cx("text")}>Phản hồi và trợ giúp</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.control} alt="" />
                  <span className={cx("text")}>Phím tắt trên màn hình</span>
                </a>
              </li>
              <li>
                <a className={cx("link")} href="#!">
                  <img className={cx("icon")} src={icons.logout} alt="" />
                  <span className={cx("text")}>Đăng xuất</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
