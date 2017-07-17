using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Diagnostics;
using System.Threading;
using System.Reflection;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Data;
using System.Data.SqlClient;
using System.Data.Linq;
using System.Data.Linq.SqlClient;
using System.Transactions;
using System.Xml;
using System.Xml.Linq;
using System.Xml.XPath;
class UserQuery {
    static int Main(string[] args) {
        new UserQuery().Main(); return 0;
    }
void Main()
{
	var currentDir = Directory.GetCurrentDirectory();
	var removeNamespace = new Regex("[^//]namespace fabric {");
	var removeEndBracket = new Regex(@"([^//}]+)}$");
	
	var filepaths = new List<string>();
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\button\Button.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\checkbox\CheckBox.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\dropdown\Dropdown.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\radiobutton\radiobutton.ts");
	filepaths.Add(@"\node_modules\office-ui-fabric-js\src\components\textfield\TextField.ts");
	
	foreach (var filepath in filepaths)
	{
		var fileContent = File.ReadAllText(currentDir.ToString() + filepaths.FirstOrDefault()).TrimEnd();
		var fixedContent = removeNamespace.Replace(fileContent, "\n//namespace fabric {");
		fixedContent = removeEndBracket.Replace(fixedContent, "\n//}");
		File.WriteAllText(currentDir.ToString() + filepaths.FirstOrDefault(), fixedContent);
	}

}

// Define other methods and classes here
}

