import sleep from "./../sleepFun";

const quickFn = async (setArr, ArrForSorting, time) => {

	const swap = async (arr, a, b) => {
		await sleep(time);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[a].color = "#FEE715FF";
		arr[b] = temp;
		arr[b].color = "#FEE715FF";

		return arr;
	};

	let partition = async (arr, lowerBound, upperBound) => {

		await sleep(time);
		
		let i = lowerBound-1;
		let pivot = arr[upperBound].number;
		arr[upperBound].color = "#1256f4";
		

		for (let j = lowerBound; j < upperBound; j++) {
			if (arr[j].number < pivot) {
				i++;
				arr = await swap(arr, i, j);
			}
			arr[j].color = "#FEE715FF";			
			setArr([...arr]);
		}

		// Swapping Arr[pivotIdx] and Arr[lowerBound]
		
		await sleep(time);

		arr = await swap(arr, i+1, upperBound);

		for(let j = lowerBound ; j<=upperBound ; j++)
		{
			arr[j].color = "#f4124b";
		}

		setArr([...arr]);

		return (i+1);
	};

	let quickSort = async (arr, low, high) => {
		if (arr.length === 0) {
			return;
		}

		await sleep(time);

		setArr([...arr]);

		if (low < high) {
			let index = await partition(arr, low, high);

			await quickSort(arr, low, index - 1);
			await quickSort(arr, index + 1, high);
		}
	};

	await quickSort(ArrForSorting, 0, ArrForSorting.length - 1);
};

export default quickFn;
