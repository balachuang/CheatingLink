(function($) {

	$.fn.CheatingLink = function(parameter)
	{
		if (this.length != 1) return;
		if (parameter.urls == undefined) return;
		if (this.prop('tagName') != 'A') return;

		var bdLeft = this.position().left;
		var bdRight = bdLeft + this.width();
		var bdStep = (bdRight - bdLeft) / parameter.urls.length;

		this.attr('href', '#');
		this.click(function(event)
		{
			var new_src = '';
			var px = event.pageX;
			for (var n=0; n<parameter.urls.length; ++n)
			{
				if (px < bdLeft + bdStep*(n+1))
				{
					new_src = parameter.urls[n];
					break;
				}
			}

			$(this).attr('href', new_src);
			return true;
		});
	}
})(jQuery);
