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
String _propertyName, _address, _contactEmail, _phoneN;
String _errorMessage;
String get errorM => _errorMessage;
String _country;
String get getCountry => _country;
MutationOptions _addpropertyOption;
MutationOptions get  getaddPropertyOption => _addpropertyOption;
RunMutation _runMutation;
RunMutation get getRunMutation => _runMutation;

QueryResult _result;
QueryResult get getResult => _result;


bool isDataEntered = false, continueButton = false, erasseData = false; //Is any complusory data entered by User in Add Propery

 
 void initialize(){
pageIndex = 0;
notifyListeners(); //To Notify changes
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
      _phoneN = isoCod+phoneN; 
      _address = address;
      _country = country;
     _contactEmail = contactEmail;
    
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
   @required String rules})async{
  if(rules.isEmpty || _file == null || rules.isNotEmpty || _file != null){ //Am not compulosry to be filled.
  //    print(rules);
  //  print(_file.path);

  List<String> datalist = new List<String>();
  datalist.add(_propertyName);  datalist.add(_address);   datalist.add(_phoneN);
  datalist.add(_country);   datalist.add(_contactEmail); //datalist.add();


   
    _navigationService.navigateTo(addpropertyloadingRoute, arguments: datalist);
  
  }
  
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
    @required String phoneN, @required String country, pID
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

         updateAPI(address: address, contactEmail: contactEmail, country: country, phoneN: phoneN,
         propertyName: propertyName, id: pID);
        

      
        //TODO UPDATE CHANGES
      
      }
    }
  }

  deleteProperty({@required String propertyName}){

   //TODO DELETE API
    _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
  }


  updateAPI({@required String propertyName, @required String address, @required String contactEmail,
    @required String phoneN, @required String country, id})async{
        setBusy(true);
     GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
          documentNode: gql(updatePropertyQuery),
          onError: (error) {
            print('******************Error Occur: ${error.toString()}');
          },
          onCompleted: (data) {
            //Note: Don't compare data here or do anything that's pertaining to returened Data, 
            //This will definately return even if it's error
           
          },
          //Later (Rules and document)
          variables: <String, dynamic>{
            "id": id,
            "user_id": Constants().dummyUseriD,
            "name": propertyName,
            "phone": phoneN,
            "email": contactEmail,
            "street": address,
            "state": "Not include",
            "postal_code": 0,
            "city": "Not include",
            "country": country
          }
      )
    );
     if (result.data == null) {
        setBusy(false);
             print('Result is Null');
         }else{
            setBusy(false);
            print('Result is not Null');
            print(result.data['updateProperty']['name']);
             _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
         }
  }
  
 
}


