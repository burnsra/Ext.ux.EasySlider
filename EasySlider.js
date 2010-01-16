(function() {
	Ext.ns('Ext.ux');
	Ext.ux.EasySlider = function() {
		var defaultConfig = function() {
			return {
				prevId: 		'prevBtn'
				prevText: 		'Previous'
				nextId: 		'nextBtn'
				nextText: 		'Next'
				controlsShow:	true
				controlsBefore:	''
				controlsAfter:	''
				controlsFade:	true
				firstId: 		'firstBtn'
				firstText: 		'First'
				firstShow:		false
				lastId: 		'lastBtn'
				lastText: 		'Last'
				lastShow:		false		
				vertical:		false
				speed: 			800
				auto:			false
				pause:			2000
				continuous:		false
				numeric: 		false
				numericId: 		'controls'
			}
		}
	}
});