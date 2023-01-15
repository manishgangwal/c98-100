var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

//var Textbox = document.getElementById("textbox"); 

function start()
{
    //Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

   // Textbox.innerHTML = Content;
    console.log(Content);
     // if(Content ==" selfie")
      //{
        console.log("taking selfie --- ");
        speak();
      //}
}


function speak(){
    var synth = window.speechSynthesis;

   
}setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking you Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    },5000);
    Webcam.attach(camera);
setTimeout(function()
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking you Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    },10000);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();
        speak_data = "Taking you Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    },5000);
    Webcam.attach(camera);
 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
            }
            if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
                }  
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}