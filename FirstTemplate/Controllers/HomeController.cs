using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FirstTemplate.Models;
using Microsoft.AspNetCore.SignalR;
using AspNetCoreSignalRProgress.Hubs;

namespace FirstTemplate.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    ProgressHub progressHub;

    public HomeController(ILogger<HomeController> logger, ProgressHub progressHub)
    {
        _logger = logger;
        this.progressHub = progressHub;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromForm] IFormCollection form)
    {

        for (int i = 1; i <= 100; i++)
        {
            await progressHub.SendProgress(i);
        }

        return Json(new { status = true });
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
