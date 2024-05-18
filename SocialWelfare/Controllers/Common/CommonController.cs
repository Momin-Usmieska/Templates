using Microsoft.AspNetCore.Mvc;

namespace SocialWelfare.Controllers
{
    public class CommonController : Controller
    {
        public IActionResult UserDetails()
        {
            return View();
        }
    }
}