// device APIs are available
    //
    function openPayment() {
         var ref = window.open('http://butlerspay.qa.fireworkx.com', '_blank', 'location=no');
         ref.addEventListener('loadstop', function(event) { 
		    var urlSuccessPage = "http://butlerspay.qa.fireworkx.com/PaymentCard/Success";
			var urlFailedPage = "http://butlerspay.qa.fireworkx.com/PaymentCard/Failed";
			if (event.url == urlSuccessPage) {
				ref.close();    
				location.href = "#/app/saved-credit-card"; 
			}
			else if(event.url == urlFailedPage)
			{
				alert("credit card details failed try again");
				ref.close();
			}
		 });
    }