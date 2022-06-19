const epicMix = [
  "Cactus Tree",
  "Californication",
  "Doll Parts",
  "Under The Bridge",
  "My Moon My Man",
  "Wade In The Water",
  "YaYaYa",
  "Jolene",
  "Road Head",
  "Sound of Violence",
  "La Vie En Rose",
  "Green Arrow"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} of my favorite songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}.`;
    mixList.append(li);
  });
};
