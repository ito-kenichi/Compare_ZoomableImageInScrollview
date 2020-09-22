using System;
using Xamarin.Forms;

namespace xamarin.forms_project
{
    public partial class DisplayImage : Image
    {
        public DisplayImage(string imagePath)
        {
            InitializeComponent();
            image.Source = ImageSource.FromUri(new Uri(imagePath));
        }
    }
}
