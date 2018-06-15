import { combineReducers } from "redux";

import artAndIllustration from "./artAndIllustrationReducer";
import brandingAndIdentity from "./brandingAndIdentityReducer";
import graphicDesign from "./graphicDesignReducer";
import literature from "./literatureReducer";
import photography from "./photographyReducer";
import webDesign from "./webDesignReducer";

import navigationBarColorSchemeClass from "./navigationBarColorSchemeClass";
import navigationLinks from "./NavigationLinksReducer";
import portfolioCategories from "./portfolioCategoriesReducer";

const allReducers = combineReducers({
	artAndIllustration,
	brandingAndIdentity,
	graphicDesign,
	literature,
	navigationBarColorSchemeClass,
	navigationLinks,
	photography,
	portfolioCategories,
	webDesign,
});

export default allReducers;
