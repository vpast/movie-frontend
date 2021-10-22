import MovieLayout from "../components/layouts/Movie";

const HomePage = () => {
  return (
    <MovieLayout title="Home Page" items={[{
      title: "Home"
    }]}>
      <div className="container">HomePage</div>
    </MovieLayout>
  );
};

export default HomePage;
