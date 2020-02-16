import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/model/propertyModel.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/CloudStorageService.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:image_picker/image_picker.dart';

class AddPropertyViewModel extends BaseModel{
    final AuthService _authService = locator<AuthService>();
final DialogService _dialogService = locator<DialogService>();
final NavigationService _navigationService = locator<NavigationService>();
final FirestoreService _firestoreService = locator<FirestoreService>();
final CloudStorageService _cloudStorageService = locator<CloudStorageService>();
int pageIndex = 0;
File _image;
File get selectedImage => _image;
    CloudStorageResult storageResult;
    String _propertyName, _address, _contactEmail, _phoneN;
 
 

 void initialize(){
pageIndex = 1;
notifyListeners(); //To Notify changes
}

 void nextPage(){
   //I don't want it be more that 3 index since we have 3  //0, 1, 2
  if(pageIndex > 2){  
    pageIndex = 2;
    notifyListeners();
  }else{
    pageIndex++;
  notifyListeners();
  }
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

movetoScreen2({
  @required String propertyName,
  @required String address,
  @required String contactEmail,
  @required String phoneN,
}){
  
  if(propertyName.length == 0 || address.length == 0 || contactEmail.length == 0 || phoneN.length == 0){
       _dialogService.showDialog(
              title: 'Error!',
              description: 'Empty field Detected',
            );
  }else{
      _propertyName = propertyName;
       _address = address;
        _contactEmail = contactEmail;
         _phoneN = phoneN;

    //print('$propertyName, $address $contactEmail $phoneN');
    nextPage();
  }
}


 Future pickImage()async{
    var pickedImage = await ImagePicker.pickImage(source: ImageSource.gallery);
    _image = pickedImage;
    notifyListeners(); //To Notify changes
 } 

 lastScreenbutton({ 
   @required String propertyName,
  @required String address,
  @required String contactEmail,
  @required String phoneN,
  File image,
String propertyRule})async{

    setBusy(true);
     storageResult = await _cloudStorageService.uploadImage(imageToUpload: image, title: _propertyName);
     var result = await _firestoreService.addProperty(
      PropertyModel(
        propertyAddress: _address,
        propertyEmail: _contactEmail,
        propertyImage: storageResult.imageUrl,
        imageFileName : storageResult.imageFileName,
        propertyPhone: _phoneN,
        propertyName: _propertyName,
        propertyRules: propertyRule,
      )
    );
    setBusy(false);

    if(result is String){
      await _dialogService.showDialog(
        title: 'Unable to Create Property',
        description: result
      );
    }else{
      await _dialogService.showDialog(
        title: 'Success',
        description: 'Property Successfully Upload'
      );
    }

 }

 logout()async{
   await _authService.signOut();
   _navigationService.navigateTo(signInViewRoute);

 }
}