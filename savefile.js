function generateTxtFile(text){
    var textFile = null;
    var data = new Blob([text], {type: 'text/plain'}); 
    if (textFile !== null) {  
      window.URL.revokeObjectURL(textFile);  
    }  
    textFile = window.URL.createObjectURL(data);  
    return textFile; 
  }
  (function () {  
    var btnCreateFile = document.getElementById('btnCreateFile'),  
    dummyText = document.getElementById('list');  
    btnCreateFile.addEventListener('click', function () {
      var link = document.getElementById('downloadFile');  
      link.href = generateTxtFile(list.innerText);  
      link.style.display = 'inline-block';  
    }, false);
  })(); 