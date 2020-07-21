import 'package:hostapp/src/model/GetNotificationModel.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';



class NotificationViewModel extends BaseModel{
 final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
  List<GetNotificationModel> _notificationList = List<GetNotificationModel>();
List<GetNotificationModel> get notifications => _notificationList;


initialize(){
for (var index = 0; index < 10; index++) {
            _notificationList.add(
                  GetNotificationModel(
                  text: 'We\'ve review your property now',
                  time: '12-10-200',
                  timestamp: 'timestamp',
                  read: 'Read'
                    )
              );
      } 
}


 movetoSettings(){
  _navigationService.navigateTo(settingsRoute);
} 
}