import React from "react";
import Card from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";
import bubbleSortImg from "../images/AlgoPics/bubble-sort-algo.jpg";
import selectionSortImg from "../images/AlgoPics/selection-sort-algo.jpg";
import insertionSortImg from "../images/AlgoPics/insertion-sort-algo.jpg";
import heapSortImg from "../images/AlgoPics/heap-sort-algo.jpg";
import mergeSortImg from "../images/AlgoPics/merge-sort-algo.jpg";
import quickSortImg from "../images/AlgoPics/quick-sort-algo.jpg";
import { Link } from "react-router-dom";

const Style = makeStyles({
	MainDiv: {
		background: "#FFFFFF",
		height: "100vh",
		width: "100%",
	},

	cards: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});

function Home() {
	const classes = Style();
	const { MainDiv, cards } = classes;
	const numOfCard = [
		[
			{
				title: "Selection Sort",
				imgSrc: selectionSortImg,
				url: "/selectionsort",
				desc:
					"The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning. It has a time complexity of O(n^2)",
			},
			{
				title: "Insertion Sort",
				imgSrc: insertionSortImg,
				url: "/insertionsort",
				desc:
					"Insertion sort algorithm sorts values by picking them up from the unsorted part and placing them at the correct position in the sorted part. It has a time complexity of O(n^2)",
			},
			{
				title: "Bubble Sort",
				imgSrc: bubbleSortImg,
				url: "/bubblesort",
				desc:
					"Bubble Sort is the simplest sorting algorithm . It compares two adjacent elements and swaps them if not in order. It has a time complexity of O(n^2)",
			},
		],
		[
			{
				title: "Quick Sort",
				imgSrc: quickSortImg,
				url: "/quicksort",
				desc:
					"QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. It has a time complexity of O(nlogn)",
			},
			{
				title: "Merge Sort",
				imgSrc: mergeSortImg,
				url: "/mergesort",
				desc:
					"Merge Sort algorithm is a divide and conquer algorithm where array is divided into two equal halves and then combined in a sorted manner. It has time complexity of O(nlogn)"
			},
			{
				title: "Heap Sort",
				imgSrc: heapSortImg,
				url: "/heapsort",
				desc:
					"Heap sort is based on Binary Heap data structure. The min. element is found and placed at the beginning then the process is repeated for remaining elements. It has a time complexity of O(nlogn)",
			},
		],
	];

	return (
		<div className={MainDiv}>

			{numOfCard.map((e, i) => (
				<div key={`cards-${i}`} className={cards}>
					{e.map((e1, j) => (
						<Link key={`link-${i}-${j}`} to={e1.url}>
							<Card
								key={`card-${i}-${j}`}
								img={e1.imgSrc}
								title={e1.title}
								author="abc"
								description={e1.desc}
							/>
						</Link>
					))}
				</div>
			))}
		</div>
	);
}

export default Home;
