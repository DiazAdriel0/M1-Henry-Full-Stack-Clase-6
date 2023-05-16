function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
 }
 
 /* function Node(value){
    this.value = value;
    this.left = null;
    this.rigth = null;
 } */
 
 BinarySearchTree.prototype.size = function(size){
    size = 0
    let valorActual = this.value
    /* if(!this.value){
       return size;
    } */
    if(valorActual){
       size++
       valorActual = valorActual.left
       if(valorActual){
          size++
          return this.size(size);
       }  
    }else{
       valorActual = valorActual.rigth
       if(valorActual){
          size++
          return this.size(size);
       }  
    }
    return size
    
  /*   function contadorLeft(){
       if(this.left){
          size++
       }
    }
    function contadorRigth(){
       if(this.rigth){
          size++
       }
    }
    while(this.left){
       contadorLeft()
    } */
 }
 
 /* BinarySearchTree.prototype.insert = function(value){
    if(this.value ){
       this.value = new BinarySearchTree(value)
    }
    if(value < this.value){
       if(this.left !== null){
          value = this.left
          return this.insert(value)
       }
       this.left = new BinarySearchTree(value)
    }else if(value >= this.value){
       if(this.rigth !== null){
          value = this.rigth
          return this.insert(value)
       }
       this.rigth = new BinarySearchTree(value)
    }
    this.value = new BinarySearchTree(value)
    return value
 } */

 BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(value)
      }else{
         this.left.insert(value)
      }
   }else if(value >= this.value){
      if(this.rigth === null){
         this.rigth = new BinarySearchTree(value)
      }else{
         this.rigth.insert(value)
      }
   }
   return value
}
 
 let arbol = new BinarySearchTree(50)
 console.log(arbol.insert(45))
 console.log(arbol.insert(55))
 console.log(arbol.insert(65))
 console.log(arbol.insert(40))
 console.log(arbol)
 //console.log(arbol.insert(40))
 //console.log(BinarySearchTree)
 //console.log(arbol.insert(50))
 //console.log(BinarySearchTree)
 //console.log(arbol.insert(40))
 //console.log(arbol.insert(45))
 //console.log(arbol.insert(45))
 //console.log(arbol.insert(45))
 console.log(arbol.size())
 
 
   //let valorActual = this.value
   /* if(!this.value){
      return size;
   } */
  /*  if(this.left !== null){
      if(!this.left){
         this.longitud++
         return this.size();
      }  
   } *//* else{
      valorActual = valorActual.rigth
      if(valorActual){
         this.longitud++
         return this.size();
      }  
   } */
   
   
 /*   function contadorLeft(){
      if(this.left){
         size++
      }
   }
   function contadorRigth(){
      if(this.rigth){
         size++
      }
   }
   while(this.left){
      contadorLeft()
   } */

   /* BinarySearchTree.prototype.size = function(){
   if(this.left !== null){//Si hay algo en left, sumo 1
      this.longitud++
      this.left = this.left.left
      this.size()
   }if(this.rigth !== null){
      this.longitud++
      this.rigth = this.rigth.rigth
      this.size()
   }
   return this.longitud
} */

/* BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(this.left === null){//Cuando llega al ultimo de la izquierda
         this.left = new BinarySearchTree(value) //crea un nodo nuevo
      }else{
         value = this.left
         this.left.insert(value)
      }
   }else if(value >= this.value){
      if(this.rigth === null){
         this.rigth = new BinarySearchTree(value)
      }else{
         value = this.rigth
         this.rigth.insert(value)
      }
   }
   return value
} */


/* if(value >= this.value){//Voy por la derecha
      if(rigthNode === null){
         rigthNode = new BinarySearchTree(value)
         return value
      }else{
         current = rigthNode
         current.insert(value)
      }
   } */
  





   /* if(value < this.value){
      if(this.left === null){//Cuando llega al ultimo de la izquierda
         this.left = new BinarySearchTree(value) //crea un nodo nuevo
      }else{
         value = this.left
         this.left.insert(value)
      }
   }else if(value >= this.value){
      if(this.rigth === null){
         this.rigth = new BinarySearchTree(value)
      }else{
         value = this.rigth
         this.rigth.insert(value)
      }
   } */

   /* BinarySearchTree.prototype.insert = function(value){
   let leftNode = this.left
   let rigthNode = this.rigth
   if(value < this.value){
      if(leftNode === null){
         leftNode = new BinarySearchTree(value)
         return value
      }else{
         leftNode.insert(value)
      }
   }else if(value > this.value){
      if(rigthNode === null){
         rigthNode = new BinarySearchTree(value)
         return value
      }else{
         rigthNode.insert(value)
      }
   }else{
      return value
   }
} */

/* BinarySearchTree.prototype.size = function(){
    let nodoLeft = this.left
    let nodoRight = this.right
    let actual = this.value
    if(nodoLeft){
       this.longitud++
       actual = nodoLeft
    }
    if(nodoRight){
       this.longitud++
    }
       //this.size()
    return this.longitud
 } */