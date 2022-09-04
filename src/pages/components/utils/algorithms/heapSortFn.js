import sleep from "./../sleepFun";

const heapSortFn = async (setArr, ArrForSorting, time) => {

	const swap = async (arr, a, b) => {
		await sleep(time);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[a].color = "#FEE715FF";
		arr[b] = temp;
		arr[b].color = "#FEE715FF";

		return arr;
	};

	let heapify = async (arr, n , i) => {
        //await sleep(time);
		let largest = i;

		let left = 2*i + 1;
        let right = 2*i + 2;
        
        if(left<n && arr[left].number > arr[largest].number)
        {
            largest = left;
        }

        if(right<n && arr[right].number > arr[largest].number)
        {
            largest = right;
        }

        if(largest!==i)
        {
            arr = await swap(arr,i,largest);
            setArr([...arr]);

            arr[i].color = "#f4124b";
            arr[largest].color = "#f4124b";
            arr = await heapify(arr,n,largest);
        }

		return arr;
	};

	let heapSort = async (arr, n) => {
		
        //Building max heap
        for(let i = Math.floor(n/2) - 1 ; i>=0 ; i--)
        {
            arr = await heapify(arr,n,i);
        }

        //Heap Sort
		for(let i = n-1 ; i>=0 ; i--)
        {
            arr = await swap(arr,0,i);

            arr[i].color = "#23ff00";
            setArr([...arr]);

            arr[0].color = "#f4124b";
            //Heapifying root element to get highest element at root again

            arr = await heapify(arr, i , 0);
        }
	};

	await heapSort(ArrForSorting, ArrForSorting.length);
};

export default heapSortFn;
