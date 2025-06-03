const produits = [
    {
        nom: "Smartphone X",
        categorie: "Électronique",
        prix: 699,
        image: "https://cdn.pixabay.com/photo/2014/10/06/11/49/iphone-476236_1280.jpg"
    },
    {
        nom: "Roman Policier",
        categorie: "Livres",
        prix: 14,
        image: "https://cdn.pixabay.com/photo/2017/09/28/15/12/book-2795850_1280.png"
    },
    {
        nom: "T-shirt Coton",
        categorie: "Vêtements",
        prix: 25,
        image: "https://cdn.pixabay.com/photo/2025/05/20/10/57/t-shirt-9611374_1280.jpg"
    },
    {
        nom: "Casque Bluetooth",
        categorie: "Électronique",
        prix: 89,
        image: "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg"
    },
    {
        nom: "Sweat à capuche",
        categorie: "Vêtements",
        prix: 40,
        image: "https://cdn.pixabay.com/photo/2020/05/05/10/23/sweatshirt-5132462_1280.jpg"
    },
    {
        nom: "Essai Historique",
        categorie: "Livres",
        prix: 19,
        image: "https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_1280.png"
    }
];

let categorieActive = `Toutes`;
let termeRecherche = ``;

const divProduits = document.querySelector(`.produits`);
const filterBtn = document.querySelectorAll(`filter-btn`);
const inputRecherche = document.querySelector(`.searchInput`);

function afficherProduits(produits) {
    for (const produit of produits) {

        console.log(produit.nom);
        const produitDiv = document.createElement(`div`);
        produitDiv.classList.add(`produit-item`);

        const produitImage = document.createElement(`img`);
        produitImage.src = produit.image;
        produitImage.alt = produit.nom;
        produitDiv.append(produitImage);

        const produitNom = document.createElement(`h3`);
        produitNom.textContent = produit.nom;
        produitDiv.append(produitNom);

        const produitPrix = document.createElement(`pprix`);
        produitPrix.textContent = `Prix : ${produit.prix}€`;
        produitDiv.append(produitPrix);

        const produitCategorie = document.createElement(`pcategorie`);
        produitCategorie.textContent = `Catégorie : ${produit.categorie}`;
        produitDiv.append(produitCategorie)
        console.log(produit.categorie);


        divProduits.append(produitDiv);
    }
}

afficherProduits(produits);

// filtreBtn.addEventListener(`filter-btn`,()){}