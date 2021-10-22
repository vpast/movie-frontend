import HeaderSection from "../sections/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderSection />
      <main className="container">{children}</main>
      {/* /.container */}
      <footer className="blog-footer">
        <p>
          Created by{" "}
          <a target="_blank" href="https://github.com/vpast">Vpast</a>
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
