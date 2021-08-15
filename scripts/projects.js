const projectsList = [
  {
    name: "Do you know me ?",
    repo_url: "https://github.com/Launchpad5682/Do-you-know-me-CLI-nodejs",
    live_url: "https://replit.com/@Launchpad5682/Do-you-know-me#index.js",
    description:
      "A simple CLI based quiz app to check how much you know about me?",
  },
  {
    name: "Marvel Quiz App",
    repo_url: "https://github.com/Launchpad5682/marvel-quiz-app-nodejs",
    live_url: "https://replit.com/@Launchpad5682/Marvel-Quiz-App#index.js",
    description: "A simple CLI based quiz app on Marvel",
  },
  {
    name: "Minion Speak",
    repo_url: "https://github.com/Launchpad5682/minion-speak",
    live_url: "https://minion-speech-translation.netlify.app/",
    description:
      "What language do Minions talk? Let's get in and translate the language and understand it.",
  },
  {
    name: "Ferb Latin Translator",
    repo_url: "https://github.com/Launchpad5682/ferb-latin-translator",
    live_url: "https://ferb-latin-translator-launchpad5682.netlify.app/",
    description:
      "What language do Phinese and Ferb talk? Let's get in and translate the language and understand it.",
  },
  {
    name: "Know Your Emotions",
    repo_url: "https://github.com/Launchpad5682/know-your-emotions",
    live_url: "https://know-your-emotions.netlify.app/",
    description: "Enter the emoji and know the emotion of the emoji",
  },
  {
    name: "Good Reads",
    repo_url: "https://github.com/Launchpad5682/good-reads",
    live_url: "https://good-books-launchpad5682.netlify.app/",
    description: "A simple application which only recommends pre-saved books.",
  },
  {
    name: "Cash Register",
    repo_url: "https://github.com/Launchpad5682/cash-register",
    live_url: "https://cash-register-launchpad5682.netlify.app/",
    description:
      "Cash Register is an application to calculate the change with the denomination of 1, 5, 10, 20, 50, 100, 500,and 2000.",
  },
  {
    name: "Birthday Lucky",
    repo_url: "https://github.com/Launchpad5682/birthday-lucky",
    live_url: "https://birthday-lucky-launchpad5682.netlify.app/",
    description:
      "A simple application to check whether the birth date is lucky or not by using the lucky number to divide it from birth date and if it's divisible then the birth date is lucky.",
  },
  {
    name: "fun-with-triangles",
    repo_url: "https://github.com/Launchpad5682/fun-with-triangles",
    live_url: "https://fun-with-triangles-launchpad5682.netlify.app/",
    description:
      "This is simple fun project on properties of triangle, including quiz on triangles.",
  },
  {
    name: "Birthday Palindrome",
    repo_url: "https://github.com/Launchpad5682/birthday-palindrome",
    live_url: "https://birthday-palindrome-launchpad5682.netlify.app/",
    description:
      "A simple application to check whether your birthday is palindrome or not.",
  },
  {
    name: "profit-loss-stocks",
    repo_url: "https://github.com/Launchpad5682/profit-loss-stocks",
    live_url: "https://profit-loss-stocks.netlify.app/",
    description:
      "A simple application to calculate profit and loss of Stock Prizes.",
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
  let desPara = document.createElement("p");
  heading.innerHTML = blog.name;
  // dateHeading.innerHTML = blog.date;
  desPara.innerHTML = blog.description;
  btn.innerHTML = "Live Demo";
  btn2.innerHTML = "Github Repo";
  btn.setAttribute("value", blog.live_url);
  btn.setAttribute("class", "read-more-btn");
  btn2.setAttribute("value", blog.repo_url);
  btn2.setAttribute("class", "repo-btn");

  divContainer.appendChild(heading);
  // divContainer.appendChild(dateHeading);
  divContainer.appendChild(desPara);
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
