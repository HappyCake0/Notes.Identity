namespace Notes.Identity.Data
{
    public class DbInittializer
    {
        public static void Initialize(AuthDbContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
