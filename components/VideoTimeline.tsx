import React from "react";

function VideoTimeline() {
  return (
    <div className="Timelinestyled__OuterContainer-sc-14uduoa-1 knteOg">
      <div
        id="dropWrapper-timeline"
        className="DropWrapperstyled__Wrapper-sc-1x3a1rn-0 eDjKsP"
      >
        <div
          data-testid="@timeline/container"
          className="Timelinestyled__Relative-sc-14uduoa-4 hjrnKq"
        >
          <button
            data-testid="@editor/timeline/add-media-button"
            // height="54px"
            className="Timelinestyled__Button-sc-14uduoa-2 czBAGq h-[54px]"
            style={{top: "30px" ,height: "54px"}}
          >
            <span className="Timelinestyled__Plus-sc-14uduoa-3 jAsSvH">＋</span>{" "}
            Add media to this project
          </button>
          <canvas
            width="1815"
            height="115"
            style={{height: "92px", zIndex: 1, touchAction: "none", width: "1452px", cursor: "pointer"}}
          ></canvas>
        </div>
        <canvas
          width="1815"
          height="115"
          className="Timelinestyled__OverlayCanvasStyled-sc-14uduoa-0 jNDqYD"
          style={{height: "92px", width: "1452px"}}
        ></canvas>
      </div>
    </div>
  );
}

export default VideoTimeline;
