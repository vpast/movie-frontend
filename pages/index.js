import MovieLayout from '../components/layouts/Movie';
import MovieHomePage from '../components/movies/MovieHomePage';

const HomePage = () => {
  return (
    <MovieLayout
      title='Home Page'
      items={[
        {
          title: 'Home',
        },
      ]}
    >
      <MovieHomePage />
    </MovieLayout>
  );
};

export default HomePage;
