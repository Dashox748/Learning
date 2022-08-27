import "./notification.css";
function Notification({ alert }) {
  return (
    <div className={`notification__container ${alert ? "active" : null}`}>
      <span>no na chuj to kolejny raz klikasz</span>
    </div>
  );
}

export default Notification;
