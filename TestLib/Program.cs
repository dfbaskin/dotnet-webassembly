[assembly: System.Runtime.Versioning.SupportedOSPlatform("browser")]

namespace TestLib;

public partial class MainJS
{
    public static async Task Main()
    {
        if (!OperatingSystem.IsBrowser())
        {
            throw new PlatformNotSupportedException("Requires browser platform");
        }

        // await JSHost.ImportAsync("todoMVC/store.js", "./store.js");

        await Task.CompletedTask;

        Console.WriteLine("DotNet code loaded and ready!");
    }
}
