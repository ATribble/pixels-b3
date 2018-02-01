var img;
var lastPixel = pixels.length - 1;
function preload(){
 img = loadImage("brunoMars.jpg");
}

function setup(){
    createCanvas(img.width,img.height);
    background(0);
}

function draw(){
 image(img,0,0);
 loadPixels();
 
 for(var row = 0; row < height; row++){
     for(var col = 0; col < width; col++){
         var index = (col + row*width)* 4;
         var r = pixels[index];
         var g = pixels[index + 1];
     var b = pixels[index + 2];
     var a = pixels[index + 3];
     
     if(keyIsPressed){
      if(key=="32"){
       original();
      }
      if(key=="g"){
       grey();
      }
      if(key=="a"){
       allGreen();
      }
      if(key=="c"){
       cloudy();
      }
      if(key=="b"){
       bright();
      }
      if(key=="l"){
       blank();
      }
      if(key=="r"){
       red();
      }
      if(key=="w"){
       rainbow();
      }
      if(key=="p"){
       lastPixel();
      }
     }
     
     function original(){
      pixels[index] = r; //red
 pixels[index + 1] =  g;//green
 pixels[index + 2] =  b;//blue
 pixels[index + 3] =  a;//alpha 
}
function grey(){
 pixels[index] = g; //red
 pixels[index + 1] =  g;//green
 pixels[index + 2] =  g;//blue
 pixels[index + 3] =  g;//alpha
}
function allGreen(){
 pixels[index] = 0; //red
 pixels[index + 1] =  g;//green
 pixels[index + 2] =  0;//blue
 pixels[index + 3] =  a;//alpha
}
function cloudy(){
 pixels[index] = r/2; //red
 pixels[index + 1] =  g/2;//green
 pixels[index + 2] =  b/2;//blue
 pixels[index + 3] =  a;//alpha
}
function bright(){
 pixels[index] = r*2; //red
 pixels[index + 1] =  g*2;//green
 pixels[index + 2] =  b*2;//blue
 pixels[index + 3] =  a;//alpha
}
function blank(){
 pixels[index] = 255 - r; //red
 pixels[index + 1] =  255 - g;//green
 pixels[index + 2] =  255 - b;//blue
 pixels[index + 3] =  255 - a;//alpha
}
function rainbow(){
 pixels[index] = r + row - 190; //red
 pixels[index + 1] =  g + col - 190;//green
 pixels[index + 2] =  b;//blue
 pixels[index + 3] =  a;//alpha
}
function red(){
 if(index % 20 == 0){
 pixels[index] = 255; //red
 pixels[index + 1] =  0;//green
 pixels[index + 2] =  0;//blue
 pixels[index + 3] =  a;//alpha
 }
}
function lastPixel(){
 pixels[lastPixel - index - 3] = r; //red
 pixels[lastPixel - index - 2] =  g;//green
 pixels[lastPixel - index - 1] =  b;//blue
 pixels[lastPixel - index - 0] =  a;//alpha
}
     }
 }
 
  updatePixels();


}