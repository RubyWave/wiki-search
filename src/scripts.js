import React from 'react'
import ReactDOM from 'react-dom';




class Search {

    static renderSearchOutput(response) {
        // console.log(response);

        
          function SearchResults(props) {
            const searchResult = props.searchResult;

            function createMarkup(input) {
                return {__html: input};
              }
            const listItems = searchResult.map((oneResult) =>
              <li><a dangerouslySetInnerHTML={createMarkup(oneResult.snippet)} className="search-word-here"></a></li>
            );
            return (
              <ul className="search-list">{listItems}</ul>
              
            );
          }
          
          ReactDOM.render(
            <SearchResults searchResult={response.query.search} />,
            document.getElementById('search-results')
          );



        return 3;
    }

    static searchFun(input = "test") {

        let classThis = this;
        var url = "https://en.wikipedia.org/w/api.php";

        var params = {
            action: "query",
            list: "search",
            srsearch: input,
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function (key) {
            url += "&" + key + "=" + params[key];
        });

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                classThis.renderSearchOutput(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    static testSearch(input = "test") {
        let classThis = this;
        var url = "https://en.wikipedia.org/w/api.php";

        var params = {
            action: "query",
            list: "search",
            srsearch: input,
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function (key) {
            url += "&" + key + "=" + params[key];
        });

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                classThis.renderSearchOutput(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export {
    Search as
    default
}