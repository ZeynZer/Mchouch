function rediriger(matiere) {
  if (matiere === 'informatique') {
    window.location.href = 'informatique.html';
  } else {
    if (matiere === "flashcard") {
      window.location.href = 'flashcard.html';
    }
    else {
      alert("L'onglet "+ matiere + " n'est pas encore disponible : Demande à Mohamed si tu as un problème...");
      }
      // plus tard : window.location.href = matiere + '.html';
  }
}
