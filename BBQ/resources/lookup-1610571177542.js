(function(window, undefined) {
  var dictionary = {
    "20bbe3a5-91e3-49b3-8507-e75fb52d0922": "Account Selection",
    "47f73378-bcd5-4952-b53e-e63cfecad94c": "User Account",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Screen",
    "3ed01224-ea09-423c-938c-87f89eabc73c": "Search Screen",
    "3bf49986-31d6-4a83-a667-1d88c7cd6574": "User Interface",
    "335c9526-e6fe-4289-999a-bc5a45188f86": "Business Account",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);