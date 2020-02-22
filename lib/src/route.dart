import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/AddPropertyLoadingScreen.dart';
import 'package:hostapp/src/screen/AddPropertyScreen.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/screen/WrapperScreen.dart';
import 'package:hostapp/src/util/constants.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  switch (settings.name) {
    case signUpViewRoute:
//     return _getPageRoute(
//        routeName: settings.name,
//        viewToShow: SignUpView(),
//      );
      case signInViewRoute:
//     return _getPageRoute(
//        routeName: settings.name,
//        viewToShow: LoginView(),
//      );
     
    case wrapperRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: WrapperScreen(),
      );
    case addPropertyRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: AddPropertyView()
      );
    case dashboardRoute:
     var index = settings.arguments as int; //Index to show when going to this page
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: Dashboard(showIndex: index,),
      );

      case addpropertyloadingRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: AddProprtyLoadingScreen(),
      );
      

       
    default:
      return MaterialPageRoute(
          builder: (_) => Scaffold(
                body: Center(
                    child: Text('No route defined for ${settings.name}')),
              ));
  }
}

PageRoute _getPageRoute({String routeName, Widget viewToShow}) {
  return MaterialPageRoute(
      settings: RouteSettings(
        name: routeName,
      ),
      builder: (_) => viewToShow);
}
