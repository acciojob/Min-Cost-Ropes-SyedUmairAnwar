function mincost(arr)
{
	let sum=0;
 function rec(arr){
	 if (arr.length>1){
	 arr=arr.sort();
	 first=arr.shift();
	 second=arr.shift();
	 sum += first+second;
		 arr.push(first+second);
	  rec(arr);
	 }
	console.log(sum);
	 return
 }
}
module.exports=mincost;