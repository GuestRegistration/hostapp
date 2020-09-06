import 'package:hostapp/src/model/GetNotificationModel.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
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
int indexDelete = -1;


setIndexDelete(int v){
  loadingOther2(true);
  indexDelete = v;
  loadingOther2(false);
}

void initialize()async{
  setBusy(true);
   await _graphQlConfiq.getNeccessartyToken();
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(propertyNotification),
      ),
).catchError((e){
      setBusy(false);
       print(e);
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
                  id: result.data["getPropertyNotifications"][index]["id"],
                  text: result.data["getPropertyNotifications"][index]["text"],
                  timestamp: result.data["getPropertyNotifications"][index]["timestamp"],
                  time: result.data["getPropertyNotifications"][index]["time"],
                  read: result.data["getPropertyNotifications"][index]["read"],
                  getProperties: GetProperties(
                  email: result.data["getPropertyNotifications"][index]["property"]["email"],
                  id: result.data["getPropertyNotifications"][index]["property"]["id"],
                  name: result.data["getPropertyNotifications"][index]["property"]["name"],
                  rulesText: result.data["getPropertyNotifications"][index]["property"]["rules"],
                  propertyPhone: PropertyPhone(
                  completePhone: result.data["getPropertyNotifications"][index]["property"]["phone_meta"]['complete_phone'], 
                  countryCode: result.data["getPropertyNotifications"][index]["property"]["phone_meta"]['country_code'], 
                  phoneNumber: result.data["getPropertyNotifications"][index]["property"]["phone_meta"]['phone_number']),
                  address:  Address(street: result.data["getPropertyNotifications"][index]["property"]["address"]['street'],
                  country: result.data["getPropertyNotifications"][index]["property"]["address"]['country']),
                  terms: result.data["getPropertyNotifications"][index]["property"]["terms"], ),
                  payload: PayLoad(
                    identityID: result.data["getPropertyNotifications"][index]["payload"]["identity_id"],
                    propertyID: result.data["getPropertyNotifications"][index]["payload"]["property_id"],
                    reservationID: result.data["getPropertyNotifications"][index]["payload"]["reservation_id"],
                    userID: result.data["getPropertyNotifications"][index]["payload"]["user_id"],
                  )
                    ));
             // print(result.data["getPropertyNotifications"].toString());
                  print('Notification ID =>> ${result.data["getPropertyNotifications"][index]["id"]}');
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


deleteNotification({String propertyId, String notificationID})async{
   loadingOther(true);
   await _graphQlConfiq.getNeccessartyToken();
       GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
          documentNode: gql(removeNotification),
          onError: (error) {
            print('******************Error Occur: ${error.toString()}');
          },
          onCompleted: (data) {
            //Note: Don't compare data here or do anything that's pertaining to returened Data, This will definately return even if it's error
          },
          variables: <String, dynamic>{
                "propertyId": propertyId,
                "id": notificationID
          }
      )
    )
.catchError((e){
      loadingOther(false);
       print(e);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());
        }).timeout(Duration(seconds: 10,), onTimeout: (){
           loadingOther(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      loadingOther(false);
             print('Result is Null');
             print(result.exception);
              setErrorMessage(erorr: result.exception.graphqlErrors.toString());
              
         }else{
            if(result.data['deletePropertyNotification'] == null){
                        loadingOther(false);
              print('*************Return Data is Null Exception **************');
              print(result.exception.graphqlErrors);
             setErrorMessage(erorr: result.exception.graphqlErrors.toString());

              }else{
                //check if is false
                if(!result.data['deletePropertyNotification']){
                     loadingOther(false);
                  setErrorMessage(erorr: 'Failed to delete Notification, Please Try again');

            }else{
               loadingOther(false);
               initialize(); //Reload the Page....
              }       
      }
      }
           loadingOther(false);
         }

}