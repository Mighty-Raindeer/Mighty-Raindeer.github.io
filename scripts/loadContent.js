function loadContent(page) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define the onload and onerror callbacks
    xhr.onload = function() {
      // On success, update the content container with the fetched data
      if (xhr.status === 200) {
        document.getElementById('contentContainer').innerHTML = xhr.responseText;
      } else {
        // On error, display an error message
        document.getElementById('contentContainer').innerHTML = '<p>Error loading content.</p>';
      }
    };
    xhr.onerror = function() {
      // On error, display an error message
      document.getElementById('contentContainer').innerHTML = '<p>Error loading content.</p>';
    };
  
    // Open and send the AJAX request
    xhr.open('GET', page + '.html', true);
    xhr.send();
  }