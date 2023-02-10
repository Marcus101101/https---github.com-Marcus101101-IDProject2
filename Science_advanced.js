//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63e5ed89478852088da67fe1";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 100, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idleaderboardfinal-5736.restdb.io/rest/science-advance",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
          
        let content = "";
        var rank = 1;
        for (var i = 0; i < response.length && i < limit; i++) {
          
          for (var r = 10; r < 11; r++) {
            if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
           
          }
          
        
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 9; r < 10; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 8; r < 9; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 7; r < 8; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 7; r < 6; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 5; r < 6; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 4; r < 5; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 3; r < 4; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 2; r < 3; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 1; r < 2; r++) {
              if( r == response[i].score){
              if (rank === 1){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/gold medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if (rank === 2){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/silver medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else if(rank === 3){
              content = `${content}<tr id='${response[i]._id}'><td><img src = "image/bronze medal.png" width = "48" height = "48"></td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            else{
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
            rank++;
            }
            }
              
            }
            
          }
          for (var i = 0; i < response.length && i < limit; i++) {
  
            for (var r = 0; r < 1; r++) {
              if (response[i].score == r){
              content = `${content}<tr id='${response[i]._id}'><td>${rank}</td><td>${response[i].name}</td><td>${response[i].score}</td>`;
              rank++;
            }
           
          }
          
        }
        
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        $(".advanced-science").html(content);
  
        $("#total-contacts").html(response.length);
      }});
  
  
    }
  
    //[STEP 10]: Create our update listener
    //here we tap onto our previous table when we click on update
    //this is a delegation feature of jquery
    //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
      //update our update form values
      let contactName = $(this).data("name");
      let contactMsg = $(this).data("msg");
      let contactId = $(this).data("id");
      console.log($(this).data("msg"));
  
      //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
      $("#update-contact-name").val(contactName);
      $("#update-contact-password").val(contactMsg);
      $("#update-contact-id").val(contactId);
      $("#update-contact-container").show();
  
    });//end contact-list listener for update function
  
    //[STEP 12]: Here we load in our contact form data
    //Update form listener
    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();
      //retrieve all my update form values
      let contactName = $("#update-contact-name").val();
      let contactMsg = $("#update-contact-password").val();
      let contactId = $("#update-contact-id").val();
  
      console.log($("#update-contact-password").val());
      console.log(contactMsg);
  
      //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
      updateForm(contactId, contactName,  contactMsg);
    });//end updatecontactform listener
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function updateForm(id, contactName, contactMsg) {
      //@TODO create validation methods for id etc. 
  
      var jsondata = { "name": contactName, "score": contactMsg };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://idleaderboardfinal-5736.restdb.io/rest/science-advance${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);
        //update our contacts table
        getContacts();
      });
    }//end updateform function
  
  })
  