

 var arr = [
	 {
		 dp:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1682095672918-234595db1df8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww" },
	 {
		 dp:"https://images.unsplash.com/photo-1471194494705-149b8e5f9a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"},
	 {
		 dp:"https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1661881970542-8447015772e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D"},
	 {
		 dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
	 {
		 dp:"https://images.unsplash.com/photo-1647530381341-462d0169bea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGppbW15JTIwY2FydGVyfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1735571504679-1c108d1f7adb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amltbXklMjBjYXJ0ZXJ8ZW58MHx8MHx8fDA%3D"},
 ]


var storyians= document.querySelector("#storyians")
var clutter =""
arr.forEach(function(elem,idx){
	clutter +=`<div class = "story"> 
		<img id ="${idx}" src = "${elem.dp}" alt = ""> </div>`
	
})

storyians.innerHTML = clutter
storyians.addEventListener("click",function(dets){
	document.querySelector("#full-screen").style.display ="block"	
	document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
	
	setTimeout(function(){
	document.querySelector("#full-screen").style.display ="none"	
		
	},2000)
});

















