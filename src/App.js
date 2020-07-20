import React, { useState, useEffect } from "react";
import SkeletonComponent from "./components/SkeletonComponent";
import Userlist from "./components/Userlist";
import GridContainer from "./components/GridContainer";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import axios from "./APIs/axios";
import SearchBar from "./components/SearchBar";
import "./styles.css";

export default function App() {
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, settotalPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  // const [show, setShow] = useState(true);
  const [buttonvisibility, setbuttonvisibility] = useState(false);

  const formSubmit = async term => {
    setloading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=user:${term}`
      );
      const { items } = await response.data;
      if (items.length === 0) {
        setloading(false);
        alert("No uses Found");
        return;
      }
      settotalPage(1);
      setUsers(items);
      setloading(false);
      setbuttonvisibility(true);
    } catch {
      setloading(false);
      alert("No uses Found");
      return;
    }
  };

  // const handleClose = () => setShow(false);
  const handlePageChange = (e, page) => {
    console.log(page);
    setcurrentPage(page);
  };

  const getAllUsers = async () => {
    setloading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=location:Bangalore&per_page=8&page=1`
    );
    const { items } = await response.data;
    //seting total count to 1000 as it is default
    const totalpage = Math.ceil(100 / 8);
    settotalPage(totalpage);
    setUsers(items);
    setbuttonvisibility(false);
    setcurrentPage(1);
    setloading(false);
  };

  useEffect(() => {
    setloading(true);
    const getEpisodes = async () => {
      const response = await axios.get(
        `https://api.github.com/search/users?q=location:Bangalore&per_page=8&page=${currentPage}`
      );
      const { items } = await response.data;
      //seting total count to 1000 as it is default
      const totalpage = Math.ceil(100 / 8);
      settotalPage(totalpage);
      setUsers(items);
      setloading(false);
    };
    getEpisodes();
  }, [currentPage]);
  return (
    <>
      <SearchBar
        OnSubmit={formSubmit}
        onButtonClick={getAllUsers}
        visibility={buttonvisibility}
      />
      <GridContainer>
        {loading ? <SkeletonComponent /> : <Userlist users={users} />}
      </GridContainer>
      <Pagination
        count={totalPage}
        color="primary"
        style={
          totalPage < 2
            ? { display: "none" }
            : { margin: "20px 10px 20px 0", textAlign: "center" }
        }
        onChange={handlePageChange}
      />
    </>
  );
}
