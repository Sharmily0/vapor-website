document.getElementById('toggleButton').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block'; 
      document.getElementById('toggleButton').textContent = 'Hide Form';
    } else {
      form.style.display = 'none';
      document.getElementById('toggleButton').textContent = 'Documentation';
    }
  });
  document.getElementById('openTabButton').addEventListener('click', function() {
    window.open('https://www.example.com', '_blank');
  });
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

