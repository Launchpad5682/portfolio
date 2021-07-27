const projectsList = [
  {
    name: "fun-with-triangles",
    repo_url: "https://github.com/Launchpad5682/fun-with-triangles",
    live_url: "https://fun-with-triangles-launchpad5682.netlify.app/",
  },
  {
    name: "profit-loss-stocks",
    repo_url: "https://github.com/Launchpad5682/profit-loss-stocks",
    live_url: "https://profit-loss-stocks.netlify.app/",
  },
  {
    name: "Birthday Palindrome",
    repo_url: "https://github.com/Launchpad5682/birthday-palindrome",
    live_url: "",
  },
  {
    name: "Birthday Lucky",
    repo_url: "https://github.com/Launchpad5682/birthday-lucky",
    live_url: "",
  },
  {
    name: "Cash Register",
    repo_url: "https://github.com/Launchpad5682/cash-register",
    live_url: "https://cash-register-launchpad5682.netlify.app/",
  },
  {
    name: "Good Reads",
    repo_url: "https://github.com/Launchpad5682/good-reads",
    live_url: "https://good-books-launchpad5682.netlify.app/",
  },
  {
    name: "Know Your Emotions",
    repo_url: "https://github.com/Launchpad5682/know-your-emotions",
    live_url: "https://know-your-emotions.netlify.app/",
  },
  {
    name: "Minion Speak",
    repo_url: "https://github.com/Launchpad5682/minion-speak",
    live_url: "https://minion-speech-translation.netlify.app/",
  },
];

/*
{
  name: "",
  repo_url: "",
  live_url: "",
} 
*/

let blogSection = document.getElementById("blog-section");

projectsList.map((blog) => {
  let divContainer = document.createElement("div");
  let heading = document.createElement("h3");
  let dateHeading = document.createElement("h6");
  let btn = document.createElement("button");
  let btn2 = document.createElement("button");
  // let desPara = document.createElement("p");
  heading.innerHTML = blog.name;
  // dateHeading.innerHTML = blog.date;
  // desPara.innerHTML = blog.description;
  btn.innerHTML = "Live Demo";
  btn2.innerHTML = "Github Repo";
  btn.setAttribute("value", blog.live_url);
  btn.setAttribute("class", "read-more-btn");
  btn2.setAttribute("value", blog.repo_url);
  btn2.setAttribute("class", "read-more-btn");

  divContainer.appendChild(heading);
  // divContainer.appendChild(dateHeading);
  // divContainer.appendChild(desPara);
  divContainer.appendChild(btn);
  divContainer.appendChild(btn2);
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
