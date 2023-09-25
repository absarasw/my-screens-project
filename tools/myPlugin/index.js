
    setTimeout(() => {
        var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
    console.log('Parent URL is ' + url);    
    console.log('location is ' + window.location.href);
      alert('BUTTON CLICKED');
    }, 1000);
