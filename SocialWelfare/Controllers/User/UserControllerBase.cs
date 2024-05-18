using Microsoft.AspNetCore.Mvc;

namespace SocialWelfare.Controllers
{
    public class UserController : Controller
    {
        public IActionResult ServiceForm()
        {
            return View();
        }

        public IActionResult ServicesList()
        {
            return View();
        }
        public IActionResult ApplicationStatus()
        {
            return View();
        }
    }
}