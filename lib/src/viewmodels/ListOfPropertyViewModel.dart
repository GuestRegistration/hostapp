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
String serverError;


void initialize()async{
  setBusy(true);
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getProperties),
      ),
);
   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
             print(result.exception);
         }else{
            print('Result is not Null');
            for (var index = 0; index < result.data["getProperties"].length; index++) {
            _propertlist.add(
                  GetProperties(
                  email: result.data["getProperties"][index]["email"],
                  id: result.data["getProperties"][index]["id"],
                  name: result.data["getProperties"][index]["name"],
                  rulesText: result.data["getProperties"][index]["rules"],
                  propertyPhone: PropertyPhone(
                    completePhone: result.data["getProperties"][index]["phone"]['complete_phone'], 
                  countryCode: result.data["getProperties"][index]["phone"]['country_code'], 
                  phoneNumber: result.data["getProperties"][index]["phone"]['phone_number']),
                  address:
                  Address(street: result.data["getProperties"][index]["address"]['street'],
                  country: result.data["getProperties"][index]["address"]['country']),
                  terms: result.data["getProperties"][index]["terms"],
                    )
              );
              print( result.data["getProperties"][index]["rules"]);
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

setError(String errorMessage){
  serverError = errorMessage;
  print(serverError);
  notifyListeners();
}
}