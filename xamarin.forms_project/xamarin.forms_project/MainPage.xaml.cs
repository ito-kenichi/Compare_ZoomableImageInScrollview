using Xamarin.Forms;

namespace xamarin.forms_project
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            var image = new DisplayImage("https://picsum.photos/250?image=9");
            layout.Children.Add(image);
        }
    }
}
