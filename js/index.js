// ----------------------------------Custom Slider Functions Start----------------------------------//
const slider = document.querySelector(".slider-inner");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current_image = 0;

nextBtn.addEventListener("click", () => {
  if (current_image < slider.children.length - 4) {
    current_image++;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translate(-${current_image * 350}px)`;
  } else {
    current_image = 0;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translate(0px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (current_image == 0) {
    current_image = slider.children.length - 3;
  }
  if (current_image > 0) {
    current_image--;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translate(-${current_image * 350}px)`;
  } else {
    return;
  }
});
// ----------------------------------Custom Slider Functions Ends----------------------------------//

// ----------------------------------Custom Testimonials Functions Starts----------------------------------//
const testimonials = [
  {
    name: "John Smith",
    testimonial:
      "Working with you was an absolute delight! Their keen eye for detail and ability to capture the essence of the moment is truly remarkable. The photos they took exceeded all expectations, and we couldn't be happier with the results. Highly recommend!",
  },
  {
    name: "Emily Johnson",
    testimonial:
      "Choosing you for our special day was one of the best decisions we made. They effortlessly captured every emotion and precious moment, leaving us with timeless memories to cherish forever. Professional, talented, and a joy to work with!",
  },
  {
    name: "Michael Williams",
    testimonial:
      "I've had the pleasure of collaborating with you on multiple projects, and each time, they have delivered exceptional work. Their creativity knows no bounds, and their passion for photography truly shines through in every image. A true artist!",
  },
  {
    name: "Sarah Davis",
    testimonial:
      "From start to finish, you went above and beyond to ensure our photoshoot was a success. They have a knack for making even the most camera-shy individuals feel comfortable, resulting in natural and authentic photos. Couldn't have asked for a better experience!",
  },
];

let index = 0;
function showTestimony() {
  const testimony = document.getElementById("testimony");
  testimony.textContent = testimonials[index].testimonial;
  testimony.style.transitionDuration = "0.5s";
}
showTestimony();

function nextTestimony() {
  if (index < testimonials.length - 1) {
    index++;
  } else {
    index = 0;
  }
  showTestimony();
}

function prevTestimony() {
  if (index > 0) {
    index--;
  } else {
    index = testimonials.length - 1;
  }
  showTestimony();
}

var intervalID = setInterval(nextTestimony, 10000);

document
  .getElementById("test-carousel-control-next")
  .addEventListener("click", () => {
    clearInterval(intervalID);
    nextTestimony();
    setTimeout(intervalID, 2000);
  });

document
  .getElementById("test-carousel-control-prev")
  .addEventListener("click", () => {
    clearInterval(intervalID);
    prevTestimony();
    setTimeout(intervalID, 2000);
  });
// ----------------------------------Custom Testimonials Functions Ends----------------------------------//

//
//
//
//
//
// const pfp = document.querySelector("#pfp");
// const myName = document.querySelector("#name");
// const title = document.querySelector("#title");
// const info = document.querySelector("#info");
// const persons = [];

// class person {
//   constructor(pfp, name, title, info) {
//     this.pfp = pfp;
//     this.name = name;
//     this.title = title;
//     this.info = info;
//   }
// }

// const susan = new person(
//   "susan.jpg",
//   "Susan Smith",
//   "Web Developer",
//   "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
// );
// persons.push(susan);

// const anna = new person(
//   "anna.jpg",
//   "Anna Johnson",
//   "Web Designer",
//   "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
// );
// persons.push(anna);

// const peter = new person(
//   "peter.jpg",
//   "Peter Jones",
//   "Intern",
//   "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
// );
// persons.push(peter);

// const bill = new person(
//   "bill.jpg",
//   "Bill Anderson",
//   "The Boss",
//   "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
// );
// persons.push(bill);

// pfp.setAttribute("src", susan.pfp);
// myName.textContent = susan.name;
// title.textContent = susan.title;
// info.textContent = susan.info;

// let index = 0;

// function displayPerson() {
//   pfp.setAttribute("src", persons[index].pfp);
//   myName.textContent = persons[index].name;
//   title.textContent = persons[index].title;
//   info.textContent = persons[index].info;
// }

// function nextPerson() {
//   index++;
//   if (index == persons.length) {
//     index = index % persons.length;
//   }
//   displayPerson();
// }

// function prevPerson() {
//   if (index !== 0) {
//     index--;
//   } else {
//     index = persons.length - 1;
//   }
//   displayPerson();
// }

// function ranPerson() {
//   index = Math.floor(Math.random() * persons.length);
//   displayPerson();
// }
