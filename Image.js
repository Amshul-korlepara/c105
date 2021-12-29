Webcam.set({
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function capture_img(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SN0m1C37o/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded!")
}
function define(){
    img=document.getElementById("captured_img");
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){ 
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("Object_name").innerHTML=results[0].label;
    Answer=results[0].confidence.toFixed(3);
    document.getElementById("Accuracy").innerHTML=Answer*100+"% ";
    }
}
