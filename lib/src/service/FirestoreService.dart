import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/model/UserDetails.dart';
import 'package:hostapp/src/model/propertyModel.dart';

class FirestoreService{
    final CollectionReference _usersCollectionReference =
      Firestore.instance.collection('users');
       final CollectionReference _addPropertyCollectionReference =
      Firestore.instance.collection('DemoProperty');

      final StreamController<List<PropertyModel>> _streamController = 
      StreamController<List<PropertyModel>>.broadcast();

  Future createUser(UserDetails user) async {
    try {
      await _usersCollectionReference.document(user.id).setData(user.toJson());
    } catch (e) {
      // TODO: Find or create a way to repeat error handling without so much repeated code
      if (e is PlatformException) {
        return e.message;
      }

      return e.toString();
    }
  }

  Future getUser(String uid) async {
    try {
      var userData = await _usersCollectionReference.document(uid).get();
      return UserDetails.fromData(userData.data);
    } catch (e) {
      // TODO: Find or create a way to repeat error handling without so much repeated code
      if (e is PlatformException) {
        return e.message;
      }

      return e.toString();
    }
  }

  Future addProperty(PropertyModel propertyModel) async {
    try {
      //print(imageUrl.toString());
     await _addPropertyCollectionReference.add(propertyModel.toJson());
    } catch (e) {
     
      if (e is PlatformException) {
        return e.message;
      }

      return e.toString();
    }
  }

   Stream fetchProperties(){
      //Register handler for when property changes
      _addPropertyCollectionReference.snapshots().listen((event) {
        if(event.documents.isNotEmpty){
        var property = event.documents.map((e) => PropertyModel.fromJson(e.data))
        .where((element) => element.propertyName != null).toList();

          _streamController.add(property);
        }
      });

      return _streamController.stream;
   
  }
  
}