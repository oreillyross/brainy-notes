import "./loading-indicator.css";

function Loading() {
  return (
    <>
      <div className="loading__indicator-box">
        <div className="loading__indicator-entry">
          <div className="loading__indicator-check"></div>
          <div className="loading__indicator-detail"></div>
        </div>
        <div className="loading__indicator-entry">
          <div className="loading__indicator-check"></div>
          <div className="loading__indicator-detail"></div>
        </div>
        <div className="loading__indicator-entry">
          <div className="loading__indicator-check"></div>
          <div className="loading__indicator-detail"></div>
        </div>
      </div>
    </>
  );
}

export { Loading };
