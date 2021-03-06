import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/widgets/editable_text.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/CloudStorageService.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:image_picker/image_picker.dart';

import 'dart:async';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';

import 'package:flutter/material.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/util/customFunctions.dart';

class AddPropertyViewModel extends BaseModel{
    final AuthService _authService = locator<AuthService>();
final DialogService _dialogService = locator<DialogService>();
final NavigationService _navigationService = locator<NavigationService>(); 
final FirestoreService _firestoreService = locator<FirestoreService>();
final CloudStorageService _cloudStorageService = locator<CloudStorageService>();
 final CustomFuntion _customFuntion = locator<CustomFuntion>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();

int pageIndex = 0;
File _image, _file;
File get selectedImage => _image; //Property Image
File get selectedDocument => _file; //Property rules document.
bool isPropertyRulesSet = false; //enable listerner for button in property rules
CloudStorageResult storageResult;
String _propertyName, _address, _contactEmail, _phoneN, _phoneIcode, _rules, _documentLink;
String _errorMessage;
String get errorM => _errorMessage;
String _country;
String get getCountry => _country;
MutationOptions _addpropertyOption;
MutationOptions get  getaddPropertyOption => _addpropertyOption;
RunMutation _runMutation;
RunMutation get getRunMutation => _runMutation;
 String key;
  final storage = new FlutterSecureStorage();

QueryResult _result;
QueryResult get getResult => _result;


bool isDataEntered = false, continueButton = false, erasseData = false; //Is any complusory data entered by User in Add Propery

 
 void initialize(){
  setupRemoteConfig().then((value) => key = value); //comment for now till Google Place
pageIndex = 0;
notifyListeners(); //To Notify changes
}

getGoogleKey()async{
   key = await storage.read(key: Constants.constClientToken);
}


//initialize for Edit poprperty
void editInitalize(){
  setupRemoteConfig().then((value) => key = value);
}

 void nextPage(){
   //I don't want it be more that 3 index since we have 3  //0, 1, 2
  if(pageIndex > 1){  
    pageIndex = 1;
    notifyListeners();
  }else{
    pageIndex++;
  notifyListeners();
  }
}
//Saving to Firestore
void savedData(){

}
void setCountry({String selectedcountry}){
  _country = selectedcountry;
   notifyListeners();
}

void goback(){
  //I don't want it be be -1, -2 etc so, i retrict if from that
  if(pageIndex == -1){
      pageIndex = 1;
       notifyListeners();
  }else{
     pageIndex--;
  notifyListeners();
  }
}

showMessage({String error}){
_errorMessage = error;
notifyListeners();
}

movetoScreen2({
  @required String propertyName,
  @required String address,
  @required String contactEmail,
  @required String phoneN,
   @required String country,
   @required String isoCod,
}){

 //Check Address
  if(address.isEmpty){
 print(address);
showMessage(error: 'Address required');
  } 
   //Check Phone Number
 else if(phoneN.isEmpty){
    print(phoneN);
    showMessage(error: 'Invalid Phone Number');
  }
  //Check Country
  else if(country == null){
    print(country);
 showMessage(error: 'Country required');
  }
 
 else if(propertyName.isEmpty){
    print(propertyName);
  showMessage(error: 'Property Name required');

  }else if(contactEmail.isEmpty){
     print(contactEmail);
showMessage(error: 'Email required');
  
  } else if(contactEmail != null){
    print('Am here');
     String check = _customFuntion.validateEmail(contactEmail);
    
     if(check != null){
        showMessage(error: 'The email you entered is invalid');

       }else if(address.isNotEmpty && propertyName.isNotEmpty  && phoneN.isNotEmpty && country.isNotEmpty && contactEmail.isNotEmpty){
    //TODO GOTO Next Screen
    print('Am Here...GOT...............');
         
         //Saving to viewmodel variable in order to store and send to d server.
      _propertyName = propertyName;
      _phoneN = phoneN; 
      _address = address;
      _country = country;
     _contactEmail = contactEmail;
     _phoneIcode = isoCod;
    
nextPage();
  }
  }
}


 Future pickImage()async{
    var pickedImage = await ImagePicker.pickImage(source: ImageSource.gallery);
    _image = pickedImage;
    notifyListeners(); //To Notify changes
 } 

Future pickDocument(TextEditingController docuemntController)async{
    var pickedDocument = await FilePicker.getFile();
    _file = pickedDocument;
    docuemntController.text = _file.path;
    //setPropertyRulesButtonStatus(true);
    notifyListeners(); //To Notify changes
 } 

 lastScreenbutton({ 
   @required String rules, @required String document, @required bool mustSetData})async{

     if(mustSetData){ //IF Skip button is press,this wull be false but if complete is press this will be true
     if(rules.isEmpty){
showMessage(error: 'Property rules required');
  } 
   //Check Phone Number
 else if(document.isEmpty){
 
    showMessage(error: 'Property Document link required');

  }else if(rules.isNotEmpty && document.isNotEmpty){
      bool _validURL = Uri.parse(document).isAbsolute;
      if(_validURL){
        //Asigned to global variable
        _rules = rules;
        _documentLink = document;
         sendrulesData();
      }else{
         showMessage(error: 'Invalid Document link');
      }
     //    print(rules);
  //  print(_file.path);
 
  }
     }else{
       print('I dy here');
//Am not compulosry to be filled.
  sendrulesData();
     }

 }
 sendrulesData(){
 List<String> datalist = new List<String>();
  datalist.add(_propertyName);  datalist.add(_address);   datalist.add(_phoneN);
  datalist.add(_country);   datalist.add(_contactEmail); datalist.add(_phoneIcode); 
  datalist.add(_rules); datalist.add(_documentLink);   
    _navigationService.navigateTo(addpropertyloadingRoute, arguments: datalist); 
 }


 setPropertyRulesButtonStatus(bool value){
   isPropertyRulesSet = value;
   notifyListeners();
 }
  setdataEnterdStatus(bool value){
   isDataEntered = value;
   notifyListeners();
 }
 setCountinueButton(bool value){
   continueButton = value;
   notifyListeners();
 }

 setErased(bool value){
    erasseData = value;
   notifyListeners();
 }
 afterloading(){
   _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
 }



//TODO********************** UPDATE/ EDIT/ ADD PROPERTY *************************
  updateDetails({@required String propertyName, @required String address, @required String contactEmail,
    @required String phoneN, @required String country, pID, @required String phoneIcode,  @required String rules,
     @required String link, 
  }){

    //Check Address
    if(address.isEmpty){
      print(address);
      showMessage(error: 'Address required');
    }
    //Check Phone Number
    else if(phoneN.isEmpty){
      print(phoneN);
      showMessage(error: 'Invalid Phone Number');
    }
    //Check Country
    else if(country == null){
      print(country);
      showMessage(error: 'Country required');
    }

    else if(propertyName.isEmpty){
      print(propertyName);
      showMessage(error: 'Property Name required');

    }else if(contactEmail.isEmpty){
      print(contactEmail);
      showMessage(error: 'Email required');

    } else if(contactEmail != null){
      print('Am here');
      String check = _customFuntion.validateEmail(contactEmail);

      if(check != null){
        showMessage(error: 'The email you entered is invalid');

      }else if(address.isNotEmpty && propertyName.isNotEmpty  && phoneN.isNotEmpty && country.isNotEmpty && contactEmail.isNotEmpty){
          //DEBUG ONLY
        // print(propertyName);
        // print(phoneN);
        // print(address);
        // print(country);
        // print(contactEmail);
        
 List<String> updateList = new List<String>();
  updateList.add(pID);
  updateList.add(propertyName);  
  updateList.add(address);   updateList.add(phoneN);
  updateList.add(country);   updateList.add(contactEmail); updateList.add(phoneIcode); 
  updateList.add(rules); updateList.add(link);  

        //TODO UPDATE CHANGES
    _navigationService.navigateTo(updatepropertyloadingRoute, arguments: updateList); 
      }
    }
  }

  deleteProperty({@required String propertyName}){
   //TODO DELETE API
    _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
  }


 
  
 Future setupRemoteConfig() async {
   setBusy(true);
  final RemoteConfig remoteConfig = await RemoteConfig.instance;
  // Enable developer mode to relax fetch throttling
   var result;

   try {
             remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
              await remoteConfig.fetch(expiration: const Duration(seconds: 0));
              await remoteConfig.activateFetched();
             result = remoteConfig.getString('key');
            } on FetchThrottledException catch (exception) {
              // Fetch throttled.
              print(exception);
            } catch (exception) {
              print(
                  'Unable to fetch remote config. Cached or default values will be '
                  'used');
            }

             setBusy(false);
  return result;
}

}


