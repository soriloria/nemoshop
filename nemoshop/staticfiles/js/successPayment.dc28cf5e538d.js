// function to redirect after 2 secs
        setTimeout(function() {
            localStorage.removeItem("basketProducts");
            window.location.href = '/';
        }, 2000);
