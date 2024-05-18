using Microsoft.AspNetCore.Mvc;

namespace SocialWelfare.Controllers
{
    public class OfficerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}