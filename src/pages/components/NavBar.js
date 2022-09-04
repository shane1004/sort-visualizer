import React from "react";
import Logo from "./Logo";
import "../../css/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<nav style={{ zIndex: "99" }}>
			<Logo heightInPixel={47} style={{ cursor: "pointer" }} to="/" />

			<div className="Link-Container">
				<NavLink to="/selectionsort">Selection Sort</NavLink>

				<NavLink to="/insertionsort">Insertion Sort</NavLink>

				<NavLink to="/bubblesort">Bubble Sort</NavLink>

				<NavLink to="/quicksort">Quick Sort</NavLink>

				<NavLink to="/mergesort">Merge Sort</NavLink>

				<NavLink to="/heapsort">Heap Sort</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
