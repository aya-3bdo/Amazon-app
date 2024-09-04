import React from "react";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";
import "../../styling/header.css";
import $ from "jquery";
import { useEffect } from "react";

function Header() {

  useEffect(() => {
    // Browser detection logic
    const lang_dropDownArrow = document.querySelector('#dropDown-arrow');
    const userAgent = navigator.userAgent.toLowerCase();
    let browserName = 'other';
    let leftSideSearch = document.querySelector('.left-side-search')
    if (userAgent.indexOf('firefox') > -1) {
        browserName = 'firefox';
    } 

    // Apply specific styles based on the browser name
    if (browserName === 'firefox') {
        $('#dropDown-arrow-signIn').css({ top: '85%', right: '0' });
        $('#sign-in-menu').css({ top: '27px', right:'-95%' });   
        leftSideSearch.style.bottom = '3px';
        lang_dropDownArrow.style.left = '58px'
    }
}, []);


  $(function () {
    $(" .lang-slice").on("mouseover", () => {
      $("#dropDown-arrow").show();
      $("#lang-dropdown").show();
    }),
      $(" .lang-slice").on("mouseleave", () => {
        $("#dropDown-arrow").hide();
        $("#lang-dropdown").hide();
      }),
      $(" .sign-in-slice").on("mouseover", () => {
        $("#dropDown-arrow-signIn.chrome")?.show();
        $("#dropDown-arrow-signIn").show();
        $("#sign-in-menu").show();
      }),
      $(" .sign-in-slice").on("mouseleave", () => {
        $("#dropDown-arrow-signIn").hide();
        $("#dropDown-arrow-signIn.chrome")?.hide();
        $("#sign-in-menu").hide();
      }),
      $(".select-wrapper").on("click", () => {
        $(".select-wrapper").css({
          border: "3px solid #f90",
          " height": "93%",
          " top": "1%",
          "z-index": "3",
        });
      });

    $(".outlet").on("click", () => {
      $(".select-wrapper").css({
        border: "3px solid transparent",
        background: "#e6e6e6",
        " border": "3px solid transparent",
        "border-top-left-radius": "6px",
        "border-bottom-left-radius": "6px",
        padding: "0.25em",
        "font-family": "var(--regular-font)",
        height: "85%",
        width: "98%",
        " position": "relative",
        " left": "9px",
        " top": "6%",
        " cursor": "pointer",
        "z-index": "1",
      });
    }),
      $(".cart-container").on("click", () => {
        $(".select-wrapper").css({
          border: "3px solid transparent",
          background: "#e6e6e6",
          " border": "3px solid transparent",
          "border-top-left-radius": "6px",
          "border-bottom-left-radius": "6px",
          padding: "0.25em",
          "font-family": "var(--regular-font)",
          height: "85%",
          width: "98%",
          " position": "relative",
          " left": "9px",
          " top": "6%",
          " cursor": "pointer",
          "z-index": "1",
        });
      }),
      $(".select-wrapper").on("mouseover", () => {
        $(".fa-caret-down ").css("color", "black");
        $(".select-wrapper").children("select").css("color", "black");
      }),
      $(".select-wrapper").on("mouseleave", () => {
        $(".fa-caret-down ").css("color", "#666");
        $(".select-wrapper").children("select").css("color", "#666");
      });
    //////////////////////////////////////////
  });

  return (
    <div id="Header" className="header w-100">
      <TopNav />
      <BottomNav />
    </div>
  );
}

export default Header;