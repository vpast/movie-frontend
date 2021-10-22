const Toast = ({item}) => {
  const {name, email, body} = item
  return (
    <div className="toast show mb-3 w-auto">
      <div className="toast-header">
        <strong className="me-auto">{name}</strong>
        <small>{email}</small>
      </div>
      <div className="toast-body">{body}</div>
    </div>
  );
};

export default Toast;
