export class MenuItem {
    constructor(title, link, component) {
      this.title = title;
      this.link = link;
      this.component = component;
      this.children = [];
    }
  
    addChild(menuItem) {
      this.children.push(menuItem);
    }
  }
  
  const menuTree = new MenuItem("root", "/", null);
  
  const profile = new MenuItem("Profile", "/profile", "ProfileComponent");
  const messages = new MenuItem("Messages", "/messages", "MessagesComponent");
  
  const settings = new MenuItem("Settings", "/settings", null);
  const account = new MenuItem("Account", "/settings/account", null);
  account.addChild(new MenuItem("Profile", "/settings/account/profile", "AccountProfileComponent"));
  account.addChild(new MenuItem("Security & Privacy", "/settings/account/security", "SecurityComponent"));
  account.addChild(new MenuItem("Password", "/settings/account/password", "PasswordComponent"));
  account.addChild(new MenuItem("Notification", "/settings/account/notification", "NotificationComponent"));
  settings.addChild(account);
  
  const help = new MenuItem("Help", "/help", null);
  help.addChild(new MenuItem("FAQ", "/help/faq", "FAQComponent"));
  help.addChild(new MenuItem("Submit a Ticket", "/help/ticket", "TicketComponent"));
  help.addChild(new MenuItem("Network Status", "/help/status", "StatusComponent"));
  
  const logout = new MenuItem("Logout", "/logout", "LogoutComponent");
  
  menuTree.addChild(profile);
  menuTree.addChild(messages);
  menuTree.addChild(settings);
  menuTree.addChild(help);
  menuTree.addChild(logout);
  
  export default menuTree;
  