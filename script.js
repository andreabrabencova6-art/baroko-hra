const outfitCards = document.querySelectorAll(".outfit-card");

outfitCards.forEach(function(card) {

  card.addEventListener("click", function() {

    const outfit = card.dataset.outfit;
    const image = card.dataset.image;

    localStorage.setItem("postava", "muz");
    localStorage.setItem("obleceni", outfit);
    localStorage.setItem("obleceniObrazek", image);

  });
const monarchyMessageText =
  document.getElementById(
    "monarchyMessageText"
  );

const nextToRulers =
  document.getElementById(
    "nextToRulers"
  );
});

