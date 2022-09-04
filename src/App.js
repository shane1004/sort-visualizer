import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
//Components
import NavBar from "./pages/components/NavBar";
//Pages
import HomePage from "./pages/Home";
import BubbleSortPage from "./pages/BubbleSort";
import QuickSortPage from "./pages/QuickSort";
import MergeSortPage from "./pages/MergeSort";
import SelectionSort from "./pages/SelectionSort";
import InsertionSort from "./pages/InsertionSort";
import HeapSort from "./pages/HeapSort";
import { SnackbarProvider } from "notistack";

function App() {
	return (
		<SnackbarProvider>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/bubblesort" exact component={BubbleSortPage} />
					<Route path="/quicksort" exact component={QuickSortPage} />
					<Route path="/mergesort" exact component={MergeSortPage} />
					<Route path="/selectionsort" exact component={SelectionSort} />
					<Route path="/insertionsort" exact component={InsertionSort} />
					<Route path="/heapsort" exact component={HeapSort} />
				</Switch>
			</div>
		</SnackbarProvider>
	);
}

export default App;
