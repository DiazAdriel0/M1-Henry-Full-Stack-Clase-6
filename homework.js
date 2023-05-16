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

BinarySearchTree.prototype.contains = function(value){
   let arr = this.depthFirstForEach()
   if(arr.includes(value)){
      return true
   }else{
      return false
   }
}

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