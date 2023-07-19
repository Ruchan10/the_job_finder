import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AddJob() {
  return (
    <div>
      <Navbar />

      <div class="text-4xl">Add Job</div>

      <div class="text-2xl font-bold">Fill the Form</div>

      <input
        type="text"
        placeholder="Company Name"
        class="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Job Title"
        class="input input-bordered input-accent w-full max-w-xs"
      />
      <div class="text-2xl">CV</div>

      <input
        type="file"
        class="file-input file-input-bordered file-input-success w-full max-w-xs"
      />
      <div class="dropdown dropdown-right">
        <label tabindex="0" class="btn m-1">
          Job Time
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Part Time</a>
          </li>
          <li>
            <a>Full Time</a>
          </li>
        </ul>
      </div>
      <div class="text-xl font-bold">Salary</div>
      <div class="dropdown dropdown-bottom">
        <label tabindex="0" class="btn m-1">
          Currency
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Nrs</a>
          </li>
          <li>
            <a>USD</a>
          </li>
          <li>
            <a>IC</a>
          </li>
          <li>
            <a>CAD</a>
          </li>
          <li>
            <a>AUD</a>
          </li>
        </ul>
      </div>
      <input
        type="text"
        placeholder="Salary Time"
        class="input input-bordered input-sm w-full max-w-xs"
      />
      <div class="dropdown dropdown-bottom">
        <label tabindex="0" class="btn m-1">
          Currency
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Nrs</a>
          </li>
          <li>
            <a>USD</a>
          </li>
          <li>
            <a>IC</a>
          </li>
          <li>
            <a>CAD</a>
          </li>
          <li>
            <a>AUD</a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
