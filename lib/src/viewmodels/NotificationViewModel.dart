import 'package:hostapp/src/model/GetNotificationModel.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:graphql_flutter/graphql_flutter.dart';



class NotificationViewModel extends BaseModel{
 final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
  List<GetNotificationModel> _notificationList = List<GetNotificationModel>();
List<GetNotificationModel> get notifications => _notificationList;
String _errorMessage;
String get getErrorMessage => _errorMessage;




void initialize()async{
  setBusy(true);
   await _graphQlConfiq.getNeccessartyToken();

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(propertyNotification),
         variables: <String, dynamic>{
             'propertyId': "0GsULSqn5vVuTRdLhkSK",
          }
      ),
).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());
        }).timeout(Duration(seconds: 10,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
             print(result.exception);
              setErrorMessage(erorr: result.exception.graphqlErrors.toString());
              
         }else{
           if(result.data['getPropertyNotifications'] == null){
             setBusy(false);
              print('*************Return Data is Null Exception **************');
              print(result.exception.graphqlErrors);
             setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
               print('Result is not Null,becaue I have data with me');
               if(result.data["getPropertyNotifications"].length == 0){
                 print('Am Empty');
                 _notificationList = null;

               }else{
for (var index = 0; index < result.data["getPropertyNotifications"].length; index++) {
 
            _notificationList.add(
                  GetNotificationModel(
                  text: result.data["getPropertyNotifications"][index]["text"],
                  timestamp: result.data["getPropertyNotifications"][index]["timestamp"],
                  time: result.data["getPropertyNotifications"][index]["time"],
                  read: result.data["getPropertyNotifications"][index]["read"],
                    )
              );
      }  }
               
      }
       setBusy(false);
         }
}
setErrorMessage({String erorr}){
  _errorMessage = erorr;
  print(erorr);
  notifyListeners();
}




 movetoSettings(){
  _navigationService.navigateTo(settingsRoute);
} 
}