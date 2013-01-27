var underTest = {
	collaborator: {
			importantFunction: function(arg) {
				
			}
	},
		
	returnsFour: function() {
		return 4;
	},
	
	doesSomethingImportant: function() {
		this.collaborator.importantFunction("hello", "world");
	}
};