/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import "../styles/window.css";

// Assume your CSS is in this file

const MintWindow = () => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wwindow = windowRef.current;
    if (!wwindow || !desktopRef.current) return;

    const windoww = desktopRef.current.offsetWidth - 1;
    const windowh = desktopRef.current.offsetHeight - 45;

    const dragrd = wwindow.querySelector(".drag-rd");
    const dragru = wwindow.querySelector(".drag-ru");
    const draglu = wwindow.querySelector(".drag-lu");
    const dragld = wwindow.querySelector(".drag-ld");
    const dragwindow = wwindow.querySelector(".title");

    const onMouseDown = (event: MouseEvent) => {
      const shiftX = event.clientX - wwindow.getBoundingClientRect().left;
      const shiftY = event.clientY - wwindow.getBoundingClientRect().top;

      wwindow.style.zIndex = "10";

      const moveAt = (pageX: number, pageY: number) => {
        wwindow.style.left = pageX - shiftX + "px";
        wwindow.style.top = pageY - shiftY + "px";
      };

      const onMouseMove = (event: MouseEvent) => {
        if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1)
          moveAt(event.pageX, event.pageY);
        else {
          document.removeEventListener("mousemove", onMouseMove);
          wwindow.onmouseup = null;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      wwindow.onmouseup = () => {
        wwindow.style.zIndex = "9";
        document.removeEventListener("mousemove", onMouseMove);
        wwindow.onmouseup = null;
      };
    };

    // if (dragwindow) {
    //   dragwindow.addEventListener("mousedown", onMouseDown);
    // }
    // return () => {
    //   if (dragwindow) {
    //     dragwindow.removeEventListener("mousedown", onMouseDown);
    //   }
    // };
  }, []);

  return (
    <div ref={desktopRef} id="desktop" className="bg desktop">
      <div ref={windowRef} id="window" className="window">
        <div className="title no-select" id="windowTitle">
          <img className="img" src="public/Internet_Explorer_6_logo.png" alt="" />
          Enjoy Explorer
        </div>
        <div className="drag-rd"></div>
        <div className="drag-ru"></div>
        <div className="drag-lu"></div>
        <div className="drag-ld"></div>
        <div className="content">
          <br />
          Gm Enjoyers
          <br />
          <a href="">Mint here</a>
        </div>
      </div>
    </div>
  );
};

export default MintWindow;
