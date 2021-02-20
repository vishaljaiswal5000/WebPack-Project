import L4D2_Img from "./../assets/left4dead.png";
function AddImage() {
  const img = document.createElement("img");
  img.src = L4D2_Img;
  img.alt = "L4D2_Img";
  img.width = 500;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default AddImage;
