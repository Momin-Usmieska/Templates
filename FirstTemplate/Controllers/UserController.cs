using Microsoft.AspNetCore.Mvc;

namespace FirstTemplate.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Records()
        {
            return View();
        }

        // Add other actions as needed
    }
}