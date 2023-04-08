using System.Runtime.InteropServices.JavaScript;
using QRCoder;

namespace TestLib;

public partial class QR
{
    [JSExport]
    public static string Generate(string text, int pixelsPerBlock)
    {
        var qrGenerator = new QRCodeGenerator();
        var qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q);

        var qrCode = new BitmapByteQRCode(qrCodeData);
        return Convert.ToBase64String(qrCode.GetGraphic(pixelsPerBlock));
    }
}
