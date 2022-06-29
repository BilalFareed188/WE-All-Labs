var browser = prompt("Enter The Browser You Are Using From List Below\n(Google Chrome, Firefox, Internet Explorer, Safari)");

switch(browser){
    case ('Google Chrome' || 'GOOGLE CHROME' || 'google chrome'):
        alert("I am using Google Chrome browser");
        break;
    case ('Firefox' || 'FIREFOX' || 'firefox'):
        alert("I am using Firefox browser");
        break;
    case ('Internet Explorer' || 'INTERNET EXPLORER' || 'internet explorer'):
        alert("I am using Internet Explorer browser");
        break;
    case ('Safari' || 'SAFARI' || 'safari'):
        alert("I am using Safari browser");
        break;
    default:
        alert("WRONG INPUT!");
        break;
}

