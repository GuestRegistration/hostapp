import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/Mobile/HomeScreen_Mobile.dart';
import 'package:hostapp/src/screen/Tablet/HomeScreen_Tablet.dart';
import 'package:hostapp/src/viewmodels/home_view_model.dart';
import 'package:hostapp/src/widget/base_widgets.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';

class HomeView extends StatefulWidget {
  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  Widget build(BuildContext context) {
    //First check if it's Mobile, Tablet Desktop, Watch.
    
    return ViewModelProvider<HomeViewModel>.withoutConsumer(
      viewModel: HomeViewModel(),
      onModelReady: (model)=> model.initialize(),
       builder: (context, model, child) =>
       ResponsiveBuilder(
      builder:  (context, sizingInformation){
         if (sizingInformation.deviceScreenType == DeviceScreenType.Desktop) {
           //I intenstionally want to use Tablet UI for Desktop Also
            return HomeScreenTablet();
          }

          if (sizingInformation.deviceScreenType == DeviceScreenType.Tablet) {
            return HomeScreenTablet();
          }

          if (sizingInformation.deviceScreenType == DeviceScreenType.Mobile) {
            //print('Am Mobile');
                return OrientationLayoutBuilder(
              portrait: (context) => HomeMobilePortrait(),
              landscape: (context) => HomeMobileLandscape(),
                );
          }
          return Container(color:Colors.purple);
      }
      ),
          
    );
  }
}