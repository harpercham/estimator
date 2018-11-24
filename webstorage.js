function saveFunction(){
    var storage=document.getElementById("latlng").value;
    var client=document.getElementById("client").value;
    localStorage.setItem( client,storage);
    }
    
    function loadFunction(){
        var client=document.getElementById("client").value;
        var loadlocation = localStorage.getItem(client);
        document.getElementById('latlng').value = loadlocation
    }
