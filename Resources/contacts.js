function loadContacts() {
	var loader = Titanium.Network.createHTTPClient();  
	var win = Titanium.UI.currentWindow;
	var rowData = [];
	loader.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name=indicj");
	Ti.API.info("*********** after open");
	loader.onload = function () {
		Ti.API.info("**** in callback");
		var tweets = eval('('+this.responseText+')');   
		for (var i = 0; i < tweets.length; i++) {  
			Ti.API.info("**** in callback1");
			var tweet  = tweets[i].text; // The tweet message  
			var user   = tweets[i].user.screen_name; // The screen name of the user  
			var avatar = tweets[i].user.profile_image_url; // The profile image  
			var row = Titanium.UI.createTableViewRow({height:'auto'});  
			var post_view = Titanium.UI.createView({ height:20, layout:'vertical', top:5, right:5, bottom:5, left:5 });  
			var tweet_lbl = Titanium.UI.createLabel({  
			    text: tweet,  
			    left: 54,  
			    top: 0,  
			    bottom: 2,  
			    height: 15,  
			    width: 236,  
			    textAlign: 'left',  
			    font:{ fontSize:14 }  
			});  

			post_view.add(tweet_lbl);

			row.add(post_view);  
			rowData[i] = row;  
		}
		Ti.API.info("**** in callback2");
		tableView = Titanium.UI.createTableView( { data : rowData } );  
		win.add(tableView);
	}
	loader.send();

}
Ti.API.info("*********** 001");
loadContacts();
Ti.API.info("*********** 002");
