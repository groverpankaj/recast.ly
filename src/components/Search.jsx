var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="searchField"/>
    <button className="btn hidden-sm-down" onClick={ function() {
      let queryText = document.getElementById('searchField').value;
      props.searchSubmit(queryText);
    } }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
