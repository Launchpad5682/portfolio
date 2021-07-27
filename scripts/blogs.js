const blogList = [
  {
    name: "Video Chat using OpenCV and Socket",
    url: "https://link.medium.com/iZEMSuubeib ",
    date: "7 Jul, 2021",
    description:
      "This blog gives the basic introduction and how to create a simple Only Video Chat App using Sockets and OpenCV.",
  },
  {
    name: "Playing with Images using OpenCV",
    url: "https://link.medium.com/rOukQrzbeib",
    date: "4 Jun, 2021",
    description:
      "This blogs gives an introduction to manipulate images using OpenCV.",
  },
];

let blogSection = document.getElementById("blog-section");

blogList.map((blog) => {
  let divContainer = document.createElement("div");
  let heading = document.createElement("h3");
  let dateHeading = document.createElement("h6");
  let btn = document.createElement("button");
  let desPara = document.createElement("p");
  heading.innerHTML = blog.name;
  dateHeading.innerHTML = blog.date;
  desPara.innerHTML = blog.description;
  btn.innerHTML = "Read More";
  btn.setAttribute("value", blog.url);
  btn.setAttribute("class", "read-more-btn");

  divContainer.appendChild(heading);
  divContainer.appendChild(dateHeading);
  divContainer.appendChild(desPara);
  divContainer.appendChild(btn);
  blogSection.appendChild(divContainer);
});

let btns = document.getElementsByClassName("read-more-btn");

for (let i = 0; i < btns.length; i++) {
  console.log(btns[i]);
  btns[i].addEventListener("click", (event) => {
    // console.log(event.target.value);

    // open in the new tab
    window.open(event.target.value);
  });
}
