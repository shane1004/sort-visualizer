import sleep from "../sleepFun";


const MergeSortFn = async (setArr, ArrForSorting, time) =>
{

	const merge = async (arr,low , mid , high) => {
		await sleep(time);

        let i = low;
        let j = mid+1;
        let curr = low;

        let arrC = arr.slice();

        while(i<=mid && j<=high)
        {
            if(arr[i].number <= arr[j].number)
            {
                arrC[curr] = arr[i++];
                curr++;
            }
            else
            {
                arrC[curr] = arr[j++];
                curr++;
            }
        }

        while(i<=mid)
        {
            arrC[curr] = arr[i++];
            curr++;
        }

        while(j<=high)
        {
            arrC[curr] = arr[j++];
            curr++;
        }

        let idx = low;

        while(idx<=high)
        {
            arrC[idx].color = "#FEE715FF";
            arr[idx] = arrC[idx];
            idx++;
        }

        return arr;
	};

	const mergeSort = async (arr,low, high) => {
        await sleep(time);

		if (low >= high) {
            await sleep(time);
			return;
		}

		if (low < high) {
			let mid = Math.floor(low + (high-low)/2);

			await mergeSort(arr,low, mid);
			await mergeSort(arr ,mid + 1, high);
            arr = await merge(arr ,low,mid,high);
		}

        setArr([...arr]);
	};

	await mergeSort(ArrForSorting, 0 , ArrForSorting.length - 1);
};

export default MergeSortFn;
