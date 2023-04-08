using System.Runtime.InteropServices.JavaScript;

namespace TestLib;

public partial class SomeAPI
{
    [JSExport]
    public static double DoubleIt(double value) => value * 2.0;
}
