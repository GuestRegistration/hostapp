import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:shared_preferences/shared_preferences.dart';

class DynamicLinkService {
  
final NavigationService _navigationService = locator<NavigationService>();

    Future handleDynamicLinks() async {
      print('Dynamic Link is here for initialize');
    // 1. Get the initial dynamic link if the app is opened with a dynamic link
    final PendingDynamicLinkData data =
        await FirebaseDynamicLinks.instance.getInitialLink();

    // 2. handle link that has been retrieved
    _handleDeepLink(data);

    // 3. Register a link callback to fire if the app is opened up from the background
    // using a dynamic link.
    FirebaseDynamicLinks.instance.onLink(
        onSuccess: (PendingDynamicLinkData dynamicLink) async {
      // 3a. handle link that has been retrieved
      print('***************************Have Retried the Data');
      _handleDeepLink(dynamicLink);

    }, onError: (OnLinkErrorException e) async {
      print('***************************Link Failed: ${e.message}');
    });
  }

  void _handleDeepLink(PendingDynamicLinkData data) {
    final Uri deepLink = data?.link;
    
  if (deepLink != null) {
    //_navigationService.navigateTowithoutBack(splashRoute);
    var navigationRoute = deepLink.queryParameters['route'];
    var params = deepLink.queryParameters['params'];

    print('********************_handleDeepLink | deeplink: $deepLink');
     print('********************navigationRoute | ${deepLink.queryParameters['route']}');
     print('********************queryParameters(route) : $navigationRoute');
       print('********************queryParameters(Params): $params');
        if (deepLink != null) {
      _navigationService.navigateToandRemove(signInwithEmailLOADERRoute, arguments: deepLink);
    }

    
  }
  }

 

}