<Query Kind="Program">
  <Reference>&lt;RuntimeDirectory&gt;\System.IO.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Text.RegularExpressions.dll</Reference>
</Query>

void Main()
{
	var currentDir = Directory.GetCurrentDirectory();
	var removeNamespace = new Regex("[^//]namespace fabric {");
	var removeEndBracket = new Regex(@"([^//}]+)}$");
	
	
	//setting directory for debugging:
		var directoryPath = @"C:\Users\john.holen-tjelta\Dropbox\code\ouifa2";
		Directory.SetCurrentDirectory(directoryPath);
		currentDir = Directory.GetCurrentDirectory();
	
	var filepaths = new List<string>();
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\button\Button.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\checkbox\CheckBox.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\dropdown\Dropdown.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\radiobutton\radiobutton.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\textfield\TextField.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\messagebanner\MessageBanner.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\overlay\Overlay.ts");
	
	foreach (var filepath in filepaths)
	{
		var fileContent = File.ReadAllText(currentDir.ToString() + filepath.TrimEnd());
		var fixedContent = removeNamespace.Replace(fileContent, "\n//namespace fabric {");
		fixedContent = removeEndBracket.Replace(fixedContent, "\n//}");
		File.WriteAllText(currentDir.ToString() + filepath, fixedContent);
		fixedContent.Dump();
	}

}

// Define other methods and classes here