import "./App.css";
import { useState, useEffect } from "react";
import Frame from "./component/frame";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [allVideoData, setAllVideoData] = useState([]);
  const [filterData, setFilterData] = useState(allVideoData);
  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    try {
      const response = await axios.get(
        `https://api.ineedaword.org/video?showcaseId=7769133`
      );
      let data = response.data.data.files;
      setAllVideoData(data); // Update the allVideoData state with fetched data
      setFilterData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {
    for (let i = 0; i < allVideoData.length; i++) {
      if (searchValue === allVideoData[i].name) {
        setFilterData([allVideoData[i]]);
        return;
      }
    }
    alert(`No  video found of name ${searchValue}.`);
    setSearchValue("");
  };
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-dark text-white">
        <div class="container-fluid">
          <a
            class="navbar-brand text-white"
            href="/"
            onClick={() => setFilterData(allVideoData)}
          >
            Cooking Show
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type Video Name."
                aria-label="Search"
                value={searchValue}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {!user && (
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              )}
              {user && (
                <a class="nav-link active" aria-current="page" href="/user">
                  Welcome {user}
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
      {/* this is iframe for video */}
      <div>
        <Frame videos={filterData} />
      </div>
    </div>
  );
}

export default App;
