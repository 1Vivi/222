var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function validateform(){  
  var first=document.myform.first.value;  
  var password=document.myform.password.value; 
  var last=document.myform.last.value;  
  var questions=document.myform.questions.value;  
    
  if (first==null || first=="" || Number.isNaN(first)){  
    alert("First Name can't be blank");  
    return false;  
  }
  if (Number.isNaN(first)){  
    alert("asdasdasd");  
    return true;  
  }
  
  if (last==null || last==""){  
    alert("Last Name can't be blank");  
    return false;  
  }
  if (questions==null || questions==""){  
    alert("Questions can't be blank");  
    return false;  
  }
  if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  } 
      /*
    *Vivi Xu Weiwei
    *Enter the correct name, the question you want to ask and the correct password in the box to send an email to the organization for the last name query.  If you enter something wrong or empty, the system will prompt you  
    */