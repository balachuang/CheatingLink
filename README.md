CheatingLink
============

A jQuery plugin to let the &lt;a> tag has more than one url. The target url of the specific &lt;a> will be replaced according to where you click. For example, you have a &lt;a> tag in your page like:

&lt;a href="xxx" target="_new">This is a test&lt;/a>

Then you add 2 urls to this tag by applying this plugin:

$('#linkTest').CheatingLink({
	'urls' : ['http://www.google.com', 'http://www.yahoo.com']
});

Now, when you click the left half of the link (click on "This is"), it will navigate to Google Homepage in a new tab. When you click the right half of the link (click on "a test"), the Yahoo Homepage is created in the a tab.
