import Link from "next/link";

const Avatar = ({ item, link }) => {
  const { id, name, email } = item;
  return (
    <div className="text-center">
      <img
        src={`https://i.pravatar.cc/140?img=${id}`}
        className="bd-placeholder-img rounded-circle square-140"
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>
        {!!link && (
          <Link href={link}>
            <a className="btn btn-secondary">View details »</a>
          </Link>
        )}
      </p>
    </div>
  );
};

export default Avatar;
