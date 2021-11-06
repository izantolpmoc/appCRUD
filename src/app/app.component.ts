import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

//Définir la classe Produit
class Produit{
  nom: string;
  fruit: string;
  description?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  ngOnInit(){
    if(localStorage.getItem('produits')!== null){
    this.produitsBoutique = JSON.parse(localStorage.getItem('produits'));
    }else{
      this.produitsBoutique = [{
        nom: "Epicéa",
        fruit: "Fruit: Cône 🌲",
        description: "Espèce d'arbres résineux de la famille des Pinacées et du genre Picea. Il présente des cônes à port retombant, ce qui le distingue des sapins."
      },
      {
        nom: "Chêne",
        fruit: "Fruit: Gland 🌳",
        description: "Espèces d'arbres et d'arbustes appartenant au genre Quercus, et à certains genres apparentés de la famille des fagacées, notamment Cyclobalanopsis et Lithocarpus."
    
      },
      {
        nom: "Oranger",
        fruit: "Fruit: Orange 🍊",
        description: "Plante d’orangerie, l’oranger n’est cultivé en pleine terre que dans les régions les plus chaudes de France, ailleurs on le cultive en bac pour pouvoir le rentrer en hiver. Son parfum embaume l’air et ses fruits, les oranges sont très appréciés par les gourmands."
    
      },
      {
        nom: "Chataîgner",
        fruit: "Fruit: Chataigne 🌰",
        description:"Le châtaignier commun (Castanea sativa Mill.) est un arbre à feuillage caduc, de la famille des fagacées, qui produit des fruits largement consommés par l'homme : les châtaignes. Lorsqu'il est en nombre sur un territoire délimité, il forme une châtaigneraie."
  
      }]
    }
  }

  title = 'appCRUD';

  disableButton: boolean = false;

  error:string;
  errorLength: string;

  warning: string;

  titreProduit:any;
  fruit:any;
  description: any;

  objetDetail:any;


  // obj: Produit = new Produit();

  produit = {
    nom: "Epicéa",
    fruit: "Cône",
    description: "espèce d'arbres résineux de la famille des Pinacées et du genre Picea. Il présente des cônes à port retombant, ce qui le distingue des sapins."
  };

  //créer un tableau d'objets

  produitsBoutique: Produit[] = [
    {
      nom: "Epicéa",
      fruit: "Fruit: Cône 🌲",
      description: "Espèce d'arbres résineux de la famille des Pinacées et du genre Picea. Il présente des cônes à port retombant, ce qui le distingue des sapins."
    },
    {
      nom: "Chêne",
      fruit: "Fruit: Gland 🌳",
      description: "Espèces d'arbres et d'arbustes appartenant au genre Quercus, et à certains genres apparentés de la famille des fagacées, notamment Cyclobalanopsis et Lithocarpus."
  
    },
    {
      nom: "Oranger",
      fruit: "Fruit: Orange 🍊",
      description: "Plante d’orangerie, l’oranger n’est cultivé en pleine terre que dans les régions les plus chaudes de France, ailleurs on le cultive en bac pour pouvoir le rentrer en hiver. Son parfum embaume l’air et ses fruits, les oranges sont très appréciés par les gourmands."
  
    },
    {
      nom: "Chataîgner",
      fruit: "Fruit: Chataigne 🌰",
      description:"Le châtaignier commun (Castanea sativa Mill.) est un arbre à feuillage caduc, de la famille des fagacées, qui produit des fruits largement consommés par l'homme : les châtaignes. Lorsqu'il est en nombre sur un territoire délimité, il forme une châtaigneraie."

    }
  ]


  detailProduit(i: any){
    //je teste
    console.log(i, 'cliqué');
    //variable locale vers variable globale
    this.objetDetail = i;
    //je teste
    console.log(this.objetDetail, "OBJETDETAIL");
  }

  onAdd(){

    //creer un nouvel objet de type Produit
    let obj= new Produit();
    console.log(obj);

    obj.nom = this.titreProduit;
    obj.fruit= this.fruit;
    obj.description= this.description;
    
    if(obj.nom && obj.fruit && obj.description){
      console.log('existe');
      this.error="";

        if(this.produitsBoutique.length<6){
          this.produitsBoutique.push(obj);
          localStorage.setItem('produits',JSON.stringify(this.produitsBoutique));    
          
        }else{
        this.disableButton=true;
        this.errorLength="Nombre maximal atteint!"
      }
    }else{
      console.log("n'existe pas");
      this.error = 'Veuillez remplir tous les champs';
      
    }

  

    // if(this.titreProduit!=null && this.fruit!=null){
    //   this.produitsBoutique.push(obj);
    // }else{
    //   alert('Veuillez remplir les deux premiers champs.')
    // }
    
    //envoyer la valeur dans le tableau
    //tableau.push(element) ou tableau.unshift() pour le mettre au début
    // this.produitsBoutique.push(obj);
    // console.log(obj);
    
  }
  


  onDelete(objetDetail: any){
    console.log(objetDetail, 'test depuis onDelete');

    //methode indexOf
    //const index = tableau.indexOf(elementAretrouver)
    const index = this.produitsBoutique.indexOf(objetDetail);
    console.log(index);

    //tableau.splice(index, nombreElementsAretirer)
    
    
    //mettre la suppression au moment de la confirmation

    this.produitsBoutique.splice(index,1);
    localStorage.setItem('produits', JSON.stringify(this.produitsBoutique))

    //annuler message erreur et réactiver bouton
    this.errorLength="";
    this.disableButton=false;

  }

  onBlurMethod(){
    this.objetDetail="";
  }

}//NE RIEN ECRIRE APRES CETTE LIGNE
