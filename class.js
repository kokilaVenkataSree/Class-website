document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    let className = document.getElementById('className').value;
    let files = document.getElementById('files').files;
 
    if (files.length === 0) {
        alert('Please select at least one file.');
        return;
    }
 
    let formData = new FormData();
    formData.append('className', className);
    for (let i = 0; i < files.length; i++) {
        formData.append('files[]', files[i]);
    }
 
    fetch('/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Files uploaded successfully');
          } else {
              alert('Failed to upload files');
          }
      }).catch(error => {
          console.error('Error uploading files:', error);
          alert('Error uploading files');
      });
});
