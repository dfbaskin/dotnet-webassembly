using Example.RustComponent;

Console.WriteLine($"Running on {Environment.OSVersion}");
var testVec = new Vec2 { x = 4, y = 10 };
Console.WriteLine($"Original Vector ({testVec.x},{testVec.y})");
var resultVec = RustComponentInterop.double_vector(testVec);
Console.WriteLine($"Doubled Vector ({resultVec.x},{resultVec.y})");
