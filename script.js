
// Run this FIRST!
var previousImages = {}
var imageList = []
var i = setInterval(()=>{
	const canvasList = [...document.getElementsByTagName("canvas")]
	canvasList.forEach(canvasElement => {
		const url = canvasElement.toDataURL()
		if(!previousImages[url]){
			previousImages[url] = true
			imageList.push(url)
		}
	})
},0)


// Run this only after you have gathered all the pages you want to dl into the imageList
var title = document.querySelector("#docs-title-input-label-inner").textContent
imageList.forEach((image,i)=>{
    var link = document.createElement('a');
    link.href = imageList[i];
    link.download = `${title}_${i}.png`;
	setTimeout(()=>link.click(),i*1000)
})
