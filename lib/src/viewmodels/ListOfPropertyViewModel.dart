import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class ListOfPropertyViewModel extends BaseModel{
   final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();

List<GetProperties> _propertlist = List<GetProperties>();
List<GetProperties> get properties => _propertlist;
String _errorMessage;
String get getErrorMessage => _errorMessage;


void initialize()async{
  setBusy(true);
   await _graphQlConfiq.getNeccessartyToken();

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getProperties),
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
           if(result.data['getUserProperties'] == null){
             setBusy(false);
              print('*************Return Data is Null Exception **************');
              print(result.exception.graphqlErrors);
             setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
               print('Result is not Null,becaue I have data with me');
               if(result.data["getUserProperties"].length == 0){
                 print('Am Empty');
                 _propertlist = null;

               }else{
for (var index = 0; index < result.data["getUserProperties"].length; index++) {
            _propertlist.add(
                  GetProperties(
                  email: result.data["getUserProperties"][index]["email"],
                  id: result.data["getUserProperties"][index]["id"],
                  name: result.data["getUserProperties"][index]["name"],
                  rulesText: result.data["getUserProperties"][index]["rules"],
                  propertyPhone: PropertyPhone(
                  completePhone: result.data["getUserProperties"][index]["phone"]['complete_phone'], 
                  countryCode: result.data["getUserProperties"][index]["phone"]['country_code'], 
                  phoneNumber: result.data["getUserProperties"][index]["phone"]['phone_number']),
                  address:
                  Address(street: result.data["getUserProperties"][index]["address"]['street'],
                  country: result.data["getUserProperties"][index]["address"]['country']),
                  terms: result.data["getUserProperties"][index]["terms"],
                    )
              );
             // print( result.data["getProperties"][index]["rules"]);
      } 
               }
               
      
      }
           
     // print(_propertlist.length);
       setBusy(false);
         }
}


void addproperty(){
  _navigationService.navigateTo(addPropertyRoute);
}

void proPage(){
    _navigationService.navigateTo(proRoute);
}

setErrorMessage({String erorr}){
  _errorMessage = erorr;
  print(erorr);
  notifyListeners();
}

d()async{
     await _graphQlConfiq.getUserToken();
}

movetoSettings(){
  _navigationService.navigateTo(settingsRoute);
}
}