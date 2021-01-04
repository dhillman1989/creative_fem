const controlLeft = document.querySelector("#control-left");
const controlRight = document.querySelector("#control-right");
const slideshowTitle = document.querySelector("#slideshow-title");
const slideshowImage = document.querySelector("#slideshow-img");
const noteTitle = document.querySelector("#note-title");
const noteYear = document.querySelector("#note-year");

console.log("connected");

let slide = 0;
const slidesData = [
    {slideTitle: "Brand naming & guidelines", images: "<source srcset='/assets/mobile/image-slide-1.jpg' media='(max-width: 700px)'><source srcset='/assets/tablet/image-slide-1.jpg' media='(max-width: 1100px)'><img class='image' src='/assets/desktop/image-slide-1.jpg'>", noteTitle: "Lean Product Roadmap", noteYear: "2019 Project"},
    {slideTitle: "Brand identity & merchandise", images: "<source srcset='/assets/mobile/image-slide-2.jpg' media='(max-width: 700px)'><source srcset='/assets/tablet/image-slide-2.jpg' media='(max-width: 1100px)'><img class='image' src='/assets/desktop/image-slide-2.jpg'>", noteTitle: "New Majestic Hotel", noteYear: "2018 Project"},
    {slideTitle: "Brand identity & web design", images: "<source srcset='/assets/mobile/image-slide-3.jpg' media='(max-width: 700px)'><source srcset='/assets/tablet/image-slide-3.jpg' media='(max-width: 1100px)'><img class='image' src='/assets/desktop/image-slide-3.jpg'>", noteTitle: "Crypto Dashboard", noteYear: "2016 Project"}
];

const changeSlide = ()=>{
    slideshowTitle.innerText = slidesData[slide].slideTitle;
    slideshowImage.innerHTML = slidesData[slide].images;
    noteTitle.innerText = slidesData[slide].noteTitle;
    noteYear.innerText = slidesData[slide].noteYear;
}

controlLeft.addEventListener("click", ()=> {if (slide > 0){
        slide -=1; console.log(slide);
    } else {
        slide = slidesData.length-1;
    }
    changeSlide();
});
controlRight.addEventListener("click", ()=> {if (slide < slidesData.length-1){
        slide +=1;
    } else {
        slide = 0;
    }
    changeSlide();
});



