'use strict';

var browser = require('./API/browser'),
    bookmarksManager = require('./API/bookmarks');

// ==============================
// CLIENT CODE 
// ==============================

browser.currentPage = "http://www.badacadabra.net";

var bookmark = browser.saveCurrentPage();

bookmarksManager.addBookmark(bookmark);
browser.currentPage = "https://www.google.com";
browser.currentPage = "https://www.amazon.com";
bookmark = browser.saveCurrentPage(); 
bookmarksManager.addBookmark(bookmark);
browser.currentPage = "https://www.twitter.com";

console.log("Current page: " + browser.currentPage);
console.log("Latest bookmark: " + bookmark.webpage);
console.log("First bookmark: " + bookmarksManager.bookmarks[0].webpage);
