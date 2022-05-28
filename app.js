// navbar

const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
  console.log("hello");
});

// loader

const loaderContainer = document.querySelector(".loader-container");
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

window.addEventListener("DOMContentLoaded", function () {
  loader.classList.add("hide");
  loaderContainer.classList.add("hide");
  content.classList.remove("hide");
});

// social icons
const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach(function (socialIcon) {
  socialIcon.target = "_blank";
});

// guest speakers

guestSpeakers = [
  {
    guestSpeaker: "Nita Kaushal",
    img: "./images/guest-speaker-1.jpg",
    paragraphOne:
      "Nita Kaushal, who graduated from Stanford with a major in mechanical engineering, talked about her company, MIss CEO. She started off by introducing her company as a program that provides education and career centered opportunities. Throughout the talk she talked about many necessary skills that would aid us in finding these opportunities and eventually acquiring them as well. Her main points were to research companies before sending an email and/or attending an interview, use personalized notes when contacting someone to make it more memorable, prepare for the “why us?” question, and finally have thoughtful questions to ask the interviewer at the end of the interview. However, the point in which I remembered the most was when we don’t know an answer to a question, it's okay to say, “I don’t know”. I will definitely make sure to use this whenever I don’t know the answer to a question asked if I don’t have a single idea on how to answer it.",
    paragraphTwo:
      "The ideas I took away from this guest speaker talk was how to find the internship or job opportunities, and when you find them just how to go about acquiring them, It’s important to have background knowledge on the company to show that you are unique, ask thoughtful questions, and it is also important to keep in mind that interviewers are searching for that thirst for knowledge not the knowledge already known. If I ever fail to acquire an internship it is important to be persistent and use this failure as a learning experience. This point is something I need to always keep in mind since it will show me that failure is okay and not to treat it as the end of the road, but instead a new beginning.",
  },
  {
    guestSpeaker: "Kathleen Morse",
    img: "./images/guest-speaker-2.jpg",
    paragraphOne:
      "Katherine Morse, who has various degrees from both Stanford and MIT, talked about her company, Yosemite Space. The main goal of her company is to reevaluate processors and sensors generally used in smart phones for use in space. This was what the majority of the talk was about, going into more detail about this specific topic. Some of the main points that I took away and found interesting was that one single heavy ion can cause a device to fail, in space there is a variety of different radiation (Ex: single-event), and specifically single event radiation can cause short circuits and lead to many different problems.",
    paragraphTwo:
      "I found this talk very insightful and informing. It sparked an interest that I didn’t know I had. Before this talk, all I was really interested in was Computer Science, but after seeing this talk it showed me the projects other fields of engineering performs. During the presentation, I thought it would be really fun and cool to put something I made into space that was both beneficial to research and that provides progression in understanding the vast world of space. This talk has really taught me to not be stubborn and stick to one thing, but instead use the time in highschool to explore different fields to really see what interests me the most.",
  },
  {
    guestSpeaker: "Erika Bergman",
    img: "./images/guest-speaker-3.jpg",
    paragraphOne:
      "Erika Bergman, who is a submersible pilot that went to the University of Washington, talked about her job and the different adventures she goes on. She talked about how she and her other colleagues pilot a submersible to research different things in the ocean. One of the experiments she did was she shined different colored lights in the ocean to see what fish it would attract. In her presentation she also clarified the difference between a submersible and a submarine. A submarine doesn’t need to go back to recharge everyday while a submersible goes to a mother ship to recharge at the end of every day. After she showed some videos about driving the submersible, she talked about the cost of it. She told us that it costed 1.4 million dollars to build the submersible which really amazed me because I thought the cost would be around $500,000. ",
    paragraphTwo:
      "This talk gave me more knowledge about how working in the ocean is like. I thought working in the ocean was very boring and people would just have to sit there for hours on hours on end. However, through the variety of videos that was shown to me during this presentation my opinion has changed. I’ve learned that ocean work can be fun through the different activities such as driving the submersible, shining different lights through the window, and even encountering dead whales. This talk showed me that marine engineering and other ocean engineering jobs are something that is worth exploring.",
  },
];

fieldTrips = [
  {
    guestSpeaker: "Erika Bergman",
    img: "./images/guest-speaker-3.jpg",
    paragraphOne:
      "Erika Bergman, who is a submersible pilot that went to the University of Washington, talked about her job and the different adventures she goes on. She talked about how she and her other colleagues pilot a submersible to research different things in the ocean. One of the experiments she did was she shined different colored lights in the ocean to see what fish it would attract. In her presentation she also clarified the difference between a submersible and a submarine. A submarine doesn’t need to go back to recharge everyday while a submersible goes to a mother ship to recharge at the end of every day. After she showed some videos about driving the submersible, she talked about the cost of it. She told us that it costed 1.4 million dollars to build the submersible which really amazed me because I thought the cost would be around $500,000. ",
    paragraphTwo:
      "This talk gave me more knowledge about how working in the ocean is like. I thought working in the ocean was very boring and people would just have to sit there for hours on hours on end. However, through the variety of videos that was shown to me during this presentation my opinion has changed. I’ve learned that ocean work can be fun through the different activities such as driving the submersible, shining different lights through the window, and even encountering dead whales. This talk showed me that marine engineering and other ocean engineering jobs are something that is worth exploring.",
  },
  {
    guestSpeaker: "Kathleen Morse",
    img: "./images/guest-speaker-2.jpg",
    paragraphOne:
      "Katherine Morse, who has various degrees from both Stanford and MIT, talked about her company, Yosemite Space. The main goal of her company is to reevaluate processors and sensors generally used in smart phones for use in space. This was what the majority of the talk was about, going into more detail about this specific topic. Some of the main points that I took away and found interesting was that one single heavy ion can cause a device to fail, in space there is a variety of different radiation (Ex: single-event), and specifically single event radiation can cause short circuits and lead to many different problems.",
    paragraphTwo:
      "I found this talk very insightful and informing. It sparked an interest that I didn’t know I had. Before this talk, all I was really interested in was Computer Science, but after seeing this talk it showed me the projects other fields of engineering performs. During the presentation, I thought it would be really fun and cool to put something I made into space that was both beneficial to research and that provides progression in understanding the vast world of space. This talk has really taught me to not be stubborn and stick to one thing, but instead use the time in highschool to explore different fields to really see what interests me the most.",
  },
];

const guestSpeakersCenter = document.querySelector(".guest-speakers-center");

const fieldTripsCenter = document.querySelector(".field-trips-center");

let smallChange = true;
let bigChange = true;

function displaySpeaker(speaker) {
  return `<article class="career-item">
            <div class="career-item-img">
              <img
                src="${speaker.img}"
                alt=""
                class="career-item-picture"
              />
            </div>
            <div class="career-item-info">
              <h2 class="section-title career-item-title">${speaker.guestSpeaker}</h2>
              <p class="career-item-text">
                ${speaker.paragraphOne}
              </p>
              <p class="career-item-text">
                ${speaker.paragraphTwo}
              </p>
            </div>
          </article>`;
}

function displaySpeakerAlternate(careerItem) {
  return `<article class="career-item">
            <div class="career-item-info">
              <h2 class="section-title career-item-title">${careerItem.guestSpeaker}</h2>
              <p class="career-item-text">
                ${careerItem.paragraphOne}
              </p>
              <p class="career-item-text">
                ${careerItem.paragraphTwo}
              </p>
            </div>
            <div class="career-item-img">
              <img
                src="${careerItem.img}"
                alt=""
                class="career-item-picture"
              />
            </div>
          </article>`;
}

function displayBigScreen(arrayName, sectionName) {
  careerNum = 0;
  let displayItems = arrayName.map(function (careerItem) {
    careerNum += 1;
    if (careerNum % 2 != 0) {
      return displaySpeaker(careerItem);
    }
    return displaySpeakerAlternate(careerItem);
  });
  displayItems = displayItems.join("");
  sectionName.innerHTML = displayItems;
}

function displaySmallScreen(arrayName, sectionName) {
  let displayItems = arrayName.map(function (careerItem) {
    return displaySpeaker(careerItem);
  });
  displayItems = displayItems.join("");
  sectionName.innerHTML = displayItems;
}

if ((window.innerWidth >= 992) & bigChange) {
  bigChange = false;
  smallChange = true;
  displayBigScreen(guestSpeakers, guestSpeakersCenter);
  displayBigScreen(fieldTrips, fieldTripsCenter);
} else if ((window.innerWidth < 992) & smallChange) {
  bigChange = true;
  smallChange = false;
  displaySmallScreen(guestSpeakers, guestSpeakersCenter);
  displaySmallScreen(fieldTrips, fieldTripsCenter);
}

window.addEventListener("resize", function () {
  if ((window.innerWidth >= 992) & bigChange) {
    careerNum = 0;
    bigChange = false;
    smallChange = true;
    let displaySpeakers = guestSpeakers.map(function (speaker) {
      careerrNum += 1;
      if (careerNum % 2 != 0) {
        return displaySpeaker(speaker);
      }
      return displaySpeakerAlternate(speaker);
    });
    displaySpeakers = displaySpeakers.join("");
    guestSpeakersCenter.innerHTML = displaySpeakers;
  } else if ((window.innerWidth < 992) & smallChange) {
    bigChange = true;
    smallChange = false;
    let displaySpeakers = guestSpeakers.map(function (speaker) {
      return displaySpeaker(speaker);
    });
    displaySpeakers = displaySpeakers.join("");
    guestSpeakersCenter.innerHTML = displaySpeakers;
  }
});
