function setCapitalLetter(str, elem) {
    if(str == "") return false; 
    str = str[0].toUpperCase() + str.substring(1,str.length);
    elem.value = str;
}