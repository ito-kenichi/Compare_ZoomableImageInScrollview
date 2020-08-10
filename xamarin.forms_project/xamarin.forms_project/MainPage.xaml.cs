using System;
using System.Collections.Generic;
using Xamarin.Forms;

namespace xamarin.forms_project
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            for(int index = 1; index < 4; index++)
            {
                var image = new Image()
                {
                    Source = ImageSource.FromResource("xamarin.forms_project.images.image" + String.Format("{0:D3}", index) + ".jpg"),
                    HorizontalOptions = LayoutOptions.Center,
                    VerticalOptions = LayoutOptions.Center,
                    WidthRequest = 200,
                    HeightRequest = 100,
                };
                Layout.Children.Add(image);
            }
        }
    }
}
