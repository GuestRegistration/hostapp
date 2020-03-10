import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/AddPropertyLoadingScreen.dart';
import 'package:hostapp/src/screen/AddPropertyScreen.dart';
import 'package:hostapp/src/screen/ProScreen.dart';
import 'package:hostapp/src/screen/AddReservationScreen.dart';
import 'package:hostapp/src/widget/loadingScreen/AddReservationLoadingWidget.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/screen/WrapperScreen.dart';
import 'package:hostapp/src/screen/SendCheckInInstruction.dart';
import 'package:hostapp/src/widget/loadingScreen/UpdatePropertyWidget.dart';
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

      

       case proRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: ProScreen(),
      );
      
      case addReservationRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: AddReservationScreen(),
      );

      case reservationInstructionRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: SendCheckInInstruction(movedData: settings.arguments),
      );

      

      

//TODO Loader UI.

      case addpropertyloadingRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: AddProprtyLoadingScreen(data: settings.arguments,),
      );

      case updatepropertyloadingRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow:  UpdatePropertyWidget(data: settings.arguments,),
      );

      case addReservationloadingRoute:
      return _getPageRoute(
        routeName: settings.name,
        viewToShow: AddReservationLoadingWidget(data: settings.arguments,),
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
