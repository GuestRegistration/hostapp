import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
class MainReservationViewModel extends BaseModel{
     final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();



void addReservation(){
  _navigationService.navigateTo(addReservationRoute);
}
}