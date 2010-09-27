// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    url:'contacts.js',
    backgroundColor:'#fff'
});
var tabContacts = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Contacts',
    window:win1
});



//
// create controls tab and root window
//\
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});




//
//  add tabs
//
tabGroup.addTab(tabContacts);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
