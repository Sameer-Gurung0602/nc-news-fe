import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import sort from "../assets/sort.png";
export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div class="dropdown">
      <button class="dropbtn">
        <img src={sort} alt="" />
        Sort
      </button>
      <div class="dropdown-content">
        <button
          onClick={() => setSearchParams("?sort_by=created_at&order=DESC")}
        >
          Oldest
        </button>
        <button
          onClick={() => setSearchParams("?sort_by=created_at&order=ASC")}
        >
          Newest
        </button>
        <button
          onClick={() => setSearchParams("?sort_by=comment_count&order=DESC")}
        >
          Most commented
        </button>
        <button
          onClick={() => setSearchParams("?sort_by=comment_count&order=ASC")}
        >
          Least commented
        </button>
        <button onClick={() => setSearchParams("?sort_by=votes&order=DESC")}>
          Top
        </button>
        <button onClick={() => setSearchParams("?sort_by=votes&order=ASC")}>
          Controversial
        </button>
      </div>
    </div>
  );
}
