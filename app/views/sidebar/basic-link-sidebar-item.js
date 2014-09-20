import SidebarItemView from "./sidebar-item";

var BasicLinkSidebarItemView = SidebarItemView.extend({
	templateName: "sidebar/basic_link_sidebar_item",
	linkText: "Marketplaces",
	linkIcon: "icon-activity",

	href: function() {
		return "#" + this.getRoute(this.get("routeName"));
	}.property("routeName"),

	isCurrent: function() {
		var currentRouteName = Balanced.Router.router.currentHandlerInfos.get("lastObject.handler.routeName");
		return this.get("routeName") === currentRouteName;
	}.property("href")
});

export default BasicLinkSidebarItemView;
