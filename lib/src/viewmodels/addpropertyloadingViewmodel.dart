import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/widgets/editable_text.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:image_picker/image_picker.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/util/customFunctions.dart';

class AddpropertyloadingViewmodel extends BaseModel{
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
final NavigationService _navigationService = locator<NavigationService>();

  addPropertyAPI({List data})async{
    String pName = data[0]; //propertyName
    String pAddress = data[1]; //Address
    String phoneN = data[2]; //PhoneNumber
    String country = data[3]; //Country
    String cEmail = data[4]; //comtact email
    String phoneIcode = data[5]; //comtact email

    //   print('**************** COMING DATA *****************');
    //    print(pName); 
    // print(pAddress); 
    //  print(phoneN); 
    // print(country); 
    //     print(cEmail); 
    //      print('**************** *****************');

    GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
          documentNode: gql(addPropertyQuery),
          onError: (error) {
            print('******************Error Occur: ${error.toString()}');
          },
          onCompleted: (data) {
            //Note: Don't compare data here or do anything that's pertaining to returened Data, This will definately return even if it's error
           

          },
          //Later (Rules and document)
          variables: <String, dynamic>{
              "userID": Constants().apiKey,
              "phone": phoneN,
              "email": cEmail,
              "street": pAddress,
              "state": "Not Include",
              "postal_code": 0,
              "name": pName,
              'phoneCountry_code': phoneIcode,
              "city": "Not include",
              "country": country,
          }
      )
    );
     if (result.data == null) {
             print('Result is Null');
         }else{
            print('Result is not Null');
            print(result.data['createProperty']['id']);

             _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
         }
  }


}