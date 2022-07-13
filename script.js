window.addEventListener("load", (e) => {
  window.screenY = 0;
});

const name_prof = ["Ashutosh Rai", "Web Developer", "Social Media Manager"];
let split_pos = 0;
let np_pos = 0;
function present() {
  if (np_pos === name_prof[split_pos].length + 1) {
    np_pos = 0;
    split_pos++;
  }
  if (split_pos === 3) {
    split_pos = 0;
  }
  document.getElementsByClassName("about_detail_heading_span")[0].innerText =
    name_prof[split_pos].slice(0, np_pos);
  np_pos++;
}
setInterval(present, 200);

let scrollT = 0;
document.getElementsByClassName("skill")[0].addEventListener("wheel", (e) => {
  if (scrollT === 10) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[0].style.visibility = "visible";
  }
  if (scrollT === 20) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[1].style.visibility = "visible";
  }
  if (scrollT === 30) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[2].style.visibility = "visible";
  }
  if (scrollT === 40) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[3].style.visibility = "visible";
  }
  if (scrollT === 50) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[4].style.visibility = "visible";
  }
  if (scrollT === 60) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[5].style.visibility = "visible";
  }
  if (scrollT === 70) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[6].style.visibility = "visible";
  }
  if (scrollT === 80) {
    document.getElementsByClassName(
      "conatiner_skill_part1"
    )[7].style.visibility = "visible";
  }
  if (scrollT === 90) {
    document.getElementsByClassName("section2")[0].style.display = "block";
  }
  scrollT++;
});

document
  .getElementsByClassName("skill")[0]
  .addEventListener("touchmove", (e) => {
    if (scrollT === 5) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[0].style.visibility = "visible";
    }
    if (scrollT === 10) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[1].style.visibility = "visible";
    }
    if (scrollT === 15) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[2].style.visibility = "visible";
    }
    if (scrollT === 20) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[3].style.visibility = "visible";
    }
    if (scrollT === 25) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[4].style.visibility = "visible";
    }
    if (scrollT === 30) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[5].style.visibility = "visible";
    }
    if (scrollT === 35) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[6].style.visibility = "visible";
    }
    if (scrollT === 40) {
      document.getElementsByClassName(
        "conatiner_skill_part1"
      )[7].style.visibility = "visible";
    }
    if (scrollT === 45) {
      document.getElementsByClassName("section2")[0].style.display = "block";
    }
    scrollT++;
  });

let scrollI = 0;
const skillGBC = document
  .getElementsByClassName("skill")[0]
  .getBoundingClientRect().top;
document.addEventListener("scroll", () => {
  const docHei = document
    .getElementsByClassName("skill")[0]
    .getBoundingClientRect().top;
  document.getElementsByClassName("name_first")[0].style.left = `${
    docHei - skillGBC
  }px`;
  document.getElementsByClassName("name_dash")[0].style.right = `${
    docHei - skillGBC
  }px`;
  // console.log(docHei-skillGBC)
});

window.addEventListener("scroll", (e) => {
  //   console.log(e);
});

window.addEventListener("scroll", () => {
  const docHei = document
    .getElementsByClassName("section2")[0]
    .getBoundingClientRect().bottom;
  if (docHei > 0) {
    // document.getElementsByClassName("navBar")[0].style.display = "flex";
    document.getElementsByClassName("navBar")[0].classList.add("navBar_active");
  }
  const docHeitop = document
    .getElementsByClassName("section2")[0]
    .getBoundingClientRect().top;
  //   console.log(docHeitop);
  //   console.log(window.innerHeight);
  if (docHeitop > 800) {
    // document.getElementsByClassName("navBar")[0].style.display = "none";
    document
      .getElementsByClassName("navBar")[0]
      .classList.remove("navBar_active");
  }
});
