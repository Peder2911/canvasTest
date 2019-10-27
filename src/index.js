import * as R from "ramda"
//import "style.css"

//const R = require("ramda")

const el = document.createElement("div");
let things = [10,2,3]

el.innerHTML = R.toString(R.map((x) => x * 2, things))

let tgt = document.getElementById("debug")
tgt.appendChild(el)

window.onload = function(){
   const canvas = document.getElementById("maincanvas");
   const context = canvas.getContext("2d");

   const blitRect = function(r){
      console.log(R.toString(r))
      context.fillRect(...r)
   }

   const makeRect = function(i,f1,f2,f3,f4){
      return [f1(i),f2(i),
              f3(i),f4(i)]
   }

   const makeSinRects = function(i){

      let alpha = 200 
      let beta_x = 250 
      let beta_y = 250 
      let gamma = 1
      let delta = 1
      let cos = Math.cos
      let sin = Math.sin

      let posFun = function(x, alpha, beta, gamma, fn){
         return (fn(gamma * x) * alpha) + beta 
      }

      let xfn = R.curry(posFun)(R.__,alpha,beta_x,gamma,cos)
      let yfn = R.curry(posFun)(R.__,alpha,beta_y,delta,sin)
      let wfn = (i) => 10 
      
      return makeRect(i, xfn, yfn, wfn, wfn)
   }

   let rectangles = R.range(1,200); 

   R.map(makeSinRects,rectangles).forEach(blitRect)

}


