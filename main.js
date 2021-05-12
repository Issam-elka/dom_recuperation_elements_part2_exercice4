// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
let exo1 = document.getElementsByClassName('redPurple');
console.log(exo1);

// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence

let exo2 = document.querySelectorAll('.redPurple');
console.log(exo2);

// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"

let exo3 = document.querySelectorAll('h1.redPurple');
console.log(exo3);
// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span

let exo4 = document.querySelectorAll('li, p , span');
console.log(exo4
    );
// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 

let exo5 = document.querySelectorAll('li.important, p');
console.log(exo5);

// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

let exo6 = document.querySelectorAll('h1.redPurple,span.redPurple');
console.log(exo6);