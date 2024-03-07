import React, { useEffect, useRef } from "react";
import "../styles/dropup.css";
import "../styles/styles.css";
import "../styles/window.css";

const MintWindow = () => {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wwindow = windowRef.current;
    if (!wwindow) return;

    const dragrd = wwindow.querySelector<HTMLDivElement>(".drag-rd");
    const dragru = wwindow.querySelector<HTMLDivElement>(".drag-ru");
    const draglu = wwindow.querySelector<HTMLDivElement>(".drag-lu");
    const dragld = wwindow.querySelector<HTMLDivElement>(".drag-ld");

    const resizeMouseDown = (event: MouseEvent, corner: string) => {
      event.preventDefault();
      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = wwindow.offsetWidth;
      const startHeight = wwindow.offsetHeight;
      const startPosLeft = wwindow.offsetLeft;
      const startPosTop = wwindow.offsetTop;

      const onMouseMove = (event: MouseEvent) => {
        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startPosLeft;
        let newTop = startPosTop;

        switch (corner) {
          case "rd":
            newWidth = startWidth + event.clientX - startX;
            newHeight = startHeight + event.clientY - startY;
            break;
          case "ru":
            newWidth = startWidth + event.clientX - startX;
            newHeight = startHeight - (event.clientY - startY);
            newTop = startPosTop + (event.clientY - startY);
            break;
          case "lu":
            newWidth = startWidth - (event.clientX - startX);
            newHeight = startHeight - (event.clientY - startY);
            newLeft = startPosLeft + (event.clientX - startX);
            newTop = startPosTop + (event.clientY - startY);
            break;
          case "ld":
            newWidth = startWidth - (event.clientX - startX);
            newHeight = startHeight + event.clientY - startY;
            newLeft = startPosLeft + (event.clientX - startX);
            break;
        }

        if (newWidth > 100) {
          wwindow.style.width = newWidth + "px";
          wwindow.style.left = newLeft + "px";
        }
        if (newHeight > 100) {
          wwindow.style.height = newHeight + "px";
          wwindow.style.top = newTop + "px";
        }
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    dragrd?.addEventListener("mousedown", event => resizeMouseDown(event, "rd"));
    dragru?.addEventListener("mousedown", event => resizeMouseDown(event, "ru"));
    draglu?.addEventListener("mousedown", event => resizeMouseDown(event, "lu"));
    dragld?.addEventListener("mousedown", event => resizeMouseDown(event, "ld"));

    return () => {
      dragrd?.removeEventListener("mousedown", event => resizeMouseDown(event, "rd"));
      dragru?.removeEventListener("mousedown", event => resizeMouseDown(event, "ru"));
      draglu?.removeEventListener("mousedown", event => resizeMouseDown(event, "lu"));
      dragld?.removeEventListener("mousedown", event => resizeMouseDown(event, "ld"));
    };
  }, []);

  return (
    <div id="desktop" className="bg desktop">
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