function mincost(arr)
{
	let sum=0;
 function rec(arr){
	 if (arr.length>1){
	 arr=arr.sort();
	let  first=arr.shift();
	let  second=arr.shift();
	 sum += first+second;
		 arr.push(first+second);
	  rec(arr);
	 }
	console.log(sum);
	 return
 }
	rec(arr);
}
module.exports=mincost;