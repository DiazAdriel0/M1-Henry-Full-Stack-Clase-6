'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.size = function(){
  return this.depthFirstForEach().length
}

/* //Corregido por Gama
BinarySearchTree.prototype.size = function(){
   //Caso A (2 ramificaciones)
   if(this.right !== null && this.left !== null){
      return 1 + this.left.size() + this.right.size()
   }

   //Caso B (1 ramificacion)
   if(this.right === null && this.left !== null){
      return 1 + this.left.size() //Recursion en la rama que está ocupada
   }
   if(this.right !== null && this.left === null){
      return 1 + this.right.size() //Recursion en la rama que está ocupada
   }

   //Caso C (0 ramificaciones)
   if(this.right === null && this.left === null){
      return 1
   }
} */

BinarySearchTree.prototype.insert = function(value){
   let leftNode = this.left
   let rightNode = this.right
   if(value < this.value){
      if(leftNode != null){
         return leftNode.insert(value)
      }else{
         this.left = new BinarySearchTree(value)
         return value
      }
   }else if(value > this.value){
      if(rightNode !== null){
         return rightNode.insert(value)
      }else{
         this.right = new BinarySearchTree(value)
         return value
      }
   }
}

/* //Corregido por Gama
BinarySearchTree.prototype.insert = function(value){
   //Agregar a la derecha
   if(value >= this.value){
      if(this.right === null){
         this.right = new BinarySearchTree(value);
      }else{//Si no está vacío me paro en el siguiente nodo y ejecuto el metodo insert (recursion)
         this.right.insert(value)
      }
   }

   //Agregar a la izquierda
   if(value < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(value)
      }else{
         this.left.insert(value)
      }
   }
} */

BinarySearchTree.prototype.contains = function(value){
   let arr = this.depthFirstForEach()
   if(arr.includes(value)){
      return true
   }else{
      return false
   }
}

//Corregido por Gama
/* BinarySearchTree.prototype.contains = function(value){
   
   //Si lo encuentro
   if(this.value === value){
      return true
   }

   //Si no lo encuentro y es mayor
   if(value > this.value){
      if(this.right === null){
         return false
      }else{//Vuelvo a ejecutar en la derecha
         return this.right.contains(value)
      }
   }
   
   //Si no lo encuentro y es menor
   if(value < this.value){
      if(this.left === null){
         return false
      }else{//Vuelvo a ejecutar en la rama izquierda
         return this.left.contains(value)
      }
   }
} */

BinarySearchTree.prototype.depthFirstForEach = function(order){
   let arr = []
   function inOrder (root){
      let recorrer = function(node){
         if(node){
            recorrer(node.left)
            arr.push(node.value)
            recorrer(node.right)
         }
      }
      recorrer(root)
   }
   
   function postOrder (root){
      let recorrer = function(node){
         if(node){
            recorrer(node.left)
            recorrer(node.right)
            arr.push(node.value)
         }
      }
      recorrer(root)
   }
   
   function preOrder (root){
      let recorrer = function(node){
         if(node){
            arr.push(node.value)
            recorrer(node.left)
            recorrer(node.right)
         }
      }
      recorrer(root)
   }
   
   if(order === "post-order"){
      postOrder(this)
      return arr
   }else if(order === "pre-order"){
      preOrder(this)
      return arr
   }else{
      inOrder(this)
      return arr
   }
}

/* //Corregido por Gama
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   
   //root -> izq -> der
   if(order === "pre-order"){
      cb(this.value)
      this.left && this.left.depthFirstForEach(cb,order)
      this.right && this.right.depthFirstForEach(cb,order)
   }

   //izq -> der -> root
   if(order === "post-order"){
      this.left && this.left.depthFirstForEach(cb,order)
      this.right && this.right.depthFirstForEach(cb,order)
      cb(this.value)
   }

   //izq -> root -> der
   else{//Si es inorder o cualquier otra cosa por defecto ejecuta inorder
      if(this.left !== null){
         this.left.depthFirstForEach(cb,order)
      }
      cb(this.value)
      if(this.right !== null){
         this.right.depthFirstForEach(cb,order)
      }
   }
} */

BinarySearchTree.prototype.breadthFirstForEach = function(){
   let arr = []
   let queue = []
   let recorrer = function(node){
      if(node){
         arr.push(node.value)
         queue.push(node.left)
         queue.push(node.right)
      }
      for (const element of queue) {
         queue.shift()
         recorrer(element)
      }
   }
   recorrer(this);
   return arr
}

/* //Corregido por Gama
BinarySearchTree.prototype.breadthFirstForEach = function(cb,almacen=[]){
   cb(this.value)
   if(this.left !== null){//Guardo el nodo en mi array (izquierdo primero)
      almacen.push(this.left)
   }
   if(this.right !== null){//Guardo el nodo en mi array (derecho despues)
      almacen.push(this.right)
   }
   if(almacen.length > 0){//Si hay nodos en mi almacen, elimino el primero y ejecuto la recursion en ese primer valor
      almacen.shift().breadthFirstForEach(cb,almacen)
   }
} */


let arbol = new BinarySearchTree(20)
console.log(arbol)
console.log(arbol.insert(15))
console.log(arbol.insert(25))
console.log(arbol.insert(5))
console.log(arbol.insert(17))
console.log(arbol.insert(14))
console.log(arbol.insert(28))
console.log(arbol.insert(0))
console.log(arbol.insert(1))
console.log(arbol.insert(13))
console.log(arbol.insert(12))
console.log(arbol.insert(11))
console.log(arbol.insert(21))
console.log(arbol.insert(50))
console.log(arbol.insert(45))
console.log(arbol.insert(30))
console.log(arbol.insert(35))
console.log(arbol.insert(33))
console.log(arbol.insert(31))
console.log(arbol.insert(34))
console.log(arbol)
console.log(arbol.size())
console.log(arbol.depthFirstForEach("post-order"))
console.log(arbol.depthFirstForEach("pre-order"))
console.log(arbol.depthFirstForEach("in-order"))
console.log(arbol.breadthFirstForEach())
console.log(arbol.contains(5))
console.log(arbol.depthFirstForEach(213897))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};