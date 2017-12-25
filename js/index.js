function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function typeDescription(type) {
  var TYPES = {
    'INDIVIDUAL': 'Индивидуальный предприниматель',
    'LEGAL': 'Организация'
  }
  return TYPES[type];
}

function showSuggestion(suggestion) {
  console.log(suggestion);
  var data = suggestion.data;
  if (!data)
    return;
  
  $("#type").text(
    typeDescription(data.type) + " (" + data.type + ")"
  );

  if (data.name)
    $("#name_short").val(join([data.opf && data.opf.short || "", data.name.short || data.name.full], " "));
  
  if (data.name && data.name.full)
    $("#name_full").val(join([data.opf && data.opf.full || "", data.name.full], " "));
  
  $("#inn_kpp").val(join([data.inn, data.kpp], " / "));
  
  if (data.address)
    $("#address").val(data.address.value);
}

$("#party").suggestions({
  token: "2a3c28f9fcbe4ef80ff468607c3ac9c4be26a6e4",
  type: "PARTY",
  count: 5,
  /* Вызывается, когда пользователь выбирает одну из подсказок */
  onSelect: showSuggestion
});