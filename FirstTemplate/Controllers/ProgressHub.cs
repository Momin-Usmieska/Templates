using Microsoft.AspNetCore.SignalR;

namespace AspNetCoreSignalRProgress.Hubs
{
    public class ProgressHub : Hub
    {
        public async Task SendProgress(float percentage)
        {
            await Clients.All.SendAsync("RecieveProgress", percentage);
        }
    }
}