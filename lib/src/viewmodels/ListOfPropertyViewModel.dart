import 'package:hostapp/src/model/propertyModel.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';

import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/CloudStorageService.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:image_picker/image_picker.dart';

class ListOfPropertyViewModel extends BaseModel{
   final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
final FirestoreService _firestoreService = locator<FirestoreService>();

List<PropertyModel> _propertlist;
List<PropertyModel> get properties => _propertlist;


void initialize(){
  //listen to real time update and fetch data
setBusy(true);
print('Am Here');
_firestoreService.fetchProperties().listen((propertyData) {
  List<PropertyModel> updatedData = propertyData;
  if(updatedData != null && updatedData.length > 0){
    _propertlist = updatedData;
    notifyListeners();
  }
  setBusy(false);
  print('End');
});
}

void addproperty(){
  _navigationService.navigateTo(addPropertyRoute);
}
}