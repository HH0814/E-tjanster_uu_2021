$.ajaxSetup({
    headers : {   
        'Authorization': 'Bearer yJhTzwDiAFu4dno1KjeYiQ', 'Content-Type' : 'application/json'
    }
  });
$.getJSON(
    "https://www.carboninterface.com/api/v1/vehicle_makes",
    function(data) {
        console.log(data);

    var car = data[0].data
    
    var name = car.attributes.name;
    $(".name").append(name);
    var number_of_models = car.attributes.number_of_models;
    $(".number_of_models").append(number_of_models);
    var id = car.id;
    $(".id").append(id);
    }
);
