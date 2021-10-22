const InnerButton = ({ page, activePage, setActivePage }) => {
  if (page === activePage) {
    return <span className="active paginator-item">{page}</span>;
  }

  return (
    <a className="paginator-item" href="#" onClick={(e) => {
      e.preventDefault()
      setActivePage(page)
    }}>
      {page}
    </a>
  );
};

const getButton = (activePage, setActivePage) => {
  return ({ page }) => {
    return (
      <InnerButton
        page={page}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    );
  };
};

const MoviePagination = ({
  pages = 10,
  activePage = 2,
  setActivePage = () => {},
}) => {
  const Button = getButton(activePage, setActivePage);
  return (
    <div className="section-bottom">
      <div className="paginator">
        <a className="paginator-item" href="" onClick={(e) => {
          e.preventDefault()
          setActivePage(activePage-=1)
        }}>
          <i className="fas fa-chevron-left" />
        </a>
        <Button page={1} />

        <Button page={2} />

        <Button page={3} />

        <span className="paginator-item">...</span>

        <Button page={pages} />

        <a className="paginator-item" href="" onClick={(e) => {
          e.preventDefault()
          setActivePage(activePage+=1)
        }}>
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
  );
};

export default MoviePagination;
