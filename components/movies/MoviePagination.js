const InnerButton = ({ page, activePage, setActivePage }) => {
  if (page === activePage) {
    return <span className='active paginator-item'>{page}</span>;
  }

  return (
    <a
      className='paginator-item'
      href='#'
      onClick={(e) => {
        e.preventDefault();
        setActivePage(page);
      }}
    >
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
  pages = 0,
  activePage = 0,
  setActivePage = () => {},
}) => {
  const Button = getButton(activePage, setActivePage);

  return (
    <div className='section-bottom'>
      <div className='paginator'>
        <a
          className='paginator-item'
          href=''
          onClick={(e) => {
            e.preventDefault();
            if (activePage >= 2) {
              setActivePage((activePage -= 1));
            }
          }}
        >
          <i className='fas fa-chevron-left' />
        </a>

        {activePage > 4 ? <Button page={1} /> : <></>}

        {activePage > 4 ? <span className='paginator-item'>...</span> : <></>}

        {activePage > 3 ? (
          <Button page={activePage - 2} />
        ) : (
          <Button page={1} />
        )}

        {activePage > 3 ? (
          <Button page={activePage - 1} />
        ) : pages <= 2 ? (
          <></>
        ) : (
          <Button page={2} />
        )}

        {activePage > 3 ? (
          <Button page={+activePage} />
        ) : pages <= 3 ? (
          <></>
        ) : (
          <Button page={3} />
        )}

        {pages - 1 == activePage ? (
          <></>
        ) : pages == activePage ? (
          <></>
        ) : (
          <span className='paginator-item'>...</span>
        )}

        {pages == activePage && pages != 2 && pages != 3 ? (
          <></>
        ) : (
          <Button page={pages} onChange={event => console.log(event.target.value)} />
        )}

        <a
          className='paginator-item'
          href=''
          onClick={(e) => {
            e.preventDefault();
            if (activePage < pages) {
              setActivePage((activePage += 1));
            }
          }}
        >
          <i className='fas fa-chevron-right' />
        </a>
      </div>
    </div>
  );
};

export default MoviePagination;
