import React from "react";
import "./Body.css";
import HeroImg from "./icons/hero_image.svg";
import TopAvatar from "./icons/top-avatar.png";
import TrendingAvatar from "./icons/trending-avatar.png";
import AdaIcon from "./icons/ada_icon.svg";
import Person4 from "./icons/person-4.png";
import NFT4 from "./icons/four.png";
import Two from "./icons/two.png";
import Four from "./icons/four.png";
import Five from "./icons/five.png";
import Six from "./icons/six.png";
import Seven from "./icons/seven.png";
import Eight from "./icons/eight.png";
import Checker from "./icons/checker.svg";
import Wallet from "./icons/wallet.svg";
import UploadIcon from "./icons/upload-icon.svg";
import SaveIcon from "./icons/save-icon.svg";
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.compat.css";


function Body() {
  return (
    <div className="Body">
    {/**************** HEADER SECTION****************/}
      <div className="header">
        <div>
          <h1>
            Discover best digital art and <span>collect NFTs.</span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            placerat congue id augue. Proin arcu euismod bibendum ultricies
            egestas aliquet tempus tristique. Nunc est ipsum, velit urna, eget
            nibh.
          </p>
          <div className="buttons">
            <a href="/" className="button">
              Create Collections
            </a>
            <a href="/" className="button btn-outline">
              Explore Collections
            </a>
          </div>
        </div>
        <img src={HeroImg} alt="Hero_img" className="hero-img" />
      </div>

      {/**************** FIRST SECTION****************/}
      <div className="first-section">
        <div>
          <h2>432K+</h2>
          <p>Collections</p>
        </div>
        <div>
          <h2>200K+</h2>
          <p>Artists</p>
        </div>
        <div>
          <h2>10K+</h2>
          <p>Community</p>
        </div>
      </div>

      {/**************** SECOND SECTION****************/}
      <div className="second-section">
        <div className="heading" id="anim">
          <h2 className="fancy-heading">Hot trending on this week</h2>
          <p>
            Various kinds of NFTs that are trending will be reset every week.
          </p>
          <p> Don’t miss out on the best NFTs every week!</p>
        </div>

        <div className="nfts">
          <div className="nft nft-1">
            <div className="card">
              <img src={TrendingAvatar} alt="trending-avatar"/>
              <div className="card-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <p>CryptoPunk 3D #13</p>
                  <p>3D CryptoPunk</p>
                </div>
              </div>
              <div className="bid">
                <div className="ada-icon">
                  <img src={AdaIcon} alt="ada-icon" width="30px" />
                  <div>
                    <p className="text">200</p>
                    <p className="text">Latest bid</p>
                  </div>
                </div>
                <p className="text">999 Items </p>
              </div>
            </div>
            <div className="text">
              <p>August 12, 2022, 15:01PM</p>
              <h2>Crypto Punk</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="buttons">
                <a href="/" className="button btn-outline">
                  Explore Collections
                </a>
                <a href="/" className="avatar">
                  <img src={TopAvatar} alt="top-avatar" width={"40px"} />
                  <p className="text"> 3D Cryptopunk</p>
                </a>
              </div>
            </div>
          </div>

          <div className="nft nft-2">
            <div className="card">
              <img src={TrendingAvatar} alt="trending-avatar" />
              <div className="card-text">
                <img src={Person4} alt="person-4" width="60px" height="70px" />
                <div>
                  <p>Owlslord #13</p>
                  <p>3D CryptoPunk</p>
                </div>
              </div>
              <div className="bid">
                <div className="ada-icon">
                  <img src={AdaIcon} alt="ada-icon" width="30px" />
                  <div>
                    <p className="text">400</p>
                    <p className="text">Latest bid</p>
                  </div>
                </div>
                <p className="text">800 Items </p>
              </div>
            </div>
            <div className="text">
              <p>August 12, 2022, 15:01PM</p>
              <h2>Moon OWI</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="buttons">
                <a href="/" className="button btn-outline">
                  Explore Collections
                </a>
                <a href="/" className="avatar">
                  <img
                    src={Person4}
                    alt="top-avatar"
                    width="40px"
                    height="50px"
                  />
                  <p className="text"> 3D Cryptopunk</p>
                </a>
              </div>
            </div>
          </div>

          <div className="nft nft-3">
            <div className="card">
              <img src={TrendingAvatar} alt="trending-avatar"/>
              <div className="card-text">
                <img src={NFT4} alt="top-avatar" width="60px" />
                <div>
                  <p>CyberPunk 3D #13</p>
                  <p>3D CryptoPunk</p>
                </div>
              </div>
              <div className="bid">
                <div className="ada-icon">
                  <img src={AdaIcon} alt="ada-icon" width="30px" />
                  <div>
                    <p className="text">4.55</p>
                    <p className="text">Latest bid</p>
                  </div>
                </div>
                <p className="text">500 Items </p>
              </div>
            </div>
            <div className="text">
              <p>August 12, 2022, 15:01PM</p>
              <h2>Cyber Punk</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="buttons">
                <a href="/" className="button btn-outline">
                  Explore Collections
                </a>
                <a href="/" className="avatar">
                  <img src={NFT4} alt="top-avatar" width={"40px"} />
                  <p className="text"> 3D Cryptopunk</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**************** THIRD SECTION****************/}
      <div className="third-section">
        <h2>
          Top NFTs Collections:{" "}
          <span>
            <u>24 hours </u>
            <small> &#x2228;</small>
          </span>
        </h2>
        <div className="nft-col-list">
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">1</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">2</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">3</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">4</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">5</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">6</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">7</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">8</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">9</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">10</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">11</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
          <ol className="nft-col">
            <li className="list">
              <h4 className="text">12</h4>
              <div className="list-img-text">
                <img src={TopAvatar} alt="top-avatar" width="60px" />
                <div>
                  <h4>CryptoPunk 3D</h4>
                  <p className="content">
                    Floor price: <strong className="text">9.61 ADA</strong>
                  </p>
                </div>
              </div>

              <div className="ada">
                <img src={AdaIcon} alt="ada-icon" width="18px" />
                <div>
                  <p className="text content">10 ADA</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/**************** FOURTH SECTION****************/}
      <div className="fourth-section">
        <h2>NFT Collection Spotlight</h2>
        <div className="col-spot">
          <div className="ind-col-spot">
            <img src={Four} alt="nft-4" width="300px" />
            <div className="content-1">
              <p className="text">
                <strong>GB_Gangs </strong>
              </p>
              <img src={Checker} alt="checker" width={"20px"} />
            </div>
            <div className="content-2">
              <img src={AdaIcon} alt="ada-icon" width={"30px"} />
              <p className="text"> 30.8M Total Volume</p>
            </div>
          </div>
          <div className="ind-col-spot">
            <img src={Five} alt="nft-5" width="300px" />
            <div className="content-1">
              <p className="text">
                <strong>HyperApe.co </strong>
              </p>
              <img src={Checker} alt="checker" width={"20px"} />
            </div>
            <div className="content-2">
              <img src={AdaIcon} alt="ada-icon" width={"30px"} />
              <p className="text"> 30.8M Total Volume</p>
            </div>
          </div>
          <div className="ind-col-spot">
            <img src={Six} alt="nft-6" width="300px" />
            <div className="content-1">
              <p className="text">
                <strong>Naomi Po </strong>
              </p>
              <img src={Checker} alt="checker" width={"20px"} />
            </div>
            <div className="content-2">
              <img src={AdaIcon} alt="ada-icon" width={"30px"} />
              <p className="text"> 30.8M Total Volume</p>
            </div>
          </div>
          <div className="ind-col-spot">
            <img src={Seven} alt="nft-7" width="300px" />
            <div className="content-1">
              <p className="text">
                <strong>AZUKI </strong>
              </p>
              <img src={Checker} alt="checker" width={"20px"} />
            </div>
            <div className="content-2">
              <img src={AdaIcon} alt="ada-icon" width={"30px"} />
              <p className="text"> 30.8M Total Volume</p>
            </div>
          </div>
          <div className="ind-col-spot">
            <img src={Eight} alt="nft-8" width="300px" />
            <div className="content-1">
              <p className="text">
                <strong>cvltB3AR </strong>
              </p>
              <img src={Checker} alt="checker" width={"20px"} />
            </div>
            <div className="content-2">
              <img src={AdaIcon} alt="ada-icon" width={"30px"} />
              <p className="text"> 30.8M Total Volume </p>
            </div>
          </div>
          <div className="ind-col-spot">
            <img src={Two} alt="nft-2" width="300px" />
            <div className="content-1">
              <p className="text">
                <strong>Snake Head </strong>
              </p>
              <img src={Checker} alt="checker" width={"20px"} />
            </div>
            <div className="content-2">
              <img src={AdaIcon} alt="ada-icon" width={"30px"} />
              <p className="text"> 30.8M Total Volume </p>
            </div>
          </div>
        </div>
        <a href="/" className="button btn-outline">
          Explore Collections
        </a>
      </div>

      {/*************** FIFTH SECTION ***********/}
      <div className="fifth-section">
        <h2 className="fancy-heading">Create and sell your NFTs<br/>
          <span>on Cardano</span>
        </h2>
        <div className="steps">
          <div className="ind-step">
            <img src={Wallet} alt="wallet-icon" width={"50px"} />
            <h2>Set up your wallet</h2>
            <p>
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>
          <div className="ind-step">
            <img src={UploadIcon} alt="upload-icon" width={"50px"} />
            <h2>Upload & Create Collection</h2>
            <p>
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee.
            </p>
          </div>
          <div className="ind-step">
            <img src={SaveIcon} alt="save-icon" width={"50px"} />
            <h2>List them for sale</h2>
            <p>
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs, and we help
              you sell them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
